// Vehicle tire fitment database
// Structure: Year → Make → Model → Submodel → Tire Sizes

export interface VehicleTireSpec {
  submodel: string;
  tireSizes: string[];
  wheelSizes: string[];
  boltPattern: string;
  notes?: string;
}

export interface VehicleModel {
  model: string;
  submodels: VehicleTireSpec[];
}

export interface VehicleMake {
  make: string;
  models: VehicleModel[];
}

export interface VehicleYear {
  year: number;
  makes: VehicleMake[];
}

// ══════════════════════════════════════════
// 2024 FULL DATA
// ══════════════════════════════════════════

const makes2024: VehicleMake[] = [
  {
    make: 'Chevrolet',
    models: [
      {
        model: 'Silverado 1500',
        submodels: [
          { submodel: 'WT / Custom', tireSizes: ['255/70R17', '265/65R18'], wheelSizes: ['17x8', '18x8.5'], boltPattern: '6x139.7' },
          { submodel: 'LT / RST', tireSizes: ['265/65R18', '275/60R20'], wheelSizes: ['18x8.5', '20x9'], boltPattern: '6x139.7' },
          { submodel: 'LTZ / High Country', tireSizes: ['275/60R20', '275/50R22'], wheelSizes: ['20x9', '22x9'], boltPattern: '6x139.7' },
          { submodel: 'Trail Boss', tireSizes: ['275/65R18', '275/60R20'], wheelSizes: ['18x8.5', '20x9'], boltPattern: '6x139.7' },
          { submodel: 'ZR2', tireSizes: ['275/65R18'], wheelSizes: ['18x8.5'], boltPattern: '6x139.7', notes: 'Multimatic DSSV dampers, wider track' },
        ],
      },
      {
        model: 'Tahoe',
        submodels: [
          { submodel: 'LS / LT', tireSizes: ['265/70R17', '275/65R18'], wheelSizes: ['17x8', '18x8.5'], boltPattern: '6x139.7' },
          { submodel: 'RST / Z71 / Premier', tireSizes: ['275/60R20', '285/45R22'], wheelSizes: ['20x9', '22x9'], boltPattern: '6x139.7' },
        ],
      },
      {
        model: 'Camaro',
        submodels: [
          { submodel: 'LT / 1LT', tireSizes: ['245/50R18'], wheelSizes: ['18x8.5'], boltPattern: '5x120' },
          { submodel: 'SS', tireSizes: ['245/40R20 (F)', '275/35R20 (R)'], wheelSizes: ['20x8.5 (F)', '20x9.5 (R)'], boltPattern: '5x120', notes: 'Staggered fitment' },
          { submodel: 'ZL1', tireSizes: ['285/30R20 (F)', '305/30R20 (R)'], wheelSizes: ['20x10 (F)', '20x11 (R)'], boltPattern: '5x120', notes: 'Staggered fitment' },
        ],
      },
    ],
  },
  {
    make: 'Dodge',
    models: [
      {
        model: 'RAM 1500',
        submodels: [
          { submodel: 'Tradesman / Big Horn', tireSizes: ['265/70R17', '275/65R18'], wheelSizes: ['17x7', '18x8'], boltPattern: '6x139.7' },
          { submodel: 'Laramie / Limited', tireSizes: ['275/55R20', '285/45R22'], wheelSizes: ['20x9', '22x9'], boltPattern: '6x139.7' },
          { submodel: 'Rebel', tireSizes: ['275/65R18'], wheelSizes: ['18x8'], boltPattern: '6x139.7', notes: 'Off-road suspension, wider fenders' },
          { submodel: 'TRX', tireSizes: ['325/65R18'], wheelSizes: ['18x8'], boltPattern: '6x139.7', notes: '702hp supercharged, widebody' },
        ],
      },
      {
        model: 'Charger',
        submodels: [
          { submodel: 'SXT / GT', tireSizes: ['235/55R18', '245/45R20'], wheelSizes: ['18x7.5', '20x8'], boltPattern: '5x115' },
          { submodel: 'R/T / Scat Pack', tireSizes: ['245/45R20', '275/40R20'], wheelSizes: ['20x8', '20x9'], boltPattern: '5x115' },
        ],
      },
    ],
  },
  {
    make: 'Ford',
    models: [
      {
        model: 'F-150',
        submodels: [
          { submodel: 'XL / XLT', tireSizes: ['245/70R17', '265/70R17', '275/65R18'], wheelSizes: ['17x7.5', '17x7.5', '18x8.5'], boltPattern: '6x135' },
          { submodel: 'Lariat / King Ranch', tireSizes: ['275/65R18', '275/55R20'], wheelSizes: ['18x8.5', '20x8.5'], boltPattern: '6x135' },
          { submodel: 'Platinum / Limited', tireSizes: ['275/55R20', '275/45R22'], wheelSizes: ['20x8.5', '22x9'], boltPattern: '6x135' },
          { submodel: 'Tremor', tireSizes: ['285/65R18'], wheelSizes: ['18x8.5'], boltPattern: '6x135', notes: 'Off-road package, twin-tube shocks' },
          { submodel: 'Raptor', tireSizes: ['315/70R17', '37x12.5R17'], wheelSizes: ['17x8.5'], boltPattern: '6x135', notes: 'FOX shocks, widebody fenders' },
          { submodel: 'Raptor R', tireSizes: ['37x12.5R17'], wheelSizes: ['17x8.5'], boltPattern: '6x135', notes: '720hp supercharged V8' },
        ],
      },
      {
        model: 'F-250 Super Duty',
        submodels: [
          { submodel: 'XL / XLT', tireSizes: ['275/70R18'], wheelSizes: ['18x8'], boltPattern: '8x170' },
          { submodel: 'Lariat / King Ranch', tireSizes: ['275/65R20'], wheelSizes: ['20x8'], boltPattern: '8x170' },
          { submodel: 'Platinum / Limited', tireSizes: ['275/65R20'], wheelSizes: ['20x8'], boltPattern: '8x170' },
          { submodel: 'Tremor', tireSizes: ['285/60R20'], wheelSizes: ['20x8'], boltPattern: '8x170', notes: 'Off-road package' },
        ],
      },
      {
        model: 'Bronco',
        submodels: [
          { submodel: 'Base / Big Bend / Outer Banks', tireSizes: ['255/70R16', '265/70R17'], wheelSizes: ['16x7', '17x7.5'], boltPattern: '6x139.7' },
          { submodel: 'Badlands / Wildtrak', tireSizes: ['285/70R17', '315/70R17'], wheelSizes: ['17x8', '17x8.5'], boltPattern: '6x139.7' },
          { submodel: 'Raptor', tireSizes: ['37x12.5R17'], wheelSizes: ['17x8.5'], boltPattern: '6x139.7', notes: 'FOX Live Valve shocks, widebody' },
        ],
      },
      {
        model: 'Mustang',
        submodels: [
          { submodel: 'EcoBoost', tireSizes: ['225/55R17', '235/50R18'], wheelSizes: ['17x7.5', '18x8'], boltPattern: '5x114.3' },
          { submodel: 'GT', tireSizes: ['245/45R18', '255/40R19 (F) 275/40R19 (R)'], wheelSizes: ['18x8', '19x9 (F) 19x9.5 (R)'], boltPattern: '5x114.3' },
          { submodel: 'Dark Horse', tireSizes: ['275/35R19 (F)', '305/30R19 (R)'], wheelSizes: ['19x9.5 (F)', '19x10.5 (R)'], boltPattern: '5x114.3', notes: 'Staggered' },
        ],
      },
    ],
  },
  {
    make: 'GMC',
    models: [
      {
        model: 'Sierra 1500',
        submodels: [
          { submodel: 'Pro / SLE / Elevation', tireSizes: ['255/70R17', '265/65R18', '275/60R20'], wheelSizes: ['17x8', '18x8.5', '20x9'], boltPattern: '6x139.7' },
          { submodel: 'SLT / Denali', tireSizes: ['275/60R20', '275/50R22'], wheelSizes: ['20x9', '22x9'], boltPattern: '6x139.7' },
          { submodel: 'AT4 / AT4X', tireSizes: ['275/65R18', '275/60R20'], wheelSizes: ['18x8.5', '20x9'], boltPattern: '6x139.7', notes: 'Off-road suspension' },
        ],
      },
      {
        model: 'Yukon',
        submodels: [
          { submodel: 'SLE / SLT', tireSizes: ['265/70R17', '275/65R18'], wheelSizes: ['17x8', '18x8.5'], boltPattern: '6x139.7' },
          { submodel: 'Denali / AT4', tireSizes: ['275/60R20', '285/45R22'], wheelSizes: ['20x9', '22x9'], boltPattern: '6x139.7' },
        ],
      },
    ],
  },
  {
    make: 'Honda',
    models: [
      {
        model: 'Civic',
        submodels: [
          { submodel: 'LX / Sport', tireSizes: ['215/55R16', '235/40R18'], wheelSizes: ['16x7', '18x8'], boltPattern: '5x114.3' },
          { submodel: 'Si', tireSizes: ['235/40R18'], wheelSizes: ['18x8'], boltPattern: '5x114.3' },
          { submodel: 'Type R', tireSizes: ['265/30R19'], wheelSizes: ['19x9.5'], boltPattern: '5x120', notes: 'Unique bolt pattern for Type R' },
        ],
      },
      {
        model: 'Accord',
        submodels: [
          { submodel: 'LX / EX', tireSizes: ['225/55R17', '235/45R18'], wheelSizes: ['17x7.5', '18x8'], boltPattern: '5x114.3' },
          { submodel: 'Sport / Touring', tireSizes: ['235/45R18', '235/40R19'], wheelSizes: ['18x8', '19x8.5'], boltPattern: '5x114.3' },
        ],
      },
      {
        model: 'CR-V',
        submodels: [
          { submodel: 'LX / EX / EX-L', tireSizes: ['225/65R17', '235/60R18'], wheelSizes: ['17x7', '18x7.5'], boltPattern: '5x114.3' },
        ],
      },
    ],
  },
  {
    make: 'Hyundai',
    models: [
      {
        model: 'Tucson',
        submodels: [
          { submodel: 'SE / SEL / Limited', tireSizes: ['235/65R17', '235/55R19'], wheelSizes: ['17x7', '19x7.5'], boltPattern: '5x114.3' },
        ],
      },
      {
        model: 'Santa Fe',
        submodels: [
          { submodel: 'SE / SEL / Limited', tireSizes: ['235/65R17', '235/55R19', '255/45R21'], wheelSizes: ['17x7', '19x7.5', '21x8'], boltPattern: '5x114.3' },
        ],
      },
    ],
  },
  {
    make: 'Jeep',
    models: [
      {
        model: 'Wrangler',
        submodels: [
          { submodel: 'Sport / Sport S', tireSizes: ['245/75R17', '255/70R18'], wheelSizes: ['17x7.5', '18x7.5'], boltPattern: '5x127' },
          { submodel: 'Sahara', tireSizes: ['255/70R18'], wheelSizes: ['18x7.5'], boltPattern: '5x127' },
          { submodel: 'Rubicon', tireSizes: ['285/70R17', '315/70R17'], wheelSizes: ['17x7.5', '17x8'], boltPattern: '5x127', notes: 'Lockers, disconnecting sway bar, 4.10 gears' },
          { submodel: 'Rubicon 392', tireSizes: ['285/70R17'], wheelSizes: ['17x7.5'], boltPattern: '5x127', notes: '470hp 6.4L V8' },
        ],
      },
      {
        model: 'Grand Cherokee',
        submodels: [
          { submodel: 'Laredo / Limited', tireSizes: ['245/65R18', '265/60R18'], wheelSizes: ['18x8', '18x8'], boltPattern: '5x127' },
          { submodel: 'Overland / Summit', tireSizes: ['265/50R20', '275/45R21'], wheelSizes: ['20x8.5', '21x8.5'], boltPattern: '5x127' },
          { submodel: 'Trailhawk', tireSizes: ['265/60R18'], wheelSizes: ['18x8'], boltPattern: '5x127', notes: 'Quadra-Trac II, skid plates' },
        ],
      },
      {
        model: 'Gladiator',
        submodels: [
          { submodel: 'Sport / Willys', tireSizes: ['245/75R17', '255/70R18'], wheelSizes: ['17x7.5', '18x7.5'], boltPattern: '5x127' },
          { submodel: 'Rubicon', tireSizes: ['285/70R17'], wheelSizes: ['17x7.5'], boltPattern: '5x127', notes: 'Same running gear as Wrangler Rubicon' },
        ],
      },
    ],
  },
  {
    make: 'Kia',
    models: [
      {
        model: 'Telluride',
        submodels: [
          { submodel: 'LX / S / EX', tireSizes: ['245/65R18', '255/55R20'], wheelSizes: ['18x7.5', '20x8'], boltPattern: '5x114.3' },
        ],
      },
    ],
  },
  {
    make: 'Nissan',
    models: [
      {
        model: 'Titan',
        submodels: [
          { submodel: 'S / SV', tireSizes: ['265/70R18'], wheelSizes: ['18x8'], boltPattern: '6x139.7' },
          { submodel: 'PRO-4X', tireSizes: ['275/65R18'], wheelSizes: ['18x8'], boltPattern: '6x139.7', notes: 'Bilstein shocks, skid plates' },
        ],
      },
      {
        model: 'Frontier',
        submodels: [
          { submodel: 'S / SV', tireSizes: ['255/65R17', '265/60R18'], wheelSizes: ['17x7.5', '18x7.5'], boltPattern: '6x114.3' },
          { submodel: 'PRO-4X', tireSizes: ['265/60R18'], wheelSizes: ['18x7.5'], boltPattern: '6x114.3' },
        ],
      },
    ],
  },
  {
    make: 'Tesla',
    models: [
      {
        model: 'Model 3',
        submodels: [
          { submodel: 'Standard / Long Range', tireSizes: ['235/45R18', '235/40R19'], wheelSizes: ['18x8.5', '19x8.5'], boltPattern: '5x114.3' },
          { submodel: 'Performance', tireSizes: ['235/35R20 (F)', '265/35R20 (R)'], wheelSizes: ['20x8.5 (F)', '20x9.5 (R)'], boltPattern: '5x114.3', notes: 'Staggered' },
        ],
      },
      {
        model: 'Model Y',
        submodels: [
          { submodel: 'Standard / Long Range', tireSizes: ['255/45R19', '255/40R20'], wheelSizes: ['19x9.5', '20x9.5'], boltPattern: '5x114.3' },
          { submodel: 'Performance', tireSizes: ['255/35R21 (F)', '275/35R21 (R)'], wheelSizes: ['21x9.5 (F)', '21x10.5 (R)'], boltPattern: '5x114.3', notes: 'Staggered' },
        ],
      },
    ],
  },
  {
    make: 'Toyota',
    models: [
      {
        model: 'Tacoma',
        submodels: [
          { submodel: 'SR / SR5', tireSizes: ['225/75R16', '245/70R17', '265/65R18'], wheelSizes: ['16x7', '17x7.5', '18x7.5'], boltPattern: '6x139.7' },
          { submodel: 'TRD Sport', tireSizes: ['245/70R17'], wheelSizes: ['17x7.5'], boltPattern: '6x139.7' },
          { submodel: 'TRD Off-Road', tireSizes: ['265/70R16', '265/65R17'], wheelSizes: ['16x7', '17x7.5'], boltPattern: '6x139.7' },
          { submodel: 'TRD Pro', tireSizes: ['265/70R16'], wheelSizes: ['16x7'], boltPattern: '6x139.7', notes: 'FOX shocks, TRD lift' },
        ],
      },
      {
        model: 'Tundra',
        submodels: [
          { submodel: 'SR / SR5', tireSizes: ['265/70R18'], wheelSizes: ['18x8'], boltPattern: '6x139.7' },
          { submodel: 'Limited / Platinum', tireSizes: ['275/55R20'], wheelSizes: ['20x8'], boltPattern: '6x139.7' },
          { submodel: 'TRD Pro', tireSizes: ['285/65R18'], wheelSizes: ['18x8'], boltPattern: '6x139.7', notes: 'FOX shocks, TRD forged wheels' },
        ],
      },
      {
        model: '4Runner',
        submodels: [
          { submodel: 'SR5', tireSizes: ['265/70R17'], wheelSizes: ['17x7'], boltPattern: '6x139.7' },
          { submodel: 'TRD Off-Road / Limited', tireSizes: ['265/55R20', '265/70R17'], wheelSizes: ['20x7.5', '17x7'], boltPattern: '6x139.7' },
          { submodel: 'TRD Pro', tireSizes: ['285/70R17'], wheelSizes: ['17x7.5'], boltPattern: '6x139.7', notes: 'FOX shocks, TRD lift, KDSS' },
        ],
      },
      {
        model: 'Camry',
        submodels: [
          { submodel: 'LE / SE', tireSizes: ['215/55R17', '235/45R18'], wheelSizes: ['17x7', '18x8'], boltPattern: '5x114.3' },
          { submodel: 'XSE / XLE', tireSizes: ['235/45R18'], wheelSizes: ['18x8'], boltPattern: '5x114.3' },
        ],
      },
      {
        model: 'RAV4',
        submodels: [
          { submodel: 'LE / XLE', tireSizes: ['225/65R17', '225/60R18'], wheelSizes: ['17x7', '18x7'], boltPattern: '5x114.3' },
          { submodel: 'TRD Off-Road / Adventure', tireSizes: ['225/60R18'], wheelSizes: ['18x7'], boltPattern: '5x114.3' },
        ],
      },
    ],
  },
];

