export interface City {
  slug: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  sections: { h2: string; paragraphs: string[] }[];
}

export const cities: City[] = [
  {
    slug: "starkville-ms",
    name: "Starkville",
    title: "Exterior cleaning services in Starkville, MS | Pressure Pros",
    description:
      "Window cleaning, house washing, soft washing and gutter cleaning in Starkville, MS. Locally based. Call Pressure Pros at 662-242-0663.",
    h1: "Window Cleaning & House Washing in Starkville, MS",
    intro:
      "Starkville is our home base. We clean windows, siding and gutters for homes and small businesses all over town.",
    sections: [
      {
        h2: "Exterior cleaning built for Starkville homes",
        paragraphs: [
          "From the bungalows near the Cotton District to the newer subdivisions off Highway 12, Starkville homes face the same challenges: thick spring pollen, humid summers and plenty of shade from mature pines and oaks. That combination means windows fog over with yellow film and north-facing siding turns green faster than many homeowners expect.",
          "Because we're based right here, we can usually schedule quickly, and we know which neighborhoods deal with heavy tree cover or red clay runoff from sloped yards.",
        ],
      },
      {
        h2: "Services we offer in Starkville",
        paragraphs: [
          "Our most requested service in town is window cleaning, with screens and tracks included. Homeowners on shaded lots often book house washing and soft washing to clear mildew and algae from vinyl and brick, and gutter cleaning is popular every fall when leaves and pine straw pile up.",
          "Game-day weekends and graduation season bring visitors to town, and many families like to have windows and siding cleaned before guests arrive. Landlords with rentals near campus also call us between leases to freshen up a property's exterior.",
        ],
      },
      {
        h2: "Small businesses on Main Street and beyond",
        paragraphs: [
          "Clean storefront glass matters for restaurants, boutiques and offices in downtown Starkville and along the Highway 12 corridor. We offer regular window cleaning so your front windows stay clear for customers all year.",
        ],
      },
      { h2: "Scheduling tips for Starkville", paragraphs: ['Starkville homeowners often ask when to schedule. Late April, after the heaviest pine pollen has fallen, is ideal for window cleaning and house washing. November is the best time for gutter cleaning, once the oaks and sweetgums have dropped their leaves.'] },
    ],
  },
  {
    slug: "columbus-ms",
    name: "Columbus",
    title: "Exterior cleaning services in Columbus, MS | Pressure Pros",
    description:
      "Soft washing, window cleaning and gutter cleaning for Columbus, MS homes and businesses. Gentle on historic homes. Call 662-242-0663.",
    h1: "Window Cleaning & Soft Washing in Columbus, MS",
    intro:
      "A short drive east on Highway 82, Columbus has some of the most beautiful homes in the state. We help keep them looking their best.",
    sections: [
      {
        h2: "Careful cleaning for historic and older homes",
        paragraphs: [
          "Columbus is known for its antebellum and Victorian houses, many with painted wood siding, tall wavy-glass windows and detailed trim. High-pressure washing can strip paint and damage old wood, so we use soft washing, a low-pressure method that lifts mildew and dirt without harming delicate surfaces.",
          "Older windows get the same careful treatment. We hand-clean glass and wipe down sills and tracks, and we take extra care with original panes that can't easily be replaced.",
        ],
      },
      {
        h2: "River humidity and mildew",
        paragraphs: [
          "Being close to the Tombigbee River means Columbus stays humid for much of the year. Homes near the water and on heavily shaded streets see mildew on siding, black streaks under eaves and green algae on north-facing walls. Our house washing service treats that growth so it takes longer to come back.",
          "Gutters fill fast under the big magnolias and oaks common in older neighborhoods. Regular gutter cleaning keeps rainwater from spilling over and staining freshly washed siding.",
        ],
      },
      {
        h2: "Serving Columbus families and businesses",
        paragraphs: [
          "We work with homeowners, military families near Columbus Air Force Base getting a home ready to sell or rent, and small businesses downtown that want spotless storefront windows. Call us and we'll set up a time that works for you.",
        ],
      },
      { h2: "Scheduling tips for Columbus", paragraphs: ['Columbus homeowners preparing for the spring Pilgrimage home tours often book house washing and window cleaning a few weeks ahead so porches, columns and tall windows look their best for visitors.'] },
    ],
  },
  {
    slug: "west-point-ms",
    name: "West Point",
    title: "Exterior cleaning services in West Point, MS | Pressure Pros",
    description:
      "Window cleaning, house washing and gutter cleaning in West Point, MS. Removes pollen, clay stains and mildew. Call 662-242-0663.",
    h1: "House Washing & Window Cleaning in West Point, MS",
    intro:
      "North of Starkville on Highway 45 Alt, West Point is part of our regular service area for window cleaning, house washing and gutter cleaning.",
    sections: [
      {
        h2: "Open land means more dust and pollen",
        paragraphs: [
          "Many homes around West Point sit on larger lots near farmland and pastures. Wind carries field dust, pollen and red clay across open ground and right onto windows and siding. Homeowners often notice a dull orange film on lower windows and brick after a dry, windy stretch.",
          "Our window cleaning removes that film from glass, screens and tracks. For siding and brick, house washing and soft washing lift clay stains and dirt without damaging mortar or vinyl.",
        ],
      },
      {
        h2: "From downtown to the golf course",
        paragraphs: [
          "We serve homes near downtown West Point and Commerce Street as well as properties out toward the Old Waverly golf community. Larger homes with tall windows and wide rooflines benefit from professional equipment that reaches second-story glass and high gutters safely.",
          "Shops and offices downtown also count on us for clean front windows that make a good first impression.",
        ],
      },
      {
        h2: "Keep gutters clear before storm season",
        paragraphs: [
          "Spring storms in Clay County can drop a lot of rain quickly. Gutters packed with leaves and seed pods overflow, splash clay onto siding and soak foundations. Scheduling gutter cleaning in late winter or early spring helps your home handle heavy rain.",
        ],
      },
      { h2: "Scheduling tips for West Point", paragraphs: ['Because many West Point homes have wide porches and metal roofs, we also rinse porch ceilings and railings during house washing, where spiders, pollen and wasp nests tend to collect.'] },
    ],
  },
  {
    slug: "mississippi-state-ms",
    name: "Mississippi State",
    title: "Exterior cleaning in Mississippi State, MS | Pressure Pros",
    description:
      "Window cleaning, soft washing and gutter cleaning near Mississippi State University for homes and rentals. Call Pressure Pros at 662-242-0663.",
    h1: "Window Cleaning & Soft Washing in Mississippi State, MS",
    intro:
      "We clean homes, rentals and faculty houses around the Mississippi State University campus, just minutes from our Starkville base.",
    sections: [
      {
        h2: "Move-in and move-out cleaning for rentals",
        paragraphs: [
          "Student rentals and duplexes near campus turn over every summer. Property owners and managers call us between leases to clean windows, wash siding and clear gutters so the property looks fresh for new tenants. A clean exterior helps rentals lease faster and cuts down on complaints later.",
          "We can work around tight turnover schedules and coordinate directly with property managers, so you don't have to be on site.",
        ],
      },
      {
        h2: "Faculty and family homes",
        paragraphs: [
          "Many faculty and staff live in quiet neighborhoods close to the university. These homes often sit under mature trees that drop leaves and pollen and keep siding shaded. That shade lets mildew and algae build up on vinyl and painted surfaces. Our soft washing service safely clears that growth and brightens the whole house.",
        ],
      },
      {
        h2: "Ready for game day and graduation",
        paragraphs: [
          "When family and friends come in for football Saturdays or commencement weekend, a clean home makes a great impression. Book window cleaning and house washing a week or two ahead of big weekends, since those dates fill up fast.",
          "Tailgate season also means extra dust and traffic. A quick exterior window cleaning after the season wraps up keeps your glass clear through winter.",
        ],
      },
      { h2: "Scheduling tips for Mississippi State", paragraphs: ['Property managers who handle several rentals near campus can set up a recurring schedule with us, so every unit gets windows, siding and gutters cleaned before each fall semester without extra phone calls.'] },
    ],
  },
  {
    slug: "louisville-ms",
    name: "Louisville",
    title: "Exterior cleaning services in Louisville, MS | Pressure Pros",
    description:
      "House washing, soft washing, window cleaning and gutter cleaning in Louisville, MS and Winston County. Call Pressure Pros at 662-242-0663.",
    h1: "House Washing & Gutter Cleaning in Louisville, MS",
    intro:
      "South of Starkville on Highway 25, we serve homeowners and small businesses in Louisville and across Winston County.",
    sections: [
      {
        h2: "Wooded lots and heavy tree cover",
        paragraphs: [
          "Louisville and the surrounding countryside are heavily wooded. That shade is nice in summer, but it also keeps siding damp, which lets green algae and black mildew spread across walls and trim. Pine needles and leaves fill gutters in a hurry, sometimes within a few weeks of a cleaning in the fall.",
          "Our house washing and soft washing service kills that growth at the root with low-pressure treatment, and our gutter cleaning clears packed pine straw and flushes downspouts.",
        ],
      },
      {
        h2: "Lake homes and country properties",
        paragraphs: [
          "Homes near Lake Tiak-O'Khata and out in the county often have large windows facing the water or the woods. Those views are worth keeping clear. We hand-clean exterior glass and wash screens and tracks so pollen and dust don't cloud the view.",
          "Gravel and clay driveways are common on rural properties, and passing vehicles kick up dust that settles on the lower walls. Soft washing removes that buildup safely from vinyl, brick and painted wood.",
        ],
      },
      {
        h2: "Local shops and offices",
        paragraphs: [
          "We also clean storefront windows for businesses around the Louisville square. Clean glass helps customers see your displays and tells them you care about your business.",
        ],
      },
      { h2: "Scheduling tips for Louisville", paragraphs: ['Many Louisville customers call us after spring storms, when broken limbs and pine straw clog gutters and wind-blown debris sticks to windows. We can clear the gutters, wash the siding and clean the glass in a single visit, so you only have to schedule once. Homeowners who live farther out in Winston County can also group their service with neighbors to make scheduling easier.'] },
    ],
  },
];

export const getCity = (slug: string) => cities.find((c) => c.slug === slug)!;
