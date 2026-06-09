import fitmentsData from '@/data/fitments.json';

export interface UpgradeSize {
  size: string;
  needsLevel?: boolean;
  needsLift?: boolean;
  note?: string;
}

export interface Fitment {
  make: string;
  model: string;
  slug: string;                       // "honda-accord"
  type: 'Car' | 'Truck' | 'SUV' | 'EV';
  factoryTireSizes: string[] | null;  // null when uncertain — template omits the section
  commonUpgradeSizes: UpgradeSize[] | null;
  boltPattern: string | null;         // null when uncertain
  typicalWheelDiameters: number[];
  recommendedTireType: string;
  relatedBlogSlug: string | null;
  sacramentoNote: string | null;
}

// Source of truth lives in src/data/fitments.json.
export const fitments: Fitment[] = fitmentsData as Fitment[];

/* ------------------------------------------------------------------ */
/*  Lookups                                                            */
/* ------------------------------------------------------------------ */

export function getFitmentBySlug(slug: string): Fitment | undefined {
  return fitments.find((f) => f.slug === slug);
}

export function getFitmentsByType(): { type: string; vehicles: Fitment[] }[] {
  const order: Fitment['type'][] = ['Car', 'Truck', 'SUV', 'EV'];
  return order.map((type) => ({
    type,
    vehicles: fitments
      .filter((f) => f.type === type)
      .sort((a, b) => a.make.localeCompare(b.make) || a.model.localeCompare(b.model)),
  }));
}

/**
 * Accuracy gate: a fitment page is only indexed when its core data — at least
 * one factory tire size AND a bolt pattern — is present. Incomplete/uncertain
 * pages are still built and hub-reachable but noindexed and kept out of sitemap.
 */
export function isFitmentComplete(f: Fitment): boolean {
  return !!(f.factoryTireSizes && f.factoryTireSizes.length > 0 && f.boltPattern);
}

/** All tire-size strings a vehicle is associated with (factory + upgrades). */
export function fitmentSizes(f: Fitment): string[] {
  return [
    ...(f.factoryTireSizes ?? []),
    ...((f.commonUpgradeSizes ?? []).map((u) => u.size)),
  ];
}

/* ------------------------------------------------------------------ */
/*  Cross-link helpers — power the tire-size <-> vehicle <-> wheel loop */
/* ------------------------------------------------------------------ */

export interface VehicleLink {
  make: string;
  model: string;
  slug: string;
  type: Fitment['type'];
  isFactory: boolean;   // true = OE size, false = listed only as an upgrade
}

/** Vehicles (from fitments.json) that run a given tire size, OE or as an upgrade. */
export function getVehiclesForTireSize(size: string, limit = 12): VehicleLink[] {
  const links: VehicleLink[] = [];
  for (const f of fitments) {
    const isFactory = (f.factoryTireSizes ?? []).includes(size);
    const isUpgrade = (f.commonUpgradeSizes ?? []).some((u) => u.size === size);
    if (isFactory || isUpgrade) {
      links.push({ make: f.make, model: f.model, slug: f.slug, type: f.type, isFactory });
    }
  }
  return links
    .sort((a, b) => Number(b.isFactory) - Number(a.isFactory) || a.make.localeCompare(b.make))
    .slice(0, limit);
}

/** Vehicles (from fitments.json) that commonly run a given wheel diameter. */
export function getVehiclesForWheelDiameter(diameter: number, limit = 12): VehicleLink[] {
  return fitments
    .filter((f) => f.typicalWheelDiameters.includes(diameter))
    .sort((a, b) => a.make.localeCompare(b.make) || a.model.localeCompare(b.model))
    .slice(0, limit)
    .map((f) => ({ make: f.make, model: f.model, slug: f.slug, type: f.type, isFactory: true }));
}