// ══════════════════════════════════════════
// 2023 — Same generation as 2024 for most vehicles
// ══════════════════════════════════════════

const makes2023: VehicleMake[] = [
  {
    make: 'Chevrolet',
    models: [
      {
        model: 'Silverado 1500',
        submodels: [
          { submodel: 'WT / Custom', tireSizes: ['255/70R17', '265/65R18'], wheelSizes: ['17x8', '18x8.5'], boltPattern: '6x139.7' },
          { submodel: 'LT / RST', tireSizes: ['265/65R18', '275/60R20'], wheelSizes: ['18x8.5', '20x9'], boltPattern: '6x139.7' },
          { submodel: 'LTZ / High Country', tireSizes: ['275/60R20', '275/50R22'], wheelSizes: ['20x9', '22x9'], boltPattern: '6x139.7' },
          { submodel: 'Trail Boss', tireSizes: ['275/65R18', '275/60R20'], wheelSizes: ['18x8.5', '20x9'], boltPattern: '6x139.7' },
          { submodel: 'ZR2', tireSizes: ['275/65R18'], wheelSizes: ['18x8.5'], boltPattern: '6x139.7', notes: 'Multimatic DSSV dampers' },
        ],
      },
      {
        model: 'Tahoe',
        submodels: [
          { submodel: 'LS / LT', tireSizes: ['265/70R17', '275/65R18'], wheelSizes: ['17x8', '18x8.5'], boltPattern: '6x139.7' },
          { submodel: 'RST / Z71 / Premier', tireSizes: ['275/60R20', '285/45R22'], wheelSizes: ['20x9', '22x9'], boltPattern: '6x139.7' },
        ],
      },
      {
        model: 'Camaro',
        submodels: [
          { submodel: 'LT / 1LT', tireSizes: ['245/50R18'], wheelSizes: ['18x8.5'], boltPattern: '5x120' },
          { submodel: 'SS', tireSizes: ['245/40R20 (F)', '275/35R20 (R)'], wheelSizes: ['20x8.5 (F)', '20x9.5 (R)'], boltPattern: '5x120', notes: 'Staggered fitment' },
          { submodel: 'ZL1', tireSizes: ['285/30R20 (F)', '305/30R20 (R)'], wheelSizes: ['20x10 (F)', '20x11 (R)'], boltPattern: '5x120', notes: 'Staggered fitment' },
        ],
      },
    ],
  },
  {
    make: 'Dodge',
    models: [
      {
        model: 'RAM 1500',
        submodels: [
          { submodel: 'Tradesman / Big Horn', tireSizes: ['265/70R17', '275/65R18'], wheelSizes: ['17x7', '18x8'], boltPattern: '6x139.7' },
          { submodel: 'Laramie / Limited', tireSizes: ['275/55R20', '285/45R22'], wheelSizes: ['20x9', '22x9'], boltPattern: '6x139.7' },
          { submodel: 'Rebel', tireSizes: ['275/65R18'], wheelSizes: ['18x8'], boltPattern: '6x139.7', notes: 'Off-road suspension' },
          { submodel: 'TRX', tireSizes: ['325/65R18'], wheelSizes: ['18x8'], boltPattern: '6x139.7', notes: '702hp supercharged, widebody' },
        ],
      },
      {
        model: 'Charger',
        submodels: [
          { submodel: 'SXT / GT', tireSizes: ['235/55R18', '245/45R20'], wheelSizes: ['18x7.5', '20x8'], boltPattern: '5x115' },
          { submodel: 'R/T / Scat Pack', tireSizes: ['245/45R20', '275/40R20'], wheelSizes: ['20x8', '20x9'], boltPattern: '5x115' },
          { submodel: 'Hellcat', tireSizes: ['275/40R20'], wheelSizes: ['20x9.5'], boltPattern: '5x115', notes: '717hp supercharged' },
        ],
      },
    ],
  },
  {
    make: 'Ford',
    models: [
      {
        model: 'F-150',
        submodels: [
          { submodel: 'XL / XLT', tireSizes: ['245/70R17', '265/70R17', '275/65R18'], wheelSizes: ['17x7.5', '17x7.5', '18x8.5'], boltPattern: '6x135' },
          { submodel: 'Lariat / King Ranch', tireSizes: ['275/65R18', '275/55R20'], wheelSizes: ['18x8.5', '20x8.5'], boltPattern: '6x135' },
          { submodel: 'Platinum / Limited', tireSizes: ['275/55R20', '275/45R22'], wheelSizes: ['20x8.5', '22x9'], boltPattern: '6x135' },
          { submodel: 'Tremor', tireSizes: ['285/65R18'], wheelSizes: ['18x8.5'], boltPattern: '6x135', notes: 'Off-road package' },
          { submodel: 'Raptor', tireSizes: ['315/70R17', '37x12.5R17'], wheelSizes: ['17x8.5'], boltPattern: '6x135', notes: 'FOX shocks, widebody fenders' },
          { submodel: 'Raptor R', tireSizes: ['37x12.5R17'], wheelSizes: ['17x8.5'], boltPattern: '6x135', notes: '720hp supercharged V8' },
        ],
      },
      {
        model: 'F-250 Super Duty',
        submodels: [
          { submodel: 'XL / XLT', tireSizes: ['275/70R18'], wheelSizes: ['18x8'], boltPattern: '8x170' },
          { submodel: 'Lariat / King Ranch', tireSizes: ['275/65R20'], wheelSizes: ['20x8'], boltPattern: '8x170' },
          { submodel: 'Platinum / Limited', tireSizes: ['275/65R20'], wheelSizes: ['20x8'], boltPattern: '8x170' },
        ],
      },
      {
        model: 'Bronco',
        submodels: [
          { submodel: 'Base / Big Bend / Outer Banks', tireSizes: ['255/70R16', '265/70R17'], wheelSizes: ['16x7', '17x7.5'], boltPattern: '6x139.7' },
          { submodel: 'Badlands / Wildtrak', tireSizes: ['285/70R17', '315/70R17'], wheelSizes: ['17x8', '17x8.5'], boltPattern: '6x139.7' },
          { submodel: 'Raptor', tireSizes: ['37x12.5R17'], wheelSizes: ['17x8.5'], boltPattern: '6x139.7', notes: 'FOX Live Valve shocks, widebody' },
        ],
      },
      {
        model: 'Mustang',
        submodels: [
          { submodel: 'EcoBoost', tireSizes: ['225/55R17', '235/50R18'], wheelSizes: ['17x7.5', '18x8'], boltPattern: '5x114.3' },
          { submodel: 'GT', tireSizes: ['245/45R18', '255/40R19 (F) 275/40R19 (R)'], wheelSizes: ['18x8', '19x9 (F) 19x9.5 (R)'], boltPattern: '5x114.3' },
          { submodel: 'Mach 1', tireSizes: ['255/40R19 (F)', '285/35R19 (R)'], wheelSizes: ['19x9.5 (F)', '19x10 (R)'], boltPattern: '5x114.3', notes: 'Staggered' },
        ],
      },
    ],
  },
  {
    make: 'GMC',
    models: [
      {
        model: 'Sierra 1500',
        submodels: [
          { submodel: 'Pro / SLE / Elevation', tireSizes: ['255/70R17', '265/65R18', '275/60R20'], wheelSizes: ['17x8', '18x8.5', '20x9'], boltPattern: '6x139.7' },
          { submodel: 'SLT / Denali', tireSizes: ['275/60R20', '275/50R22'], wheelSizes: ['20x9', '22x9'], boltPattern: '6x139.7' },
          { submodel: 'AT4 / AT4X', tireSizes: ['275/65R18', '275/60R20'], wheelSizes: ['18x8.5', '20x9'], boltPattern: '6x139.7', notes: 'Off-road suspension' },
        ],
      },
      {
        model: 'Yukon',
        submodels: [
          { submodel: 'SLE / SLT', tireSizes: ['265/70R17', '275/65R18'], wheelSizes: ['17x8', '18x8.5'], boltPattern: '6x139.7' },
          { submodel: 'Denali / AT4', tireSizes: ['275/60R20', '285/45R22'], wheelSizes: ['20x9', '22x9'], boltPattern: '6x139.7' },
        ],
      },
    ],
  },
  {
    make: 'Honda',
    models: [
      {
        model: 'Civic',
        submodels: [
          { submodel: 'LX / Sport', tireSizes: ['215/55R16', '235/40R18'], wheelSizes: ['16x7', '18x8'], boltPattern: '5x114.3' },
          { submodel: 'Si', tireSizes: ['235/40R18'], wheelSizes: ['18x8'], boltPattern: '5x114.3' },
          { submodel: 'Type R', tireSizes: ['265/30R19'], wheelSizes: ['19x9.5'], boltPattern: '5x120', notes: 'Unique bolt pattern for Type R' },
        ],
      },
      {
        model: 'Accord',
        submodels: [
          { submodel: 'LX / EX', tireSizes: ['225/55R17', '235/45R18'], wheelSizes: ['17x7.5', '18x8'], boltPattern: '5x114.3' },
          { submodel: 'Sport / Touring', tireSizes: ['235/45R18', '235/40R19'], wheelSizes: ['18x8', '19x8.5'], boltPattern: '5x114.3' },
        ],
      },
      {
        model: 'CR-V',
        submodels: [
          { submodel: 'LX / EX / EX-L', tireSizes: ['225/65R17', '235/60R18'], wheelSizes: ['17x7', '18x7.5'], boltPattern: '5x114.3' },
        ],
      },
    ],
  },
  {
    make: 'Hyundai',
    models: [
      {
        model: 'Tucson',
        submodels: [
          { submodel: 'SE / SEL / Limited', tireSizes: ['235/65R17', '235/55R19'], wheelSizes: ['17x7', '19x7.5'], boltPattern: '5x114.3' },
        ],
      },
      {
        model: 'Santa Fe',
        submodels: [
          { submodel: 'SE / SEL / Limited', tireSizes: ['235/65R17', '235/55R19', '255/45R21'], wheelSizes: ['17x7', '19x7.5', '21x8'], boltPattern: '5x114.3' },
        ],
      },
    ],
  },
  {
    make: 'Jeep',
    models: [
      {
        model: 'Wrangler',
        submodels: [
          { submodel: 'Sport / Sport S', tireSizes: ['245/75R17', '255/70R18'], wheelSizes: ['17x7.5', '18x7.5'], boltPattern: '5x127' },
          { submodel: 'Sahara', tireSizes: ['255/70R18'], wheelSizes: ['18x7.5'], boltPattern: '5x127' },
          { submodel: 'Rubicon', tireSizes: ['285/70R17', '315/70R17'], wheelSizes: ['17x7.5', '17x8'], boltPattern: '5x127', notes: 'Lockers, disconnecting sway bar' },
          { submodel: 'Rubicon 392', tireSizes: ['285/70R17'], wheelSizes: ['17x7.5'], boltPattern: '5x127', notes: '470hp 6.4L V8' },
        ],
      },
      {
        model: 'Grand Cherokee',
        submodels: [
          { submodel: 'Laredo / Limited', tireSizes: ['245/65R18', '265/60R18'], wheelSizes: ['18x8', '18x8'], boltPattern: '5x127' },
          { submodel: 'Overland / Summit', tireSizes: ['265/50R20', '275/45R21'], wheelSizes: ['20x8.5', '21x8.5'], boltPattern: '5x127' },
          { submodel: 'Trailhawk', tireSizes: ['265/60R18'], wheelSizes: ['18x8'], boltPattern: '5x127', notes: 'Quadra-Trac II' },
        ],
      },
      {
        model: 'Gladiator',
        submodels: [
          { submodel: 'Sport / Willys', tireSizes: ['245/75R17', '255/70R18'], wheelSizes: ['17x7.5', '18x7.5'], boltPattern: '5x127' },
          { submodel: 'Rubicon', tireSizes: ['285/70R17'], wheelSizes: ['17x7.5'], boltPattern: '5x127' },
        ],
      },
    ],
  },
  {
    make: 'Kia',
    models: [
      {
        model: 'Telluride',
        submodels: [
          { submodel: 'LX / S / EX', tireSizes: ['245/65R18', '255/55R20'], wheelSizes: ['18x7.5', '20x8'], boltPattern: '5x114.3' },
        ],
      },
    ],
  },
  {
    make: 'Nissan',
    models: [
      {
        model: 'Titan',
        submodels: [
          { submodel: 'S / SV', tireSizes: ['265/70R18'], wheelSizes: ['18x8'], boltPattern: '6x139.7' },
          { submodel: 'PRO-4X', tireSizes: ['275/65R18'], wheelSizes: ['18x8'], boltPattern: '6x139.7', notes: 'Bilstein shocks' },
        ],
      },
      {
        model: 'Frontier',
        submodels: [
          { submodel: 'S / SV', tireSizes: ['255/65R17', '265/60R18'], wheelSizes: ['17x7.5', '18x7.5'], boltPattern: '6x114.3' },
          { submodel: 'PRO-4X', tireSizes: ['265/60R18'], wheelSizes: ['18x7.5'], boltPattern: '6x114.3' },
        ],
      },
    ],
  },
  {
    make: 'Tesla',
    models: [
      {
        model: 'Model 3',
        submodels: [
          { submodel: 'Standard / Long Range', tireSizes: ['235/45R18', '235/40R19'], wheelSizes: ['18x8.5', '19x8.5'], boltPattern: '5x114.3' },
          { submodel: 'Performance', tireSizes: ['235/35R20 (F)', '265/35R20 (R)'], wheelSizes: ['20x8.5 (F)', '20x9.5 (R)'], boltPattern: '5x114.3', notes: 'Staggered' },
        ],
      },
      {
        model: 'Model Y',
        submodels: [
          { submodel: 'Standard / Long Range', tireSizes: ['255/45R19', '255/40R20'], wheelSizes: ['19x9.5', '20x9.5'], boltPattern: '5x114.3' },
          { submodel: 'Performance', tireSizes: ['255/35R21 (F)', '275/35R21 (R)'], wheelSizes: ['21x9.5 (F)', '21x10.5 (R)'], boltPattern: '5x114.3', notes: 'Staggered' },
        ],
      },
    ],
  },
  {
    make: 'Toyota',
    models: [
      {
        model: 'Tacoma',
        submodels: [
          { submodel: 'SR / SR5', tireSizes: ['225/75R16', '245/70R17', '265/65R18'], wheelSizes: ['16x7', '17x7.5', '18x7.5'], boltPattern: '6x139.7' },
          { submodel: 'TRD Sport', tireSizes: ['245/70R17'], wheelSizes: ['17x7.5'], boltPattern: '6x139.7' },
          { submodel: 'TRD Off-Road', tireSizes: ['265/70R16', '265/65R17'], wheelSizes: ['16x7', '17x7.5'], boltPattern: '6x139.7' },
          { submodel: 'TRD Pro', tireSizes: ['265/70R16'], wheelSizes: ['16x7'], boltPattern: '6x139.7', notes: 'FOX shocks, TRD lift' },
        ],
      },
      {
        model: 'Tundra',
        submodels: [
          { submodel: 'SR / SR5', tireSizes: ['265/70R18'], wheelSizes: ['18x8'], boltPattern: '6x139.7' },
          { submodel: 'Limited / Platinum', tireSizes: ['275/55R20'], wheelSizes: ['20x8'], boltPattern: '6x139.7' },
          { submodel: 'TRD Pro', tireSizes: ['285/65R18'], wheelSizes: ['18x8'], boltPattern: '6x139.7', notes: 'FOX shocks, TRD forged wheels' },
        ],
      },
      {
        model: '4Runner',
        submodels: [
          { submodel: 'SR5', tireSizes: ['265/70R17'], wheelSizes: ['17x7'], boltPattern: '6x139.7' },
          { submodel: 'TRD Off-Road / Limited', tireSizes: ['265/55R20', '265/70R17'], wheelSizes: ['20x7.5', '17x7'], boltPattern: '6x139.7' },
          { submodel: 'TRD Pro', tireSizes: ['285/70R17'], wheelSizes: ['17x7.5'], boltPattern: '6x139.7', notes: 'FOX shocks, TRD lift' },
        ],
      },
      {
        model: 'Camry',
        submodels: [
          { submodel: 'LE / SE', tireSizes: ['215/55R17', '235/45R18'], wheelSizes: ['17x7', '18x8'], boltPattern: '5x114.3' },
          { submodel: 'XSE / XLE', tireSizes: ['235/45R18'], wheelSizes: ['18x8'], boltPattern: '5x114.3' },
        ],
      },
      {
        model: 'RAV4',
        submodels: [
          { submodel: 'LE / XLE', tireSizes: ['225/65R17', '225/60R18'], wheelSizes: ['17x7', '18x7'], boltPattern: '5x114.3' },
          { submodel: 'TRD Off-Road / Adventure', tireSizes: ['225/60R18'], wheelSizes: ['18x7'], boltPattern: '5x114.3' },
        ],
      },
    ],
  },
];

