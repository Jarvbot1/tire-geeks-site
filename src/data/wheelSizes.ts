import { vehicleDatabase } from '@/data/vehicleDatabase';
import { tireSizes, type TireSize } from '@/data/tireSizes';

export interface WheelSize {
  diameter: number;        // 18
  slug: string;            // "18-inch"
  label: string;           // "18-inch"
  category: 'Small' | 'Mid-size' | 'Large' | 'Oversized';
  /** One-line positioning used in hero + meta. */
  tagline: string;
  /** What this diameter is genuinely good for. */
  goodFor: string;
  /** Honest ride / looks / cost tradeoffs specific to this size. */
  tradeoffs: string;
  /** Who typically runs it. */
  idealFor: string;
  /** Brands we stock in this diameter — varies by size. */
  brands: string[];
}

/* ------------------------------------------------------------------ */
/*  Source data — hand-written per diameter so no two pages are thin   */
/*  templated duplicates. 17.5"/19.5" are commercial/medium-duty and   */
/*  intentionally excluded from this consumer-facing set.              */
/* ------------------------------------------------------------------ */

export const wheelSizes: WheelSize[] = [
  {
    diameter: 15,
    slug: '15-inch',
    label: '15-inch',
    category: 'Small',
    tagline: 'The economy and comfort champion — tall sidewalls, cheap tires, smooth ride.',
    goodFor:
      'A 15-inch wheel is all about value and ride comfort. The tall tire sidewall that comes with a 15" wheel soaks up Sacramento’s rough streets and freeway expansion joints, and replacement tires are about the cheapest you can buy. It’s the right size for keeping an economy car, compact, or older vehicle on the road affordably.',
    tradeoffs:
      'You give up the aggressive, filled-out look of a larger wheel and some steering sharpness. But you gain the best pothole resistance of any size, the lowest tire cost, and the most comfortable ride. For a daily commuter on a budget, that’s a smart trade.',
    idealFor: 'Economy cars, compacts, older sedans, and small trucks.',
    brands: ['Toyo', 'Falken', 'Cooper', 'Hankook', 'Nexen'],
  },
  {
    diameter: 16,
    slug: '16-inch',
    label: '16-inch',
    category: 'Small',
    tagline: 'Value and comfort with a slightly more modern footprint.',
    goodFor:
      'The 16-inch wheel keeps most of the comfort and affordability of a 15" while fitting a wider range of modern compacts, sedans, and older SUVs and trucks. Tire selection is broad and inexpensive, and the still-tall sidewall protects your rims on Sacramento’s pockmarked roads.',
    tradeoffs:
      'It’s a practical, low-drama size rather than a showpiece. You won’t get the planted stance of an 18" or 20", but you keep a cushioned ride, strong impact resistance, and low running costs — ideal for a no-nonsense daily driver.',
    idealFor: 'Compacts, midsize sedans, older SUVs, and base-model trucks.',
    brands: ['Toyo', 'Falken', 'Cooper', 'BFGoodrich', 'Hankook'],
  },
  {
    diameter: 17,
    slug: '17-inch',
    label: '17-inch',
    category: 'Mid-size',
    tagline: 'The off-road favorite — enough sidewall to air down, plenty of tire choice.',
    goodFor:
      'Seventeen inches is the sweet spot for trucks, Jeeps, and off-road SUVs. The generous sidewall lets you air down for trail grip and shrug off rocks and ruts, and it’s the most popular diameter for all-terrain and mud-terrain tires. On cars, it’s a balanced upgrade that sharpens looks without hurting the ride.',
    tradeoffs:
      'It’s not the flashiest diameter on a full-size truck, where many owners jump to 18" or 20" for presence. But for anyone who actually goes off pavement — Sierra trails, fire roads, Tahoe trips — 17" is the functional choice, and tire prices stay reasonable.',
    idealFor: 'Jeeps, midsize and off-road trucks, 4x4 SUVs, and sport compacts.',
    brands: ['Toyo', 'BFGoodrich', 'Nitto', 'Falken', 'Black Rhino', 'Cooper'],
  },
  {
    diameter: 18,
    slug: '18-inch',
    label: '18-inch',
    category: 'Mid-size',
    tagline: 'The modern default — the widest tire selection of any size.',
    goodFor:
      'Eighteen inches is the most common modern wheel size across cars, crossovers, SUVs, and trucks, which means you get the broadest tire selection at the most competitive prices. It strikes the best all-round balance of looks, ride comfort, handling, and cost — a confident upgrade from 16"/17" without going harsh.',
    tradeoffs:
      'There’s almost no downside for a daily driver, which is exactly why it’s the default. You sacrifice a little of the deep-sidewall cushion of a 17" and a little of the dramatic stance of a 20", landing in the practical middle that suits the most vehicles.',
    idealFor: 'Modern sedans, crossovers, SUVs, and half-ton trucks.',
    brands: ['Toyo', 'Michelin', 'Nitto', 'BFGoodrich', 'Falken', 'Black Rhino'],
  },
  {
    diameter: 19,
    slug: '19-inch',
    label: '19-inch',
    category: 'Large',
    tagline: 'The premium-sedan and EV size — sporty looks, low-profile feel.',
    goodFor:
      'Nineteen inches shows up on premium sedans, sport crossovers, and many EVs (including Teslas). It delivers a planted, performance look and crisp steering response from the shorter sidewall, while still being livable day to day. On an EV, the right 19" tire balances looks with rolling resistance and range.',
    tradeoffs:
      'Tire selection is narrower and pricier than 18" or 20", and the lower-profile sidewall transmits more road imperfections and is more vulnerable to pothole damage. It’s a style-and-handling choice more than a value one.',
    idealFor: 'Premium sedans, sport crossovers, and EVs like the Tesla Model 3 and Model Y.',
    brands: ['Michelin', 'Toyo', 'Continental', 'Pirelli', 'Falken'],
  },
  {
    diameter: 20,
    slug: '20-inch',
    label: '20-inch',
    category: 'Large',
    tagline: 'The stance king — dominant on lifted trucks and luxury SUVs.',
    goodFor:
      'Twenty inches is the go-to for trucks, full-size SUVs, and performance and luxury vehicles that want presence. It fills the wheel wells, looks aggressive on a leveled or lifted truck, and there’s a huge aftermarket of custom wheels and tires in this size. It’s the most popular custom-wheel diameter we build packages around.',
    tradeoffs:
      'The shorter sidewall firms up the ride and is less forgiving of potholes than 17"/18". Tires cost more, and on a truck you give up a little off-road sidewall protection. For looks and on-road stance, though, nothing else lands the same.',
    idealFor: 'Lifted and leveled trucks, full-size SUVs, and performance/luxury cars.',
    brands: ['Fuel', 'Black Rhino', 'Toyo', 'Nitto', 'Ferrada', 'Vogue'],
  },
  {
    diameter: 22,
    slug: '22-inch',
    label: '22-inch',
    category: 'Oversized',
    tagline: 'Maximum presence for luxury SUVs and show trucks.',
    goodFor:
      'Twenty-two inches is a statement size for luxury SUVs, full-size trucks, and show builds. It delivers maximum visual impact and a filled-out, premium stance that smaller wheels can’t match. We build a lot of 22" wheel-and-tire packages on Escalades, Tahoes, and full-size trucks around Sacramento.',
    tradeoffs:
      'This is a looks-first size. The very low-profile tire rides firm, is the most vulnerable to pothole and curb damage, and tires are expensive and more specialized. It’s best for vehicles that mostly see pavement and owners who prioritize the look.',
    idealFor: 'Luxury SUVs (Escalade, Tahoe, Yukon), full-size trucks, and show builds.',
    brands: ['Fuel', 'Vogue', 'Ferrada', 'Black Rhino'],
  },
  {
    diameter: 24,
    slug: '24-inch',
    label: '24-inch',
    category: 'Oversized',
    tagline: 'The ultimate show size — built for visual impact, by special order.',
    goodFor:
      'Twenty-four inches is the top of the show-and-luxury world. On a full-size SUV or truck it makes an unmistakable statement, and it’s a specialty we fit for customers who want the biggest, boldest look possible. These are typically built as bespoke wheel-and-tire packages.',
    tradeoffs:
      'This is purely a visual choice. The ride is firm, the ultra-low-profile tires are expensive and made in limited sizes, and pothole and curb risk is at its highest. Fitment has to be dialed in carefully to clear suspension and fenders. It’s for show builds and dedicated luxury cruisers, not daily practicality.',
    idealFor: 'Full-size luxury SUVs and trucks built for show.',
    brands: ['Fuel', 'Vogue', 'Ferrada'],
  },
];

