import { vehicleDatabase } from '@/data/vehicleDatabase';
import tireSizesData from '@/data/tireSizes.json';

export interface TireSize {
  size: string;       // "265/70R17"
  slug: string;       // "265-70r17"
  widthMm: number;
  aspect: number;
  wheelIn: number;
  sectionIn: number;
  sidewallIn: number;
  overallIn: number;
  use: string;        // "Truck / off-road" etc.
}

// Source of truth lives in src/data/tireSizes.json (camelCase keys match TireSize).
export const tireSizes: TireSize[] = tireSizesData as TireSize[];

/* ------------------------------------------------------------------ */
/*  Lookups                                                            */
/* ------------------------------------------------------------------ */

export function getTireSizeBySlug(slug: string): TireSize | undefined {
  return tireSizes.find((t) => t.slug === slug);
}

/** Group sizes by their `use` bucket, preserving array order within each group. */
export function getTireSizesByUse(): { use: string; sizes: TireSize[] }[] {
  const order = ['Passenger car / sedan', 'SUV / crossover', 'Truck / off-road'];
  return order.map((use) => ({ use, sizes: tireSizes.filter((t) => t.use === use) }));
}

/* ------------------------------------------------------------------ */
/*  Alternatives — real, computed per page                            */
/*  Sizes whose overall diameter is within ~3% (a safe-ish swap).     */
/* ------------------------------------------------------------------ */

export interface AlternativeSize {
  size: TireSize;
  diffPct: number;     // signed % difference in overall diameter vs the base size
  sameWheel: boolean;  // true = bolts onto the same wheel diameter (direct swap)
}

export function getAlternativeSizes(slug: string, limit = 3): AlternativeSize[] {
  const base = getTireSizeBySlug(slug);
  if (!base) return [];
  return tireSizes
    .filter((t) => t.slug !== base.slug)
    .map((t) => ({
      size: t,
      diffPct: ((t.overallIn - base.overallIn) / base.overallIn) * 100,
      sameWheel: t.wheelIn === base.wheelIn,
    }))
    .filter((a) => Math.abs(a.diffPct) <= 3)
    // Prefer same-wheel direct swaps first, then closest diameter
    .sort((a, b) => {
      if (a.sameWheel !== b.sameWheel) return a.sameWheel ? -1 : 1;
      return Math.abs(a.diffPct) - Math.abs(b.diffPct);
    })
    .slice(0, limit);
}

/* ------------------------------------------------------------------ */
/*  Real vehicle matches pulled from the fitment database.            */
/*  Tire-size pages use this so they carry genuine per-page data and  */
/*  are not thin doorway pages.                                       */
/*  TODO(Phase 3): merge/cross-link with src/data/fitments.ts so the  */
/*  matches also deep-link to /fitment/[slug] vehicle pages.          */
/* ------------------------------------------------------------------ */

export interface VehicleMatch {
  make: string;
  model: string;
  latestYear: number;
  exampleTrim: string;
}

/** Returns vehicles from vehicleDatabase that run the given tire size on any trim. */
export function getVehiclesUsingSize(size: string, limit = 10): VehicleMatch[] {
  const byKey = new Map<string, VehicleMatch>();
  for (const year of vehicleDatabase) {
    for (const make of year.makes) {
      for (const model of make.models) {
        for (const sub of model.submodels) {
          // tire entries may carry suffixes like "245/40R20 (F)"
          if (!sub.tireSizes.some((s) => s.includes(size))) continue;
          const key = `${make.make}|${model.model}`;
          const existing = byKey.get(key);
          if (!existing || year.year > existing.latestYear) {
            byKey.set(key, {
              make: make.make,
              model: model.model,
              latestYear: year.year,
              exampleTrim: sub.submodel,
            });
          }
        }
      }
    }
  }
  return Array.from(byKey.values())
    .sort((a, b) => b.latestYear - a.latestYear || a.make.localeCompare(b.make))
    .slice(0, limit);
}