// ══════════════════════════════════════════
// 2022 — Same generation for most, some pre-refresh
// ══════════════════════════════════════════

const makes2022: VehicleMake[] = [
  {
    make: 'Chevrolet',
    models: [
      {
        model: 'Silverado 1500',
        submodels: [
          { submodel: 'WT / Custom', tireSizes: ['255/70R17', '265/65R18'], wheelSizes: ['17x8', '18x8.5'], boltPattern: '6x139.7' },
          { submodel: 'LT / RST', tireSizes: ['265/65R18', '275/60R20'], wheelSizes: ['18x8.5', '20x9'], boltPattern: '6x139.7' },
          { submodel: 'LTZ / High Country', tireSizes: ['275/60R20', '275/50R22'], wheelSizes: ['20x9', '22x9'], boltPattern: '6x139.7' },
          { submodel: 'Trail Boss', tireSizes: ['275/65R18'], wheelSizes: ['18x8.5'], boltPattern: '6x139.7' },
          { submodel: 'ZR2', tireSizes: ['275/65R18'], wheelSizes: ['18x8.5'], boltPattern: '6x139.7', notes: 'Multimatic DSSV dampers' },
        ],
      },
      {
        model: 'Tahoe',
        submodels: [
          { submodel: 'LS / LT', tireSizes: ['265/70R17', '275/65R18'], wheelSizes: ['17x8', '18x8.5'], boltPattern: '6x139.7' },
          { submodel: 'RST / Z71 / Premier', tireSizes: ['275/60R20', '285/45R22'], wheelSizes: ['20x9', '22x9'], boltPattern: '6x139.7' },
        ],
      },
      {
        model: 'Camaro',
        submodels: [
          { submodel: 'LT / 1LT', tireSizes: ['245/50R18'], wheelSizes: ['18x8.5'], boltPattern: '5x120' },
          { submodel: 'SS', tireSizes: ['245/40R20 (F)', '275/35R20 (R)'], wheelSizes: ['20x8.5 (F)', '20x9.5 (R)'], boltPattern: '5x120', notes: 'Staggered' },
          { submodel: 'ZL1', tireSizes: ['285/30R20 (F)', '305/30R20 (R)'], wheelSizes: ['20x10 (F)', '20x11 (R)'], boltPattern: '5x120', notes: 'Staggered' },
        ],
      },
    ],
  },
  {
    make: 'Dodge',
    models: [
      {
        model: 'RAM 1500',
        submodels: [
          { submodel: 'Tradesman / Big Horn', tireSizes: ['265/70R17', '275/65R18'], wheelSizes: ['17x7', '18x8'], boltPattern: '6x139.7' },
          { submodel: 'Laramie / Limited', tireSizes: ['275/55R20', '285/45R22'], wheelSizes: ['20x9', '22x9'], boltPattern: '6x139.7' },
          { submodel: 'Rebel', tireSizes: ['275/65R18'], wheelSizes: ['18x8'], boltPattern: '6x139.7' },
          { submodel: 'TRX', tireSizes: ['325/65R18'], wheelSizes: ['18x8'], boltPattern: '6x139.7', notes: '702hp supercharged' },
        ],
      },
      {
        model: 'Charger',
        submodels: [
          { submodel: 'SXT / GT', tireSizes: ['235/55R18', '245/45R20'], wheelSizes: ['18x7.5', '20x8'], boltPattern: '5x115' },
          { submodel: 'R/T / Scat Pack', tireSizes: ['245/45R20', '275/40R20'], wheelSizes: ['20x8', '20x9'], boltPattern: '5x115' },
          { submodel: 'Hellcat', tireSizes: ['275/40R20'], wheelSizes: ['20x9.5'], boltPattern: '5x115', notes: '717hp supercharged' },
        ],
      },
    ],
  },
  {
    make: 'Ford',
    models: [
      {
        model: 'F-150',
        submodels: [
          { submodel: 'XL / XLT', tireSizes: ['245/70R17', '265/70R17', '275/65R18'], wheelSizes: ['17x7.5', '17x7.5', '18x8.5'], boltPattern: '6x135' },
          { submodel: 'Lariat / King Ranch', tireSizes: ['275/65R18', '275/55R20'], wheelSizes: ['18x8.5', '20x8.5'], boltPattern: '6x135' },
          { submodel: 'Platinum / Limited', tireSizes: ['275/55R20', '275/45R22'], wheelSizes: ['20x8.5', '22x9'], boltPattern: '6x135' },
          { submodel: 'Tremor', tireSizes: ['285/65R18'], wheelSizes: ['18x8.5'], boltPattern: '6x135' },
          { submodel: 'Raptor', tireSizes: ['315/70R17', '37x12.5R17'], wheelSizes: ['17x8.5'], boltPattern: '6x135', notes: 'FOX shocks, widebody' },
        ],
      },
      {
        model: 'Bronco',
        submodels: [
          { submodel: 'Base / Big Bend / Outer Banks', tireSizes: ['255/70R16', '265/70R17'], wheelSizes: ['16x7', '17x7.5'], boltPattern: '6x139.7' },
          { submodel: 'Badlands / Wildtrak', tireSizes: ['285/70R17', '315/70R17'], wheelSizes: ['17x8', '17x8.5'], boltPattern: '6x139.7' },
          { submodel: 'Raptor', tireSizes: ['37x12.5R17'], wheelSizes: ['17x8.5'], boltPattern: '6x139.7', notes: 'FOX Live Valve shocks' },
        ],
      },
      {
        model: 'Mustang',
        submodels: [
          { submodel: 'EcoBoost', tireSizes: ['225/55R17', '235/50R18'], wheelSizes: ['17x7.5', '18x8'], boltPattern: '5x114.3' },
          { submodel: 'GT', tireSizes: ['245/45R18', '255/40R19'], wheelSizes: ['18x8', '19x9'], boltPattern: '5x114.3' },
          { submodel: 'Mach 1', tireSizes: ['255/40R19 (F)', '285/35R19 (R)'], wheelSizes: ['19x9.5 (F)', '19x10 (R)'], boltPattern: '5x114.3', notes: 'Staggered' },
          { submodel: 'Shelby GT500', tireSizes: ['295/35R20 (F)', '315/35R20 (R)'], wheelSizes: ['20x10 (F)', '20x11 (R)'], boltPattern: '5x114.3', notes: '760hp supercharged' },
        ],
      },
    ],
  },
  {
    make: 'GMC',
    models: [
      {
        model: 'Sierra 1500',
        submodels: [
          { submodel: 'Pro / SLE / Elevation', tireSizes: ['255/70R17', '265/65R18', '275/60R20'], wheelSizes: ['17x8', '18x8.5', '20x9'], boltPattern: '6x139.7' },
          { submodel: 'SLT / Denali', tireSizes: ['275/60R20', '275/50R22'], wheelSizes: ['20x9', '22x9'], boltPattern: '6x139.7' },
          { submodel: 'AT4 / AT4X', tireSizes: ['275/65R18', '275/60R20'], wheelSizes: ['18x8.5', '20x9'], boltPattern: '6x139.7' },
        ],
      },
    ],
  },
  {
    make: 'Honda',
    models: [
      {
        model: 'Civic',
        submodels: [
          { submodel: 'LX / Sport', tireSizes: ['215/55R16', '235/40R18'], wheelSizes: ['16x7', '18x8'], boltPattern: '5x114.3' },
          { submodel: 'Si', tireSizes: ['235/40R18'], wheelSizes: ['18x8'], boltPattern: '5x114.3' },
          { submodel: 'Type R', tireSizes: ['265/30R19'], wheelSizes: ['19x9.5'], boltPattern: '5x120', notes: 'Unique bolt pattern' },
        ],
      },
      {
        model: 'Accord',
        submodels: [
          { submodel: 'LX / EX', tireSizes: ['225/55R17', '235/45R18'], wheelSizes: ['17x7.5', '18x8'], boltPattern: '5x114.3' },
          { submodel: 'Sport / Touring', tireSizes: ['235/45R18', '235/40R19'], wheelSizes: ['18x8', '19x8.5'], boltPattern: '5x114.3' },
        ],
      },
      {
        model: 'CR-V',
        submodels: [
          { submodel: 'LX / EX / EX-L', tireSizes: ['225/65R17', '235/60R18'], wheelSizes: ['17x7', '18x7.5'], boltPattern: '5x114.3' },
        ],
      },
    ],
  },
  {
    make: 'Hyundai',
    models: [
      {
        model: 'Tucson',
        submodels: [
          { submodel: 'SE / SEL / Limited', tireSizes: ['235/65R17', '235/55R19'], wheelSizes: ['17x7', '19x7.5'], boltPattern: '5x114.3' },
        ],
      },
      {
        model: 'Santa Fe',
        submodels: [
          { submodel: 'SE / SEL / Limited', tireSizes: ['235/65R17', '235/55R19'], wheelSizes: ['17x7', '19x7.5'], boltPattern: '5x114.3' },
        ],
      },
    ],
  },
  {
    make: 'Jeep',
    models: [
      {
        model: 'Wrangler',
        submodels: [
          { submodel: 'Sport / Sport S', tireSizes: ['245/75R17', '255/70R18'], wheelSizes: ['17x7.5', '18x7.5'], boltPattern: '5x127' },
          { submodel: 'Sahara', tireSizes: ['255/70R18'], wheelSizes: ['18x7.5'], boltPattern: '5x127' },
          { submodel: 'Rubicon', tireSizes: ['285/70R17', '315/70R17'], wheelSizes: ['17x7.5', '17x8'], boltPattern: '5x127', notes: 'Lockers, sway bar disconnect' },
          { submodel: 'Rubicon 392', tireSizes: ['285/70R17'], wheelSizes: ['17x7.5'], boltPattern: '5x127', notes: '470hp 6.4L V8' },
        ],
      },
      {
        model: 'Grand Cherokee',
        submodels: [
          { submodel: 'Laredo / Limited', tireSizes: ['245/65R18', '265/60R18'], wheelSizes: ['18x8', '18x8'], boltPattern: '5x127' },
          { submodel: 'Overland / Summit', tireSizes: ['265/50R20', '275/45R21'], wheelSizes: ['20x8.5', '21x8.5'], boltPattern: '5x127' },
          { submodel: 'Trailhawk', tireSizes: ['265/60R18'], wheelSizes: ['18x8'], boltPattern: '5x127' },
        ],
      },
      {
        model: 'Gladiator',
        submodels: [
          { submodel: 'Sport / Willys', tireSizes: ['245/75R17', '255/70R18'], wheelSizes: ['17x7.5', '18x7.5'], boltPattern: '5x127' },
          { submodel: 'Rubicon', tireSizes: ['285/70R17'], wheelSizes: ['17x7.5'], boltPattern: '5x127' },
        ],
      },
    ],
  },
  {
    make: 'Kia',
    models: [
      {
        model: 'Telluride',
        submodels: [
          { submodel: 'LX / S / EX', tireSizes: ['245/65R18', '255/55R20'], wheelSizes: ['18x7.5', '20x8'], boltPattern: '5x114.3' },
        ],
      },
    ],
  },
  {
    make: 'Nissan',
    models: [
      {
        model: 'Titan',
        submodels: [
          { submodel: 'S / SV', tireSizes: ['265/70R18'], wheelSizes: ['18x8'], boltPattern: '6x139.7' },
          { submodel: 'PRO-4X', tireSizes: ['275/65R18'], wheelSizes: ['18x8'], boltPattern: '6x139.7' },
        ],
      },
      {
        model: 'Frontier',
        submodels: [
          { submodel: 'S / SV', tireSizes: ['255/65R17', '265/60R18'], wheelSizes: ['17x7.5', '18x7.5'], boltPattern: '6x114.3' },
          { submodel: 'PRO-4X', tireSizes: ['265/60R18'], wheelSizes: ['18x7.5'], boltPattern: '6x114.3' },
        ],
      },
    ],
  },
  {
    make: 'Tesla',
    models: [
      {
        model: 'Model 3',
        submodels: [
          { submodel: 'Standard / Long Range', tireSizes: ['235/45R18', '235/40R19'], wheelSizes: ['18x8.5', '19x8.5'], boltPattern: '5x114.3' },
          { submodel: 'Performance', tireSizes: ['235/35R20 (F)', '265/35R20 (R)'], wheelSizes: ['20x8.5 (F)', '20x9.5 (R)'], boltPattern: '5x114.3', notes: 'Staggered' },
        ],
      },
      {
        model: 'Model Y',
        submodels: [
          { submodel: 'Standard / Long Range', tireSizes: ['255/45R19', '255/40R20'], wheelSizes: ['19x9.5', '20x9.5'], boltPattern: '5x114.3' },
          { submodel: 'Performance', tireSizes: ['255/35R21 (F)', '275/35R21 (R)'], wheelSizes: ['21x9.5 (F)', '21x10.5 (R)'], boltPattern: '5x114.3', notes: 'Staggered' },
        ],
      },
    ],
  },
  {
    make: 'Toyota',
    models: [
      {
        model: 'Tacoma',
        submodels: [
          { submodel: 'SR / SR5', tireSizes: ['225/75R16', '245/70R17', '265/65R18'], wheelSizes: ['16x7', '17x7.5', '18x7.5'], boltPattern: '6x139.7' },
          { submodel: 'TRD Sport', tireSizes: ['245/70R17'], wheelSizes: ['17x7.5'], boltPattern: '6x139.7' },
          { submodel: 'TRD Off-Road', tireSizes: ['265/70R16', '265/65R17'], wheelSizes: ['16x7', '17x7.5'], boltPattern: '6x139.7' },
          { submodel: 'TRD Pro', tireSizes: ['265/70R16'], wheelSizes: ['16x7'], boltPattern: '6x139.7', notes: 'FOX shocks, TRD lift' },
        ],
      },
      {
        model: 'Tundra',
        submodels: [
          { submodel: 'SR / SR5', tireSizes: ['265/70R18'], wheelSizes: ['18x8'], boltPattern: '6x139.7' },
          { submodel: 'Limited / Platinum', tireSizes: ['275/55R20'], wheelSizes: ['20x8'], boltPattern: '6x139.7' },
          { submodel: 'TRD Pro', tireSizes: ['285/65R18'], wheelSizes: ['18x8'], boltPattern: '6x139.7', notes: 'FOX shocks' },
        ],
      },
      {
        model: '4Runner',
        submodels: [
          { submodel: 'SR5', tireSizes: ['265/70R17'], wheelSizes: ['17x7'], boltPattern: '6x139.7' },
          { submodel: 'TRD Off-Road / Limited', tireSizes: ['265/55R20', '265/70R17'], wheelSizes: ['20x7.5', '17x7'], boltPattern: '6x139.7' },
          { submodel: 'TRD Pro', tireSizes: ['285/70R17'], wheelSizes: ['17x7.5'], boltPattern: '6x139.7', notes: 'FOX shocks, TRD lift' },
        ],
      },
      {
        model: 'Camry',
        submodels: [
          { submodel: 'LE / SE', tireSizes: ['215/55R17', '235/45R18'], wheelSizes: ['17x7', '18x8'], boltPattern: '5x114.3' },
          { submodel: 'XSE / XLE', tireSizes: ['235/45R18'], wheelSizes: ['18x8'], boltPattern: '5x114.3' },
        ],
      },
      {
        model: 'RAV4',
        submodels: [
          { submodel: 'LE / XLE', tireSizes: ['225/65R17', '225/60R18'], wheelSizes: ['17x7', '18x7'], boltPattern: '5x114.3' },
          { submodel: 'TRD Off-Road / Adventure', tireSizes: ['225/60R18'], wheelSizes: ['18x7'], boltPattern: '5x114.3' },
        ],
      },
    ],
  },
];