/* ------------------------------------------------------------------ */
/*  Lookups                                                            */
/* ------------------------------------------------------------------ */

export function getWheelSizeBySlug(slug: string): WheelSize | undefined {
  return wheelSizes.find((w) => w.slug === slug);
}

export function getWheelSizesByCategory(): { category: string; sizes: WheelSize[] }[] {
  const order: WheelSize['category'][] = ['Small', 'Mid-size', 'Large', 'Oversized'];
  return order.map((category) => ({ category, sizes: wheelSizes.filter((w) => w.category === category) }));
}

/** Tire sizes from our catalog that mount on this wheel diameter. */
export function getTireSizesForWheel(diameter: number): TireSize[] {
  return tireSizes.filter((t) => t.wheelIn === diameter);
}

/* ------------------------------------------------------------------ */
/*  Real vehicle matches by wheel diameter, from the fitment database. */
/*  vehicleDatabase wheel entries look like "20x9" / "18x8.5".         */
/*  TODO(Phase 3): cross-link these to /fitment/[slug] vehicle pages.  */
/* ------------------------------------------------------------------ */

export interface WheelVehicleMatch {
  make: string;
  model: string;
  latestYear: number;
}

export function getVehiclesForWheelDiameter(diameter: number, limit = 10): WheelVehicleMatch[] {
  const prefix = `${diameter}x`;
  const byKey = new Map<string, WheelVehicleMatch>();
  for (const year of vehicleDatabase) {
    for (const make of year.makes) {
      for (const model of make.models) {
        for (const sub of model.submodels) {
          if (!sub.wheelSizes.some((w) => w.replace(/[^0-9x.]/g, '').startsWith(prefix))) continue;
          const key = `${make.make}|${model.model}`;
          const existing = byKey.get(key);
          if (!existing || year.year > existing.latestYear) {
            byKey.set(key, { make: make.make, model: model.model, latestYear: year.year });
          }
        }
      }
    }
  }
  return Array.from(byKey.values())
    .sort((a, b) => b.latestYear - a.latestYear || a.make.localeCompare(b.make))
    .slice(0, limit);
}

/** Anti-thin rule: a wheel page with no catalog tire pairings AND no vehicle
 *  matches carries too little unique data to merit indexing. */
export function shouldIndexWheelSize(w: WheelSize): boolean {
  const hasPairs = getTireSizesForWheel(w.diameter).length > 0;
  const hasVehicles = getVehiclesForWheelDiameter(w.diameter, 1).length > 0;
  return hasPairs || hasVehicles;
}
