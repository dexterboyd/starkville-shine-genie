import windowImage from "@/assets/window-cleaning.jpg";
import houseImage from "@/assets/house-washing.jpg";

export interface Service {
  slug: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  image?: string;
  alt?: string;
  price?: string;
  sections: { h2: string; paragraphs: string[]; bullets?: string[] }[];
  faqs: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: "window-cleaning",
    name: "Window Cleaning",
    title: "Window Cleaning in Starkville, MS | Pressure Pros",
    description:
      "Professional window cleaning in Starkville, MS, including screens and tracks. Starting at $99. Call Pressure Pros at 662-242-0663.",
    h1: "Window Cleaning in Starkville, MS",
    intro:
      "Clear, bright windows for homes and small businesses across Starkville and the Golden Triangle, with screens and tracks cleaned as part of every job.",
    image: windowImage,
    alt: "Pressure Pros technician cleaning exterior windows on a Starkville home",
    price: "$99",
    sections: [
      {
        h2: "Why windows in North Mississippi get dirty so fast",
        paragraphs: [
          "Every spring, Starkville turns yellow. Pine and oak pollen settles on glass, sills and screens, and a single rain shower turns that dust into a hazy film that dries in streaks. By summer, humidity helps mildew grow along window frames, and in fall the wind carries red clay dust from driveways, construction sites and farm roads onto the lower panes.",
          "Hard water is the other common problem. Sprinklers and runoff leave mineral spots that regular glass cleaner won't remove. We use professional tools and purified-water methods that lift pollen, dirt and mineral spotting without scratching the glass.",
        ],
      },
      {
        h2: "What our window cleaning includes",
        paragraphs: [
          "Every visit covers more than the glass. We clean the parts of the window most people skip, so the whole opening looks finished when we leave.",
        ],
        bullets: [
          "Exterior glass hand-cleaned and detailed",
          "Screens removed, washed and reinstalled",
          "Window tracks and sills vacuumed and wiped",
          "Hard water stain removal",
          "Storm window and skylight cleaning",
        ],
      },
      {
        h2: "Homes, rentals and storefronts",
        paragraphs: [
          "We clean single-story ranch homes, two-story houses with tall entry windows, rental properties getting ready for new tenants, and small storefronts that want a clean first impression. Many customers pair window cleaning with our house washing and soft washing service, or add gutter cleaning, so the whole exterior is done in one trip.",
        ],
      },
    ],
    faqs: [
      { q: "How much does window cleaning cost?", a: "Window cleaning starts at $99. The final price depends on how many windows you have, how many stories your home is, and whether there are hard water stains. Call us and we'll give you a clear price before any work starts." },
      { q: "How often should I have my windows cleaned?", a: "Most Starkville homeowners schedule window cleaning twice a year, usually after spring pollen season and again in the fall. Storefronts usually look best with monthly or quarterly cleaning." },
      { q: "Do I need to be home during the cleaning?", a: "No. For exterior window cleaning we only need access to the outside of your home and a gate left unlocked if you have one. We'll call or text you when the job is done." },
      { q: "Do you clean screens and tracks?", a: "Yes. Cleaning screens and window tracks is included with every window cleaning job at no extra charge." },
      { q: "Is your cleaning solution safe for pets and plants?", a: "Yes. We use gentle, biodegradable solutions and rinse carefully around flower beds, shrubs and lawns." },
    ],
  },
  {
    slug: "house-washing",
    name: "House Washing & Soft Washing",
    title: "House Washing & Soft Washing, Starkville MS | Pressure Pros",
    description:
      "Gentle house washing and soft washing in Starkville, MS. Removes mildew, algae and red clay stains. Starting at $150. Call 662-242-0663.",
    h1: "House Washing & Soft Washing in Starkville, MS",
    intro:
      "Low-pressure soft washing that safely removes mildew, green algae, pollen and red clay staining from vinyl, brick, stucco and painted siding.",
    image: houseImage,
    alt: "Soft washing vinyl siding on a Starkville home to remove green algae and mildew",
    price: "$150",
    sections: [
      {
        h2: "What soft washing is and why we use it",
        paragraphs: [
          "Soft washing uses a low-pressure spray and a cleaning solution that kills mildew and algae at the root, then rinses away gently. High pressure can crack vinyl, force water behind siding, strip paint and wear down mortar joints. Soft washing cleans just as well without that risk, and because it kills the growth instead of just blasting the surface, your siding stays clean longer.",
        ],
      },
      {
        h2: "Common siding problems we see around Starkville",
        paragraphs: [
          "Mississippi's heat and humidity are perfect for mildew and algae. The north side of a house, walls shaded by big oaks, and siding near sprinklers often turn green or black within a year or two. Spring pollen sticks to that growth and makes it look worse.",
          "Red clay is another local problem. Rain splashes clay from flower beds onto the bottom few feet of siding and brick, leaving an orange band that garden-hose rinsing won't remove. Our soft washing solutions are chosen to lift these stains safely.",
        ],
        bullets: [
          "Vinyl siding cleaning",
          "Brick and stone washing",
          "Green algae, moss and mildew removal",
          "Red clay splash-back removal",
          "Soffits, fascia and eaves",
          "Porches, columns and trim",
        ],
      },
      {
        h2: "Protect your home and its value",
        paragraphs: [
          "Mildew and algae hold moisture against your home's exterior and can shorten the life of paint and siding. Regular house washing keeps your home looking cared for, which matters for curb appeal, rentals and resale. Many customers book window cleaning on the same visit, and adding gutter cleaning stops overflow from staining freshly washed siding.",
        ],
      },
    ],
    faqs: [
      { q: "How much does house washing cost?", a: "House washing and soft washing start at $150. The price depends on your home's size, number of stories and how much growth is on the siding. Call us for an exact price." },
      { q: "Is soft washing safe for vinyl siding and brick?", a: "Yes. Soft washing uses low pressure, so it won't crack vinyl, damage mortar or force water behind your siding. It's the method siding manufacturers recommend." },
      { q: "How often should I have my house washed?", a: "Once a year is right for most homes in the Starkville area. Shaded homes or homes near woods may need it every 9 to 12 months because mildew and algae grow back faster." },
      { q: "Do I need to be home?", a: "No. Please close windows, leave outdoor water available and move vehicles away from the house if you can. We'll let you know when we're finished." },
      { q: "Will the cleaning solution hurt my plants?", a: "We wet down plants before and after washing and rinse thoroughly so landscaping is protected." },
    ],
  },
  {
    slug: "gutter-cleaning",
    name: "Gutter Cleaning",
    title: "Gutter Cleaning in Starkville, MS | Pressure Pros",
    description:
      "Gutter cleaning in Starkville, MS. We clear leaves, pine straw and debris and flush downspouts. Call Pressure Pros at 662-242-0663.",
    h1: "Gutter Cleaning in Starkville, MS",
    intro:
      "We clear leaves, pine straw and packed debris from gutters and flush every downspout so rainwater drains away from your home.",
    sections: [
      {
        h2: "Why gutters clog so quickly here",
        paragraphs: [
          "Starkville neighborhoods are full of tall pines, oaks and sweetgums. Pine straw falls year-round, oak leaves drop in late fall, and spring brings a heavy load of pollen and seed pods. That mix packs into gutters and downspouts, especially after a storm, and turns into a wet mat that holds water.",
          "Clogged gutters overflow during Mississippi's heavy rains. Water spills over the edge, splashes red clay onto the siding, wears away flower beds, and can pool near your foundation. Standing water in gutters also breeds mosquitoes and adds weight that pulls gutters loose from the fascia.",
        ],
      },
      {
        h2: "What our gutter cleaning includes",
        paragraphs: [
          "We work carefully from ladders and protect your roof and landscaping. When we finish, you'll know your gutters are clear from end to end.",
        ],
        bullets: [
          "All leaves, pine straw and debris removed by hand",
          "Downspouts flushed and checked for clogs",
          "Debris bagged and hauled away",
          "Quick check for loose hangers or leaking seams",
          "Gutter exteriors rinsed on request",
        ],
      },
      {
        h2: "Pair it with house washing and window cleaning",
        paragraphs: [
          "Overflowing gutters are one of the main causes of dark streaks and clay stains on siding. Many customers schedule gutter cleaning together with house washing and soft washing, and window cleaning, so the whole exterior stays clean after the next rain.",
        ],
      },
    ],
    faqs: [
      { q: "How much does gutter cleaning cost?", a: "The price depends on the length of your gutters, the height of your home and how full they are. Call us at (662) 242-0663 and we'll give you a clear price before we start." },
      { q: "How often should gutters be cleaned?", a: "Most homes in the Starkville area need gutter cleaning twice a year, in late spring after pollen and seed season and in early winter after the leaves fall. Homes under tall pines may need it more often." },
      { q: "Do I need to be home?", a: "No. We only need access to the outside of your home. We'll let you know when the job is done and mention anything we noticed, like loose gutters." },
      { q: "Will you haul away the debris?", a: "Yes. We bag everything we pull out of the gutters and take it with us." },
      { q: "Can gutter cleaning damage my roof?", a: "We use ladder stabilizers and careful methods to avoid damaging shingles, gutters or landscaping." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug)!;