// ══════════════════════════════════════════
// 2021 — Popular vehicles (previous gen for some)
// ══════════════════════════════════════════

const makes2021: VehicleMake[] = [
  {
    make: 'Chevrolet',
    models: [
      {
        model: 'Silverado 1500',
        submodels: [
          { submodel: 'WT / Custom', tireSizes: ['255/70R17', '265/65R18'], wheelSizes: ['17x8', '18x8.5'], boltPattern: '6x139.7' },
          { submodel: 'LT / RST', tireSizes: ['265/65R18', '275/60R20'], wheelSizes: ['18x8.5', '20x9'], boltPattern: '6x139.7' },
          { submodel: 'LTZ / High Country', tireSizes: ['275/60R20'], wheelSizes: ['20x9'], boltPattern: '6x139.7' },
          { submodel: 'Trail Boss', tireSizes: ['275/65R18'], wheelSizes: ['18x8.5'], boltPattern: '6x139.7' },
        ],
      },
    ],
  },
  {
    make: 'Dodge',
    models: [
      {
        model: 'RAM 1500',
        submodels: [
          { submodel: 'Tradesman / Big Horn', tireSizes: ['265/70R17', '275/65R18'], wheelSizes: ['17x7', '18x8'], boltPattern: '6x139.7' },
          { submodel: 'Laramie / Limited', tireSizes: ['275/55R20', '285/45R22'], wheelSizes: ['20x9', '22x9'], boltPattern: '6x139.7' },
          { submodel: 'Rebel', tireSizes: ['275/65R18'], wheelSizes: ['18x8'], boltPattern: '6x139.7' },
          { submodel: 'TRX', tireSizes: ['325/65R18'], wheelSizes: ['18x8'], boltPattern: '6x139.7', notes: '702hp supercharged' },
        ],
      },
    ],
  },
  {
    make: 'Ford',
    models: [
      {
        model: 'F-150',
        submodels: [
          { submodel: 'XL / XLT', tireSizes: ['245/70R17', '265/70R17', '275/65R18'], wheelSizes: ['17x7.5', '17x7.5', '18x8.5'], boltPattern: '6x135' },
          { submodel: 'Lariat / King Ranch', tireSizes: ['275/65R18', '275/55R20'], wheelSizes: ['18x8.5', '20x8.5'], boltPattern: '6x135' },
          { submodel: 'Platinum / Limited', tireSizes: ['275/55R20'], wheelSizes: ['20x8.5'], boltPattern: '6x135' },
          { submodel: 'Raptor', tireSizes: ['315/70R17', '37x12.5R17'], wheelSizes: ['17x8.5'], boltPattern: '6x135', notes: 'FOX shocks, widebody' },
        ],
      },
    ],
  },
  {
    make: 'Honda',
    models: [
      {
        model: 'Civic',
        submodels: [
          { submodel: 'LX / Sport', tireSizes: ['215/55R16', '235/40R18'], wheelSizes: ['16x7', '18x8'], boltPattern: '5x114.3' },
          { submodel: 'Si', tireSizes: ['235/40R18'], wheelSizes: ['18x8'], boltPattern: '5x114.3' },
          { submodel: 'Type R', tireSizes: ['265/30R19'], wheelSizes: ['19x9.5'], boltPattern: '5x120', notes: 'FK8 generation' },
        ],
      },
    ],
  },
  {
    make: 'Jeep',
    models: [
      {
        model: 'Wrangler',
        submodels: [
          { submodel: 'Sport / Sport S', tireSizes: ['245/75R17', '255/70R18'], wheelSizes: ['17x7.5', '18x7.5'], boltPattern: '5x127' },
          { submodel: 'Sahara', tireSizes: ['255/70R18'], wheelSizes: ['18x7.5'], boltPattern: '5x127' },
          { submodel: 'Rubicon', tireSizes: ['285/70R17'], wheelSizes: ['17x7.5'], boltPattern: '5x127', notes: 'Lockers, sway bar disconnect' },
          { submodel: 'Rubicon 392', tireSizes: ['285/70R17'], wheelSizes: ['17x7.5'], boltPattern: '5x127', notes: '470hp 6.4L V8' },
        ],
      },
      {
        model: 'Grand Cherokee',
        submodels: [
          { submodel: 'Laredo / Limited', tireSizes: ['245/65R18', '265/60R18'], wheelSizes: ['18x8', '18x8'], boltPattern: '5x127' },
          { submodel: 'Overland / Summit', tireSizes: ['265/50R20'], wheelSizes: ['20x8.5'], boltPattern: '5x127' },
          { submodel: 'Trailhawk', tireSizes: ['265/60R18'], wheelSizes: ['18x8'], boltPattern: '5x127' },
        ],
      },
    ],
  },
  {
    make: 'Tesla',
    models: [
      {
        model: 'Model 3',
        submodels: [
          { submodel: 'Standard / Long Range', tireSizes: ['235/45R18', '235/40R19'], wheelSizes: ['18x8.5', '19x8.5'], boltPattern: '5x114.3' },
          { submodel: 'Performance', tireSizes: ['235/35R20 (F)', '265/35R20 (R)'], wheelSizes: ['20x8.5 (F)', '20x9.5 (R)'], boltPattern: '5x114.3', notes: 'Staggered' },
        ],
      },
      {
        model: 'Model Y',
        submodels: [
          { submodel: 'Long Range', tireSizes: ['255/45R19', '255/40R20'], wheelSizes: ['19x9.5', '20x9.5'], boltPattern: '5x114.3' },
          { submodel: 'Performance', tireSizes: ['255/35R21 (F)', '275/35R21 (R)'], wheelSizes: ['21x9.5 (F)', '21x10.5 (R)'], boltPattern: '5x114.3', notes: 'Staggered' },
        ],
      },
    ],
  },
  {
    make: 'Toyota',
    models: [
      {
        model: 'Tacoma',
        submodels: [
          { submodel: 'SR / SR5', tireSizes: ['225/75R16', '245/70R17'], wheelSizes: ['16x7', '17x7.5'], boltPattern: '6x139.7' },
          { submodel: 'TRD Sport', tireSizes: ['245/70R17'], wheelSizes: ['17x7.5'], boltPattern: '6x139.7' },
          { submodel: 'TRD Off-Road', tireSizes: ['265/70R16'], wheelSizes: ['16x7'], boltPattern: '6x139.7' },
          { submodel: 'TRD Pro', tireSizes: ['265/70R16'], wheelSizes: ['16x7'], boltPattern: '6x139.7', notes: 'FOX shocks, TRD lift' },
        ],
      },
      {
        model: 'Tundra',
        submodels: [
          { submodel: 'SR / SR5', tireSizes: ['255/70R18'], wheelSizes: ['18x8'], boltPattern: '5x150' },
          { submodel: 'Limited / Platinum', tireSizes: ['275/55R20'], wheelSizes: ['20x8'], boltPattern: '5x150' },
          { submodel: 'TRD Pro', tireSizes: ['275/65R18'], wheelSizes: ['18x8'], boltPattern: '5x150', notes: 'FOX shocks, TRD skid plate' },
        ],
      },
      {
        model: '4Runner',
        submodels: [
          { submodel: 'SR5', tireSizes: ['265/70R17'], wheelSizes: ['17x7'], boltPattern: '6x139.7' },
          { submodel: 'TRD Off-Road / Limited', tireSizes: ['265/70R17'], wheelSizes: ['17x7'], boltPattern: '6x139.7' },
          { submodel: 'TRD Pro', tireSizes: ['285/70R17'], wheelSizes: ['17x7.5'], boltPattern: '6x139.7', notes: 'FOX shocks, TRD lift' },
        ],
      },
      {
        model: 'Camry',
        submodels: [
          { submodel: 'LE / SE', tireSizes: ['215/55R17', '235/45R18'], wheelSizes: ['17x7', '18x8'], boltPattern: '5x114.3' },
          { submodel: 'XSE / XLE', tireSizes: ['235/45R18'], wheelSizes: ['18x8'], boltPattern: '5x114.3' },
        ],
      },
    ],
  },
];

