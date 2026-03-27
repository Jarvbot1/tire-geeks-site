const ACIMA_GUID = process.env.NEXT_PUBLIC_ACIMA_MERCHANT_GUID || 'merc-e5ef0fb3-8f8e-48fa-838d-4cf2cd7b2ec3';
const ACIMA_APPLY_URL = `https://ams.acima.com/discover/new?merchant_guid=${ACIMA_GUID}&utm_source=web-banner&utm_medium=merchant&utm_campaign=mktg-lp`;

export const BRAND = {
  colors: {
    red: '#D42B2B',
    redHover: '#FF1744',
    redDeep: '#B71C1C',
    blue: '#1E88C7',
    blueLight: '#29B6F6',
    blueDark: '#0D47A1',

    bgPrimary: '#0A0A0A',
    bgSecondary: '#111111',
    bgCard: '#1A1A1A',
    bgElevated: '#242424',
    bgNav: 'rgba(10,10,10,0.85)',

    textPrimary: '#F2F2F2',
    textSecondary: '#9E9E9E',
    textMuted: '#6B7280',
    textAccent: '#D42B2B',

    border: 'rgba(255,255,255,0.08)',
    borderHover: 'rgba(255,255,255,0.15)',
    borderAccent: 'rgba(212,43,43,0.4)',

    success: '#22C55E',
    warning: '#FBBF24',
    gradient: {
      cta: 'linear-gradient(135deg, #D42B2B 0%, #FF1744 100%)',
      acima: 'linear-gradient(135deg, #1C1C28 0%, #252538 100%)',
      hero: 'linear-gradient(to bottom, rgba(10,10,10,0.75) 0%, rgba(10,10,10,0.3) 40%, rgba(10,10,10,0.85) 100%)',
      heroSide: 'linear-gradient(to right, rgba(10,10,10,0.7) 0%, transparent 60%)',
    },
  },

  name: 'Tire Geeks',
  tagline: 'TIRES • WHEELS • ALIGNMENT • SUSPENSION',
  slogan: "DON'T TRUST A NERD FOR YOUR NEEDS, GO WITH THE GEEKS!",
  website: 'https://tiregeeks.com',

  locations: [
    {
      name: 'Florin Road',
      address: '3020 Florin Road, Sacramento, CA 95822',
      phone: '(916) 800-8786',
      phoneRaw: '+19168008786',
      hours: 'Mon–Sat: 9AM–7PM',
      mapUrl: 'https://maps.google.com/?q=3020+Florin+Road+Sacramento+CA+95822',
      lat: 38.4960,
      lng: -121.4930,
    },
    {
      name: 'Arden Way',
      address: '2245 Arden Way, Sacramento, CA 95825',
      phone: '(916) 913-8786',
      phoneRaw: '+19169138786',
      hours: 'Mon–Sat: 9AM–7PM',
      mapUrl: 'https://maps.google.com/?q=2245+Arden+Way+Sacramento+CA+95825',
      lat: 38.6010,
      lng: -121.4090,
    },
  ],

  social: {
    facebook: 'https://www.facebook.com/p/Tire-Geeks-61573900123725/',
    instagram: 'https://www.instagram.com/tire.geeks',
  },

  acima: {
    merchantGuid: ACIMA_GUID,
    applyUrl: ACIMA_APPLY_URL,
    benefits: [
      'No Credit Needed',
      'No Down Payment',
      'No Interest for 100 Days',
      'Get Approved Up to $5,000',
      'Apply in Seconds',
    ],
  },
};

export const NAV_LINKS = [
  { label: 'HOME', href: '/' },
  { label: 'SERVICES', href: '/services' },
  { label: 'GALLERY', href: '/gallery' },
  { label: 'FINANCING', href: '/financing' },
  { label: 'BLOG', href: '/blog' },
  { label: 'ABOUT', href: '/about' },
  { label: 'LOCATIONS', href: '/locations' },
  { label: 'CONTACT', href: '/contact' },
] as const;

export const VEHICLE_MAKES = [
  'Toyota', 'Ford', 'Chevrolet', 'Ram', 'Honda', 'Nissan', 'GMC', 'Jeep',
  'Dodge', 'Hyundai', 'Kia', 'BMW', 'Mercedes', 'Lexus', 'Subaru',
  'Volkswagen', 'Mazda', 'Tesla',
] as const;
