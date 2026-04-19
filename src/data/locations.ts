export interface Location {
  name: string;
  slug: string;
  state: string;
  county: string;
  lat: number;
  lng: number;
  population: number;
  medianHomeValue: number;
  serviceDescription: string;
  testimonialCity: string;
  contactCTA: string;
}

// Median home values use the free U.S. Census Bureau ACS 2024 5-year profile
// variable DP04_0089E (median value of owner-occupied housing units).
export const LOCATIONS: Location[] = [
  {
    name: "Arlington",
    slug: "arlington",
    state: "TX",
    county: "Tarrant",
    lat: 32.7353,
    lng: -97.1081,
    population: 400000,
    medianHomeValue: 304700,
    serviceDescription: "Arlington homeowners trust Elevated Pool for premium pool remodels that transform backyards into resort-style sanctuaries. We specialize in custom water features, mosaic tile upgrades, and energy-efficient equipment installations.",
    testimonialCity: "Arlington",
    contactCTA: "Get Your Arlington Pool Quote"
  },
  {
    name: "Plano",
    slug: "plano",
    state: "TX",
    county: "Collin",
    lat: 33.0198,
    lng: -96.6989,
    population: 285000,
    medianHomeValue: 465900,
    serviceDescription: "Plano's luxury neighborhoods deserve exceptional pools. We deliver custom remodeling projects with architect-grade finishes, Pentair automation systems, and premium Noble Tile collections.",
    testimonialCity: "Plano",
    contactCTA: "Schedule Your Plano Pool Design Consultation"
  },
  {
    name: "Frisco",
    slug: "frisco",
    state: "TX",
    county: "Collin",
    lat: 33.1637,
    lng: -96.8236,
    population: 150000,
    medianHomeValue: 642100,
    serviceDescription: "Frisco's high-end estates require expert pool remodeling. Our team specializes in large-scale renovations, custom coping profiles, and luxury water features that elevate your outdoor living space.",
    testimonialCity: "Frisco",
    contactCTA: "Request Your Frisco Estate Pool Consultation"
  },
  {
    name: "McKinney",
    slug: "mckinney",
    state: "TX",
    county: "Collin",
    lat: 33.1972,
    lng: -96.6397,
    population: 191000,
    medianHomeValue: 471800,
    serviceDescription: "McKinney homeowners love pools that match their community's high standards. We provide full-service remodeling with pebble finishes, designer tile, and energy-efficient systems built for North Texas heat.",
    testimonialCity: "McKinney",
    contactCTA: "Get Your McKinney Pool Remodel Quote"
  },
  {
    name: "Garland",
    slug: "garland",
    state: "TX",
    county: "Dallas",
    lat: 32.9128,
    lng: -96.6394,
    population: 240000,
    medianHomeValue: 270800,
    serviceDescription: "Garland families deserve quality pool remodels that stand up to Texas weather. We offer affordable luxury with premium finishes, trusted equipment, and professional installation.",
    testimonialCity: "Garland",
    contactCTA: "Request Your Garland Pool Quote"
  },
  {
    name: "Irving",
    slug: "irving",
    state: "TX",
    county: "Dallas",
    lat: 32.8150,
    lng: -96.9488,
    population: 240000,
    medianHomeValue: 315600,
    serviceDescription: "Irving pool owners trust Elevated Pool for reliable, beautiful remodeling. From modern edge profiles to spa upgrades, we handle every detail of your pool transformation.",
    testimonialCity: "Irving",
    contactCTA: "Schedule Your Irving Pool Consultation"
  },
  {
    name: "Fort Worth",
    slug: "fort-worth",
    state: "TX",
    county: "Tarrant",
    lat: 32.7555,
    lng: -97.3308,
    population: 918000,
    medianHomeValue: 303000,
    serviceDescription: "Fort Worth's diverse neighborhoods all deserve great pools. We specialize in full remodels, equipment upgrades, and water feature installations that fit your budget and style.",
    testimonialCity: "Fort Worth",
    contactCTA: "Get Your Fort Worth Pool Remodel Started"
  },
  {
    name: "Lewisville",
    slug: "lewisville",
    state: "TX",
    county: "Denton",
    lat: 33.0409,
    lng: -96.9850,
    population: 108000,
    medianHomeValue: 378500,
    serviceDescription: "Lewisville homes benefit from Elevated Pool's professional remodeling services. We combine quality craftsmanship with competitive pricing for your complete pool transformation.",
    testimonialCity: "Lewisville",
    contactCTA: "Request Your Lewisville Pool Quote"
  },
  {
    name: "Denton",
    slug: "denton",
    state: "TX",
    county: "Denton",
    lat: 33.2148,
    lng: -97.1331,
    population: 136000,
    medianHomeValue: 348200,
    serviceDescription: "Denton homeowners looking for pool remodeling can trust our locally-focused team to deliver quality results. From simple updates to complete renovations, we've got you covered.",
    testimonialCity: "Denton",
    contactCTA: "Get Your Denton Pool Remodel Quote"
  },
  {
    name: "Grand Prairie",
    slug: "grand-prairie",
    state: "TX",
    county: "Tarrant",
    lat: 32.6645,
    lng: -97.0053,
    population: 191000,
    medianHomeValue: 295500,
    serviceDescription: "Grand Prairie families love outdoor living. We provide expert pool remodeling with modern designs, efficient systems, and finishes that enhance your backyard.",
    testimonialCity: "Grand Prairie",
    contactCTA: "Schedule Your Grand Prairie Pool Consultation"
  },
  {
    name: "Richardson",
    slug: "richardson",
    state: "TX",
    county: "Dallas",
    lat: 32.9483,
    lng: -96.7292,
    population: 119000,
    medianHomeValue: 431400,
    serviceDescription: "Richardson's upscale residences deserve premium pool remodeling. We deliver architect-quality finishes and cutting-edge equipment for your luxury backyard.",
    testimonialCity: "Richardson",
    contactCTA: "Request Your Richardson Pool Design Consultation"
  },
  {
    name: "Carrollton",
    slug: "carrollton",
    state: "TX",
    county: "Dallas",
    lat: 32.9637,
    lng: -96.8059,
    population: 136000,
    medianHomeValue: 381000,
    serviceDescription: "Carrollton homeowners trust Elevated Pool for beautiful, durable remodeling. We specialize in complete transformations that add value and enjoyment to your home.",
    testimonialCity: "Carrollton",
    contactCTA: "Get Your Carrollton Pool Quote"
  },
  {
    name: "Coppell",
    slug: "coppell",
    state: "TX",
    county: "Dallas",
    lat: 32.9533,
    lng: -96.8015,
    population: 42000,
    medianHomeValue: 560500,
    serviceDescription: "Coppell's premium neighborhoods require exceptional pool remodeling. We deliver luxury finishes and professional craftsmanship for your high-end property.",
    testimonialCity: "Coppell",
    contactCTA: "Schedule Your Coppell Pool Consultation"
  },
  {
    name: "Grapevine",
    slug: "grapevine",
    state: "TX",
    county: "Tarrant",
    lat: 32.9344,
    lng: -97.0758,
    population: 55000,
    medianHomeValue: 493100,
    serviceDescription: "Grapevine's luxury estates deserve pools that match their excellence. We provide bespoke remodeling with premium materials and expert installation.",
    testimonialCity: "Grapevine",
    contactCTA: "Request Your Grapevine Estate Pool Consultation"
  },
  {
    name: "Flower Mound",
    slug: "flower-mound",
    state: "TX",
    county: "Denton",
    lat: 33.2206,
    lng: -97.1908,
    population: 80000,
    medianHomeValue: 560200,
    serviceDescription: "Flower Mound's exclusive communities deserve world-class pool remodeling. We specialize in high-end projects with custom designs and premium finishes.",
    testimonialCity: "Flower Mound",
    contactCTA: "Request Your Flower Mound Pool Consultation"
  },
  {
    name: "Addison",
    slug: "addison",
    state: "TX",
    county: "Dallas",
    lat: 32.9613,
    lng: -96.8359,
    population: 16000,
    medianHomeValue: 482000,
    serviceDescription: "Addison's upscale residential community benefits from Elevated Pool's premium remodeling services. We deliver luxury finishes for discerning homeowners.",
    testimonialCity: "Addison",
    contactCTA: "Schedule Your Addison Pool Consultation"
  },
  {
    name: "Southlake",
    slug: "southlake",
    state: "TX",
    county: "Tarrant",
    lat: 32.8816,
    lng: -97.1483,
    population: 32000,
    medianHomeValue: 1014500,
    serviceDescription: "Southlake's most prestigious estates rely on Elevated Pool for luxury remodeling. We deliver architectural excellence and bespoke designs for the most demanding clients.",
    testimonialCity: "Southlake",
    contactCTA: "Request Your Southlake Luxury Pool Consultation"
  },
  {
    name: "The Colony",
    slug: "the-colony",
    state: "TX",
    county: "Denton",
    lat: 33.0933,
    lng: -96.8559,
    population: 42000,
    medianHomeValue: 383900,
    serviceDescription: "The Colony waterfront and resort-style homes deserve exceptional pools. We specialize in remodeling projects that maximize your property's natural beauty.",
    testimonialCity: "The Colony",
    contactCTA: "Get Your The Colony Pool Quote"
  },
  {
    name: "Highland Village",
    slug: "highland-village",
    state: "TX",
    county: "Denton",
    lat: 33.1022,
    lng: -96.8328,
    population: 19000,
    medianHomeValue: 550000,
    serviceDescription: "Highland Village's luxury homes deserve premium pool remodeling. We deliver custom designs and high-end finishes for your exclusive property.",
    testimonialCity: "Highland Village",
    contactCTA: "Schedule Your Highland Village Pool Consultation"
  },
  {
    name: "Prosper",
    slug: "prosper",
    state: "TX",
    county: "Collin",
    lat: 33.2372,
    lng: -96.8037,
    population: 35000,
    medianHomeValue: 823700,
    serviceDescription: "Prosper's growing community of upscale homes needs expert pool remodeling. We deliver quality craftsmanship and modern designs for your backyard oasis.",
    testimonialCity: "Prosper",
    contactCTA: "Request Your Prosper Pool Quote"
  }
];

export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find(loc => loc.slug === slug);
}

export function getRelatedLocations(currentSlug: string, count: number = 5): Location[] {
  return LOCATIONS.filter(loc => loc.slug !== currentSlug).slice(0, count);
}