// ══════════════════════════════════════════
// 2020 — Popular vehicles
// ══════════════════════════════════════════

const makes2020: VehicleMake[] = [
  {
    make: 'Chevrolet',
    models: [
      {
        model: 'Silverado 1500',
        submodels: [
          { submodel: 'WT / Custom', tireSizes: ['255/70R17', '265/65R18'], wheelSizes: ['17x8', '18x8.5'], boltPattern: '6x139.7' },
          { submodel: 'LT / RST', tireSizes: ['265/65R18', '275/60R20'], wheelSizes: ['18x8.5', '20x9'], boltPattern: '6x139.7' },
          { submodel: 'LTZ / High Country', tireSizes: ['275/60R20'], wheelSizes: ['20x9'], boltPattern: '6x139.7' },
          { submodel: 'Trail Boss', tireSizes: ['275/65R18'], wheelSizes: ['18x8.5'], boltPattern: '6x139.7' },
        ],
      },
    ],
  },
  {
    make: 'Dodge',
    models: [
      {
        model: 'RAM 1500',
        submodels: [
          { submodel: 'Tradesman / Big Horn', tireSizes: ['265/70R17', '275/65R18'], wheelSizes: ['17x7', '18x8'], boltPattern: '6x139.7' },
          { submodel: 'Laramie / Limited', tireSizes: ['275/55R20', '285/45R22'], wheelSizes: ['20x9', '22x9'], boltPattern: '6x139.7' },
          { submodel: 'Rebel', tireSizes: ['275/65R18'], wheelSizes: ['18x8'], boltPattern: '6x139.7' },
        ],
      },
    ],
  },
  {
    make: 'Ford',
    models: [
      {
        model: 'F-150',
        submodels: [
          { submodel: 'XL / XLT', tireSizes: ['245/70R17', '265/70R17', '275/65R18'], wheelSizes: ['17x7.5', '17x7.5', '18x8.5'], boltPattern: '6x135' },
          { submodel: 'Lariat / King Ranch', tireSizes: ['275/65R18', '275/55R20'], wheelSizes: ['18x8.5', '20x8.5'], boltPattern: '6x135' },
          { submodel: 'Platinum / Limited', tireSizes: ['275/55R20'], wheelSizes: ['20x8.5'], boltPattern: '6x135' },
          { submodel: 'Raptor', tireSizes: ['315/70R17'], wheelSizes: ['17x8.5'], boltPattern: '6x135', notes: 'FOX shocks, widebody' },
        ],
      },
    ],
  },
  {
    make: 'Honda',
    models: [
      {
        model: 'Civic',
        submodels: [
          { submodel: 'LX / Sport', tireSizes: ['215/55R16', '235/40R18'], wheelSizes: ['16x7', '18x8'], boltPattern: '5x114.3' },
          { submodel: 'Si', tireSizes: ['235/40R18'], wheelSizes: ['18x8'], boltPattern: '5x114.3' },
          { submodel: 'Type R', tireSizes: ['245/30R20'], wheelSizes: ['20x8.5'], boltPattern: '5x120', notes: 'FK8 generation' },
        ],
      },
    ],
  },
  {
    make: 'Jeep',
    models: [
      {
        model: 'Wrangler',
        submodels: [
          { submodel: 'Sport / Sport S', tireSizes: ['245/75R17', '255/70R18'], wheelSizes: ['17x7.5', '18x7.5'], boltPattern: '5x127' },
          { submodel: 'Sahara', tireSizes: ['255/70R18'], wheelSizes: ['18x7.5'], boltPattern: '5x127' },
          { submodel: 'Rubicon', tireSizes: ['285/70R17'], wheelSizes: ['17x7.5'], boltPattern: '5x127', notes: 'Lockers, sway bar disconnect' },
        ],
      },
      {
        model: 'Gladiator',
        submodels: [
          { submodel: 'Sport / Overland', tireSizes: ['245/75R17', '255/70R18'], wheelSizes: ['17x7.5', '18x7.5'], boltPattern: '5x127' },
          { submodel: 'Rubicon', tireSizes: ['285/70R17'], wheelSizes: ['17x7.5'], boltPattern: '5x127' },
        ],
      },
    ],
  },
  {
    make: 'Toyota',
    models: [
      {
        model: 'Tacoma',
        submodels: [
          { submodel: 'SR / SR5', tireSizes: ['225/75R16', '245/70R17'], wheelSizes: ['16x7', '17x7.5'], boltPattern: '6x139.7' },
          { submodel: 'TRD Sport', tireSizes: ['245/70R17'], wheelSizes: ['17x7.5'], boltPattern: '6x139.7' },
          { submodel: 'TRD Off-Road', tireSizes: ['265/70R16'], wheelSizes: ['16x7'], boltPattern: '6x139.7' },
          { submodel: 'TRD Pro', tireSizes: ['265/70R16'], wheelSizes: ['16x7'], boltPattern: '6x139.7', notes: 'FOX shocks, TRD lift' },
        ],
      },
      {
        model: 'Tundra',
        submodels: [
          { submodel: 'SR / SR5', tireSizes: ['255/70R18'], wheelSizes: ['18x8'], boltPattern: '5x150' },
          { submodel: 'Limited / Platinum', tireSizes: ['275/55R20'], wheelSizes: ['20x8'], boltPattern: '5x150' },
          { submodel: 'TRD Pro', tireSizes: ['275/65R18'], wheelSizes: ['18x8'], boltPattern: '5x150', notes: 'FOX shocks' },
        ],
      },
      {
        model: 'Camry',
        submodels: [
          { submodel: 'LE / SE', tireSizes: ['215/55R17', '235/45R18'], wheelSizes: ['17x7', '18x8'], boltPattern: '5x114.3' },
          { submodel: 'XSE / XLE', tireSizes: ['235/45R18'], wheelSizes: ['18x8'], boltPattern: '5x114.3' },
        ],
      },
    ],
  },
];

// ══════════════════════════════════════════
// 2019 — Popular vehicles
// ══════════════════════════════════════════

const makes2019: VehicleMake[] = [
  {
    make: 'Chevrolet',
    models: [
      {
        model: 'Silverado 1500',
        submodels: [
          { submodel: 'WT / Custom', tireSizes: ['255/70R17', '265/65R18'], wheelSizes: ['17x8', '18x8.5'], boltPattern: '6x139.7' },
          { submodel: 'LT / RST', tireSizes: ['265/65R18', '275/60R20'], wheelSizes: ['18x8.5', '20x9'], boltPattern: '6x139.7' },
          { submodel: 'LTZ / High Country', tireSizes: ['275/60R20'], wheelSizes: ['20x9'], boltPattern: '6x139.7' },
          { submodel: 'Trail Boss', tireSizes: ['275/65R18'], wheelSizes: ['18x8.5'], boltPattern: '6x139.7' },
        ],
      },
    ],
  },
  {
    make: 'Dodge',
    models: [
      {
        model: 'RAM 1500',
        submodels: [
          { submodel: 'Tradesman / Big Horn', tireSizes: ['265/70R17', '275/65R18'], wheelSizes: ['17x7', '18x8'], boltPattern: '6x139.7' },
          { submodel: 'Laramie / Limited', tireSizes: ['275/55R20', '285/45R22'], wheelSizes: ['20x9', '22x9'], boltPattern: '6x139.7' },
          { submodel: 'Rebel', tireSizes: ['275/65R18'], wheelSizes: ['18x8'], boltPattern: '6x139.7' },
        ],
      },
    ],
  },
  {
    make: 'Ford',
    models: [
      {
        model: 'F-150',
        submodels: [
          { submodel: 'XL / XLT', tireSizes: ['245/70R17', '265/70R17', '275/65R18'], wheelSizes: ['17x7.5', '17x7.5', '18x8.5'], boltPattern: '6x135' },
          { submodel: 'Lariat / King Ranch', tireSizes: ['275/65R18', '275/55R20'], wheelSizes: ['18x8.5', '20x8.5'], boltPattern: '6x135' },
          { submodel: 'Platinum / Limited', tireSizes: ['275/55R20'], wheelSizes: ['20x8.5'], boltPattern: '6x135' },
          { submodel: 'Raptor', tireSizes: ['315/70R17'], wheelSizes: ['17x8.5'], boltPattern: '6x135', notes: 'FOX shocks, widebody' },
        ],
      },
    ],
  },
  {
    make: 'Honda',
    models: [
      {
        model: 'Civic',
        submodels: [
          { submodel: 'LX / Sport', tireSizes: ['215/55R16', '235/40R18'], wheelSizes: ['16x7', '18x8'], boltPattern: '5x114.3' },
          { submodel: 'Si', tireSizes: ['235/40R18'], wheelSizes: ['18x8'], boltPattern: '5x114.3' },
          { submodel: 'Type R', tireSizes: ['245/30R20'], wheelSizes: ['20x8.5'], boltPattern: '5x120', notes: 'FK8 generation' },
        ],
      },
    ],
  },
  {
    make: 'Jeep',
    models: [
      {
        model: 'Wrangler',
        submodels: [
          { submodel: 'Sport / Sport S', tireSizes: ['245/75R17', '255/70R18'], wheelSizes: ['17x7.5', '18x7.5'], boltPattern: '5x127' },
          { submodel: 'Sahara', tireSizes: ['255/70R18'], wheelSizes: ['18x7.5'], boltPattern: '5x127' },
          { submodel: 'Rubicon', tireSizes: ['285/70R17'], wheelSizes: ['17x7.5'], boltPattern: '5x127' },
        ],
      },
    ],
  },
  {
    make: 'Toyota',
    models: [
      {
        model: 'Tacoma',
        submodels: [
          { submodel: 'SR / SR5', tireSizes: ['225/75R16', '245/70R17'], wheelSizes: ['16x7', '17x7.5'], boltPattern: '6x139.7' },
          { submodel: 'TRD Sport', tireSizes: ['245/70R17'], wheelSizes: ['17x7.5'], boltPattern: '6x139.7' },
          { submodel: 'TRD Off-Road', tireSizes: ['265/70R16'], wheelSizes: ['16x7'], boltPattern: '6x139.7' },
          { submodel: 'TRD Pro', tireSizes: ['265/70R16'], wheelSizes: ['16x7'], boltPattern: '6x139.7', notes: 'FOX shocks' },
        ],
      },
      {
        model: 'Camry',
        submodels: [
          { submodel: 'LE / SE', tireSizes: ['215/55R17', '235/45R18'], wheelSizes: ['17x7', '18x8'], boltPattern: '5x114.3' },
          { submodel: 'XSE / XLE', tireSizes: ['235/45R18'], wheelSizes: ['18x8'], boltPattern: '5x114.3' },
        ],
      },
    ],
  },
];

// ══════════════════════════════════════════
// 2018 — Popular vehicles
// ══════════════════════════════════════════

const makes2018: VehicleMake[] = [
  {
    make: 'Chevrolet',
    models: [
      {
        model: 'Silverado 1500',
        submodels: [
          { submodel: 'WT / Custom', tireSizes: ['255/70R17', '265/65R18'], wheelSizes: ['17x8', '18x8.5'], boltPattern: '6x139.7' },
          { submodel: 'LT', tireSizes: ['265/65R18', '275/55R20'], wheelSizes: ['18x8.5', '20x9'], boltPattern: '6x139.7' },
          { submodel: 'LTZ / High Country', tireSizes: ['275/55R20'], wheelSizes: ['20x9'], boltPattern: '6x139.7' },
        ],
      },
    ],
  },
  {
    make: 'Dodge',
    models: [
      {
        model: 'RAM 1500',
        submodels: [
          { submodel: 'Tradesman / SLT', tireSizes: ['265/70R17', '275/65R18'], wheelSizes: ['17x7', '18x8'], boltPattern: '5x139.7' },
          { submodel: 'Laramie / Limited', tireSizes: ['275/55R20'], wheelSizes: ['20x9'], boltPattern: '5x139.7' },
          { submodel: 'Rebel', tireSizes: ['275/60R20'], wheelSizes: ['20x9'], boltPattern: '5x139.7' },
        ],
      },
    ],
  },
  {
    make: 'Ford',
    models: [
      {
        model: 'F-150',
        submodels: [
          { submodel: 'XL / XLT', tireSizes: ['245/70R17', '265/70R17', '275/65R18'], wheelSizes: ['17x7.5', '17x7.5', '18x8.5'], boltPattern: '6x135' },
          { submodel: 'Lariat / King Ranch', tireSizes: ['275/65R18', '275/55R20'], wheelSizes: ['18x8.5', '20x8.5'], boltPattern: '6x135' },
          { submodel: 'Platinum / Limited', tireSizes: ['275/55R20'], wheelSizes: ['20x8.5'], boltPattern: '6x135' },
          { submodel: 'Raptor', tireSizes: ['315/70R17'], wheelSizes: ['17x8.5'], boltPattern: '6x135', notes: 'FOX shocks, widebody' },
        ],
      },
    ],
  },
  {
    make: 'Honda',
    models: [
      {
        model: 'Civic',
        submodels: [
          { submodel: 'LX / EX', tireSizes: ['215/55R16'], wheelSizes: ['16x7'], boltPattern: '5x114.3' },
          { submodel: 'Si', tireSizes: ['235/40R18'], wheelSizes: ['18x8'], boltPattern: '5x114.3' },
          { submodel: 'Type R', tireSizes: ['245/30R20'], wheelSizes: ['20x8.5'], boltPattern: '5x120', notes: 'FK8 generation' },
        ],
      },
    ],
  },
  {
    make: 'Jeep',
    models: [
      {
        model: 'Wrangler',
        submodels: [
          { submodel: 'Sport / Sport S', tireSizes: ['245/75R17', '255/70R18'], wheelSizes: ['17x7.5', '18x7.5'], boltPattern: '5x127' },
          { submodel: 'Sahara', tireSizes: ['255/70R18'], wheelSizes: ['18x7.5'], boltPattern: '5x127' },
          { submodel: 'Rubicon', tireSizes: ['285/70R17'], wheelSizes: ['17x7.5'], boltPattern: '5x127' },
        ],
      },
    ],
  },
  {
    make: 'Toyota',
    models: [
      {
        model: 'Tacoma',
        submodels: [
          { submodel: 'SR / SR5', tireSizes: ['225/75R16', '245/70R17'], wheelSizes: ['16x7', '17x7.5'], boltPattern: '6x139.7' },
          { submodel: 'TRD Sport', tireSizes: ['245/70R17'], wheelSizes: ['17x7.5'], boltPattern: '6x139.7' },
          { submodel: 'TRD Off-Road', tireSizes: ['265/70R16'], wheelSizes: ['16x7'], boltPattern: '6x139.7' },
          { submodel: 'TRD Pro', tireSizes: ['265/70R16'], wheelSizes: ['16x7'], boltPattern: '6x139.7', notes: 'FOX shocks' },
        ],
      },
      {
        model: 'Camry',
        submodels: [
          { submodel: 'LE / SE', tireSizes: ['215/55R17', '235/45R18'], wheelSizes: ['17x7', '18x8'], boltPattern: '5x114.3' },
          { submodel: 'XSE / XLE', tireSizes: ['235/45R18'], wheelSizes: ['18x8'], boltPattern: '5x114.3' },
        ],
      },
    ],
  },
];

// ══════════════════════════════════════════
// ASSEMBLED DATABASE
// ══════════════════════════════════════════

export const vehicleDatabase: VehicleYear[] = [
  { year: 2024, makes: makes2024 },
  { year: 2023, makes: makes2023 },
  { year: 2022, makes: makes2022 },
  { year: 2021, makes: makes2021 },
  { year: 2020, makes: makes2020 },
  { year: 2019, makes: makes2019 },
  { year: 2018, makes: makes2018 },
];

// ══════════════════════════════════════════
// HELPER FUNCTIONS — power the dropdowns
// ══════════════════════════════════════════

/** Get all years (sorted descending — newest first) */
export function getYears(): number[] {
  return vehicleDatabase
    .map((y) => y.year)
    .sort((a, b) => b - a);
}

/** Get makes for a specific year (sorted alphabetically A→Z) */
export function getMakes(year: number): string[] {
  const yearData = vehicleDatabase.find((y) => y.year === year);
  if (!yearData) return [];
  return yearData.makes
    .map((m) => m.make)
    .sort((a, b) => a.localeCompare(b));
}

/** Get models for a specific year + make (sorted alphabetically) */
export function getModels(year: number, make: string): string[] {
  const yearData = vehicleDatabase.find((y) => y.year === year);
  if (!yearData) return [];
  const makeData = yearData.makes.find((m) => m.make === make);
  if (!makeData) return [];
  return makeData.models
    .map((m) => m.model)
    .sort((a, b) => a.localeCompare(b));
}

/** Get submodels for a specific year + make + model (sorted as listed — trim level order) */
export function getSubmodels(year: number, make: string, model: string): string[] {
  const yearData = vehicleDatabase.find((y) => y.year === year);
  if (!yearData) return [];
  const makeData = yearData.makes.find((m) => m.make === make);
  if (!makeData) return [];
  const modelData = makeData.models.find((m) => m.model === model);
  if (!modelData) return [];
  return modelData.submodels.map((s) => s.submodel);
}

/** Get tire specs for a specific vehicle */
export function getTireSpecs(
  year: number,
  make: string,
  model: string,
  submodel: string
): VehicleTireSpec | null {
  const yearData = vehicleDatabase.find((y) => y.year === year);
  if (!yearData) return null;
  const makeData = yearData.makes.find((m) => m.make === make);
  if (!makeData) return null;
  const modelData = makeData.models.find((m) => m.model === model);
  if (!modelData) return null;
  return modelData.submodels.find((s) => s.submodel === submodel) || null;
}
