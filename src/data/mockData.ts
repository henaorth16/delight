// src/data/mockData.ts - Centralized Static & Mock Data for Delight Tour Prototype

export interface ContactInfo {
  phone: string;
  phoneFormatted: string;
  phoneRaw: string;
  email: string;
  whatsappUrl: string;
  address: string;
  officeHoursWeekdays: string;
  officeHoursWeekend: string;
}

export interface DestinationItem {
  id: string;
  title: string;
  amharicTitle: string;
  category: "heritage" | "museum" | "nature" | "culture";
  categoryLabel: string;
  image: string;
  district: string;
  duration: string;
  highlights: string[];
  description: string;
  historicalContext: string;
  visitorTip: string;
  includedInTours: string[];
}

export interface TourScheduleItem {
  time: string;
  activity: string;
}

export interface TourPackage {
  id: string;
  name: string;
  tag: string;
  duration: string;
  price: number;
  featured?: boolean;
  badge?: string;
  overview: string;
  schedule: TourScheduleItem[];
  inclusions: string[];
  exclusions: string[];
  places: string;
}

export interface PlannerAttraction {
  id: string;
  name: string;
  amharic: string;
  category: "Culture" | "History" | "Nature" | "Food" | "Excursion";
  durationHours: number;
  costPerPerson: number;
  badge: string;
  image: string;
  description: string;
}

export interface VehicleOption {
  id: string;
  name: string;
  capacity: string;
  pricePerDay: number;
  description: string;
}

export interface StayOption {
  id: string;
  name: string;
  pricePerNight: number;
  description: string;
}

export interface ServiceDetail {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  highlights: string[];
  specs: { label: string; value: string }[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface LeadershipPersona {
  id: string;
  name: string;
  role: string;
  languages: string;
  bio: string;
  image: string;
}

// ---------------------------------------------------------------------------
// 1. Prototype Contact Details
// ---------------------------------------------------------------------------
export const MOCK_CONTACT: ContactInfo = {
  phone: "+251 90 000 0000",
  phoneFormatted: "+251 90 000 0000",
  phoneRaw: "+251900000000",
  email: "inquiry@delighttours.example.com",
  whatsappUrl: "https://wa.me/251900000000",
  address: "Bole Commercial Center, 4th Floor, Suite 402, Cameroon St, Addis Ababa, Ethiopia",
  officeHoursWeekdays: "Monday – Saturday: 08:30 – 18:30 EAT (UTC+3)",
  officeHoursWeekend: "Sunday: 09:30 – 15:30 EAT",
};

export const LEADERSHIP_PERSONAS: LeadershipPersona[] = [
  {
    id: "samuel",
    name: "Samuel Tesfaye",
    role: "Founder & Managing Director",
    languages: "English & Amharic",
    bio: "Passionate cultural organizer and tour coordinator with over a decade of hospitality experience in Addis Ababa. Dedicated to creating customized, stress-free journeys for visiting travelers from across the globe.",
    image: "/client1.avif",
  },
  {
    id: "elias",
    name: "Elias Kebede",
    role: "Head of Hospitality & Logistics",
    languages: "Arabic, English & Amharic",
    bio: "Specialist in guest house reservations, airport mobility, and culinary excursions. Fluent in Arabic, English, and Amharic, ensuring smooth communication and warm hospitality for international guests.",
    image: "/client_2.jpg",
  },
];


// ---------------------------------------------------------------------------
// 2. Destinations & Sights (including Lalibela!)
// ---------------------------------------------------------------------------
export const DESTINATIONS_DATA: DestinationItem[] = [
  {
    id: "lalibela",
    title: "Rock-Hewn Monolithic Churches of Lalibela",
    amharicTitle: "የላሊበላ ውቅር አብያተ ክርስቲያናት (ቤተ ጊዮርጊስ)",
    category: "heritage",
    categoryLabel: "UNESCO World Heritage Site",
    image: "/Lalibela.jpg",
    district: "Lasta Mountains (1hr Flight from Addis Bole ADD)",
    duration: "2 – 3 Days (Flight Excursion)",
    highlights: [
      "Bete Giyorgis (Church of St. George) carved downwards from solid volcanic rock in the shape of a Greek cross",
      "Eleven medieval monolithic cave churches connected by subterranean ceremonial catacombs & trenches",
      "Living pilgrimage tradition with ancient Ge'ez choral liturgies, brass hand-crosses, and 12th-century murals",
      "Designated as one of the original UNESCO World Heritage Sites in 1978 and hailed as the 'Eighth Wonder of the World'",
    ],
    description:
      "Perched high in the rugged highlands of northern Ethiopia, Lalibela is a breathtaking holy city carved out of living bedrock during the 12th century under King Gebre Mesqel Lalibela. Created as a 'New Jerusalem' when Muslim expansions halted pilgrimages to the Middle East, its subterranean architectural feats remain fully active sanctuaries of worship today.",
    historicalContext:
      "Unlike conventional temples built from assembled blocks, Lalibela's churches were excavated top-down: deep trenches were carved into pink volcanic tuff, isolating massive blocks that were then hollowed out into pillars, arched roofs, and domed altars. Local legend holds that angelic hosts assisted the Zagwe stonemasons by night.",
    visitorTip:
      "Ethiopian Airlines operates daily direct 1-hour scenic flights between Addis Ababa Bole Airport and Lalibela (LLI). Modest white cotton wraps (Netela) are provided by your guide when entering sacred thresholds.",
    includedInTours: ["Lalibela Flight Pilgrimage (3-Day)", "Grand Heritage Explorer", "Custom Flight Add-on"],
  },
  {
    id: "national-museum",
    title: "National Museum of Ethiopia & Lucy",
    amharicTitle: "የኢትዮጵያ ብሔራዊ ሙዚየም (ድንቅነሽ)",
    category: "museum",
    categoryLabel: "Paleontology & Archaeology",
    image: "/lucy_2.jpg",
    district: "Arat Kilo, King George VI St",
    duration: "2 – 3 Hours",
    highlights: [
      "Original casts of Lucy (Dinknesh), 3.2M years old hominid",
      "Crowns, throne chairs, and royal vestments of Emperor Haile Selassie",
      "Ancient Axumite pottery, Ge'ez parchment manuscripts, and bronze relics",
      "Rich gallery of Ethiopian modern and traditional church artwork",
    ],
    description:
      "Recognized globally as one of the premier paleontological centers in Africa. The museum's basement displays the revolutionary hominid fossils discovered in the Afar Depression, cementing Ethiopia's status as the evolutionary cradle of humankind.",
    historicalContext:
      "Opened in 1958, the museum houses treasures from ancient pre-Aksumite eras up to the 20th-century monarchy. Walking through its four exhibition floors provides a panoramic timeline of East African civilization.",
    visitorTip:
      "Flash photography is restricted in the fossil gallery. Our guides provide private narrative context for the Ge'ez script collections.",
    includedInTours: ["Silver Package (1-Day)", "Gold Package (2-Day)", "Platinum VIP (3-Day)"],
  },
  {
    id: "mount-entoto",
    title: "Mount Entoto & Entoto Natural Park",
    amharicTitle: "እንጦጦ ተራራ እና የተፈጥሮ ፓርክ",
    category: "nature",
    categoryLabel: "Highland Overlook & Nature",
    image: "/entoto.jpg",
    district: "Northern Ridge (3,200m Elevation)",
    duration: "3 – 4 Hours",
    highlights: [
      "3,200m altitude vantage point overlooking the entire Addis Ababa skyline",
      "Aromatic eucalyptus forest trails and fresh mountain breeze",
      "Historic Entoto Maryam Church built by Emperor Menelik II in 1882",
      "Modern Entoto Park with suspension bridges, viewpoint cafés, and fresh highland trails",
    ],
    description:
      "Before Addis Ababa was founded in the fertile valley below, Emperor Menelik II and Empress Taytu Betul established their military encampment atop Mount Entoto. Today, it stands as a peaceful natural sanctuary offering cool breezes and breathtaking panoramas.",
    historicalContext:
      "The historic palace compound of Emperor Menelik II remains preserved on the hill, alongside a church museum exhibiting royal crowns, hand-woven coronation robes, and historic treaties.",
    visitorTip:
      "At 3,200m elevation, temperatures can be 5°C to 8°C cooler than the city center. Bring a light fleece or warm layer.",
    includedInTours: ["Gold Package (2-Day)", "Platinum VIP (3-Day)", "Nature & Hiking Custom"],
  },
  {
    id: "unity-park",
    title: "Unity Park & Grand Imperial Palace",
    amharicTitle: "አንድነት ፓርክ (ታላቁ ቤተ መንግሥት)",
    category: "heritage",
    categoryLabel: "Imperial Heritage & Sanctuary",
    image: "/unity.jpg",
    district: "Arat Kilo Government District",
    duration: "2.5 – 3.5 Hours",
    highlights: [
      "Restored Throne Room of Emperor Menelik II & Hall of Mirrors",
      "Nine regional cultural pavilions showcasing diverse Ethiopian traditions",
      "Black-maned Ethiopian lion sanctuary and botanical rose gardens",
      "Historic imperial wine cellars, state banqueting halls, and watchtowers",
    ],
    description:
      "Located within the heavily fortified perimeter of the Grand Palace (the seat of Ethiopian government since 1887), Unity Park was opened to the public in 2019 following an ambitious restoration. It offers visitors an intimate view of imperial life and contemporary Ethiopian heritage.",
    historicalContext:
      "For over 130 years, this sprawling compound was inaccessible to the general public. Walking through Emperor Menelik's bedchambers and Empress Taytu's quarters is an unmatched architectural encounter.",
    visitorTip:
      "Security protocol requires all visitors to bring their physical passport. Unity Park is closed on Mondays.",
    includedInTours: ["Gold Package (2-Day)", "Platinum VIP (3-Day)"],
  },
  {
    id: "merkato-market",
    title: "Addis Merkato & Artisan Quarters",
    amharicTitle: "አዲስ መርካቶ እና የዕደ-ጥበብ መንደር",
    category: "culture",
    categoryLabel: "Commerce & Cultural Life",
    image: "/merkato.jpeg",
    district: "Addis Ketema District",
    duration: "2 – 3 Hours",
    highlights: [
      "Widely recognized as Africa's largest sprawling open-air marketplace",
      "Spice Quarter: piles of crimson Berbere, wild Korarima cardamom, and thyme",
      "Traditional Shema quarter with hand-woven cotton dresses and Ethiopian crosses",
      "Authentic artisanal coffee pots (Jebena) and woven grass bread baskets (Mesob)",
    ],
    description:
      "Merkato is a sensory explosion of commerce, fragrance, and craftsmanship. Spanning square kilometers, thousands of merchants trade everything from agricultural staples to exquisite silver filigree jewelry and hand-tooled leather goods.",
    historicalContext:
      "Established during the 1930s, Merkato grew into the primary commercial lifeline of East Africa. It reflects the energetic pulse and trading spirit of modern Ethiopia.",
    visitorTip:
      "Having our experienced guide alongside you is crucial to navigating the labyrinthine alleys comfortably and finding fair, authentic prices.",
    includedInTours: ["Silver Package (1-Day)", "Gold Package (2-Day)", "Platinum VIP (3-Day)"],
  },
  {
    id: "coffee-tradition",
    title: "The Ethiopian Coffee Ceremony (Buna)",
    amharicTitle: "ባህላዊ የቡና ማፍላት ሥነ-ሥርዓት",
    category: "culture",
    categoryLabel: "Living Culinary Tradition",
    image: "/bunna.jpeg",
    district: "Bole & Traditional Cultural Lounges",
    duration: "1.5 – 2 Hours",
    highlights: [
      "Pan-roasting raw green Arabica coffee beans over fragrant frankincense coals",
      "Traditional clay Jebena slow-brewing and triple-stage serving ritual",
      "Served on fresh cut green grasses (Ketema) with salted popcorn & local bread",
      "Live Eskista shoulder dance performances at evening cultural dinner halls",
    ],
    description:
      "In Ethiopia, coffee is far more than a morning stimulant—it is a sacred communal hospitality ritual rooted in centuries of culture. The ceremony consists of three deliberate pourings: Abol (the first and strongest), Tona (the second), and Bereka (the final blessing).",
    historicalContext:
      "Legend tells of Kaldi, the 9th-century Ethiopian goat herder who first noticed his flock dancing after eating the red berries of the wild coffee tree in Kaffa, giving the world its beloved drink.",
    visitorTip:
      "Accepting all three rounds of coffee is considered a sincere compliment to your host's generosity.",
    includedInTours: ["All Delight Tour Packages"],
  },
  {
    id: "cathedrals",
    title: "Holy Trinity Cathedral & St. George's",
    amharicTitle: "ቅድስት ሥላሴ እና ቅዱስ ጊዮርጊስ ካቴድራሎች",
    category: "heritage",
    categoryLabel: "Orthodox Architecture & Art",
    image: "/addis.jpeg",
    district: "Piazza & Arat Kilo",
    duration: "2 – 3 Hours",
    highlights: [
      "Granite sarcophagi of Emperor Haile Selassie I and Empress Menen Asfaw",
      "Splendid stained glass windows painted by Ethiopian artist Afewerk Tekle",
      "St. George's octagonal cathedral where Emperor Haile Selassie was crowned in 1930",
      "Museum collection of imperial ceremonial umbrellas, golden crosses, and vestments",
    ],
    description:
      "Holy Trinity Cathedral is the second most important place of worship in Ethiopia (after St. Mary of Zion in Aksum). St. George's Cathedral in the Piazza district represents classic Ethiopian octagonal church architecture built to commemorate the historic 1896 victory at Adwa.",
    historicalContext:
      "The cathedral grounds also serve as the final resting place of heroes of the anti-fascist resistance, as well as the notable British suffragette and friend of Ethiopia, Sylvia Pankhurst.",
    visitorTip:
      "Visitors are requested to remove footwear before entering the holy sanctuary. Clean traditional white shawls (Netela) are provided at the entrance.",
    includedInTours: ["Silver Package (1-Day)", "Gold Package (2-Day)", "Platinum VIP (3-Day)"],
  },
];

// ---------------------------------------------------------------------------
// 3. Tour Packages (including Lalibela Expedition!)
// ---------------------------------------------------------------------------
export const TOURS_DATA: TourPackage[] = [
  {
    id: "silver-day",
    name: "The Essential Addis Highlights",
    tag: "1-Day Express",
    duration: "1 Day (8 Hours, 09:00 – 17:00)",
    price: 70,
    overview:
      "Designed for travelers with limited time or on layovers. Covers world-famous archaeological discoveries, panoramic viewpoints, and authentic coffee rituals.",
    schedule: [
      { time: "09:00", activity: "Complimentary hotel/guest house pickup in private vehicle" },
      { time: "09:30", activity: "National Museum: Explore Lucy (Dinknesh) with our historian" },
      { time: "11:30", activity: "Holy Trinity Cathedral: Emperor Haile Selassie tomb & murals" },
      { time: "13:00", activity: "Traditional Ethiopian Lunch (Injera, Doro Wat or vegetarian feast)" },
      { time: "14:15", activity: "Authentic coffee ceremony: fresh green bean roasting & tasting" },
      { time: "15:30", activity: "Mount Entoto: 3,200m panoramic overlook of the capital" },
      { time: "16:30", activity: "Addis Merkato: Guided artisan & spice quarter stroll" },
      { time: "17:30", activity: "Comfortable drop-off at your hotel or Bole Airport" },
    ],
    inclusions: [
      "Professional English/Arabic/Amharic speaking licensed guide",
      "Private air-conditioned vehicle & dedicated driver",
      "All museum and historic site entrance tickets",
      "Authentic cultural lunch & bottled mineral water",
      "Complete Ethiopian coffee ceremony tasting",
    ],
    exclusions: ["Alcoholic beverages", "Personal souvenir purchases", "International flights"],
    places: "National Museum (Lucy), Holy Trinity, Entoto Ridge, Coffee Ritual, Merkato",
  },
  {
    id: "gold-culture",
    name: "Ethiopian Heritage & Cultural Explorer",
    tag: "2-Day Journey",
    duration: "2 Full Days",
    price: 160,
    featured: true,
    badge: "Most Popular",
    overview:
      "A deeper voyage into the historical cradle of East Africa. Features scenic highland forests, royal palaces, and an unforgettable evening of live traditional music.",
    schedule: [
      { time: "Day 1 - Morning", activity: "National Museum, Lucy fossils & King George VI landmarks" },
      { time: "Day 1 - Afternoon", activity: "Unity Park & Grand Palace historic state rooms" },
      { time: "Day 1 - Evening", activity: "Cultural dinner with live traditional Eskista dance & music" },
      { time: "Day 2 - Morning", activity: "Mount Entoto eucalyptus trails & Entoto Maryam panoramic church" },
      { time: "Day 2 - Afternoon", activity: "Merkato artisan quarter & traditional pottery demonstration" },
      { time: "Day 2 - Evening", activity: "Traditional buna tasting ceremony and farewell transfer" },
    ],
    inclusions: [
      "Dedicated private transportation for 2 consecutive days",
      "All entrance tickets (National Museum, Unity Park, Entoto)",
      "Daily cultural lunch plus 1 traditional musical dinner",
      "Expert personal local guide throughout your stay",
      "Complimentary Bole International Airport airport pickup",
    ],
    exclusions: ["Boutique accommodation (can be added)", "Gratuities & personal expenses"],
    places: "Addis Ababa City Highlights, Entoto Park, Unity Park, Cultural Dinner House",
  },
  {
    id: "platinum-vip",
    name: "Platinum All-Inclusive City & Stay",
    tag: "3-Day VIP Experience",
    duration: "3 Days / 2 Nights",
    price: 230,
    badge: "VIP & Stay",
    overview:
      "Our signature hassle-free hospitality package. Includes 2 nights at our curated boutique partner guest house, full roundtrip airport chauffeuring, and personalized pace.",
    schedule: [
      { time: "Day 1", activity: "VIP airport pickup, guest house check-in, National Museum & Trinity" },
      { time: "Day 2", activity: "Full day: Unity Park, Entoto mountain overlook, traditional lunch & dinner show" },
      { time: "Day 3", activity: "Piazza heritage walking tour, Merkato crafts, souvenir shopping & airport return" },
    ],
    inclusions: [
      "2 nights private lodging at verified boutique guest house in Bole",
      "Roundtrip Bole International Airport meet & greet transfers",
      "Dedicated air-conditioned 4x4 or VIP minivan throughout all 3 days",
      "All meals included: daily breakfasts, lunches, and dinner show",
      "All admission fees, photo permits, and 24/7 dedicated concierge",
    ],
    exclusions: ["International airfare", "Travel insurance"],
    places: "Addis Ababa Complete Highlights, Boutique Stay, Entoto, Unity Park, Piazza",
  },
  {
    id: "lalibela-expedition",
    name: "Lalibela Rock-Hewn Churches Flight Expedition",
    tag: "3-Day UNESCO Wonder",
    duration: "3 Days / 2 Nights (Domestic Flight)",
    price: 390,
    featured: true,
    badge: "UNESCO Wonder",
    overview:
      "Fly from Addis Ababa to the mountain kingdom of Lalibela. Marvel at all 11 monolithic churches carved into solid red basalt, walk underground prayer tunnels, and witness centuries of living Orthodox liturgy.",
    schedule: [
      { time: "Day 1", activity: "Morning flight Addis to Lalibela (LLI). Check-in at mountain lodge. Afternoon tour of Northern Group (Bete Medhane Alem, Bete Maryam)." },
      { time: "Day 2", activity: "Full day: Western Group including the legendary cross-shaped Bete Giyorgis (St. George), subterranean tunnels, and sunset mountain vista." },
      { time: "Day 3", activity: "Morning liturgical chant at cave monastery Ashetan Maryam, local highland honey tasting, and return flight to Addis Ababa Bole Airport." },
    ],
    inclusions: [
      "Roundtrip domestic flight tickets (Addis Ababa ADD ⇄ Lalibela LLI)",
      "2 nights stay at curated cliffside boutique eco-lodge in Lalibela",
      "Official licensed Lalibela historical priest-guide & church entry permits",
      "Private 4x4 transport in Lalibela with dedicated mountain driver",
      "All daily meals (traditional fasting stews, highland breakfast, fresh coffee)",
    ],
    exclusions: ["International flights to Addis Ababa", "Personal ecclesiastical souvenirs"],
    places: "Bete Giyorgis, Bete Medhane Alem, Ashetan Maryam, Lasta Highland Ridge",
  },
];

// ---------------------------------------------------------------------------
// 4. Attractions for Custom Trip Planner (including Lalibela!)
// ---------------------------------------------------------------------------
export const PLANNER_ATTRACTIONS: PlannerAttraction[] = [
  {
    id: "lalibela",
    name: "Lalibela Rock-Hewn Churches (Domestic Flight)",
    amharic: "የላሊበላ ውቅር አብያተ ክርስቲያናት",
    category: "Excursion",
    durationHours: 24,
    costPerPerson: 180,
    badge: "UNESCO 8th Wonder",
    image: "/Lalibela.jpg",
    description: "1-hour domestic flight to the 12th-century holy city. Explore cross-shaped Bete Giyorgis carved out of solid rock.",
  },
  {
    id: "lucy",
    name: "National Museum & Lucy Fossil",
    amharic: "የኢትዮጵያ ብሔራዊ ሙዚየም",
    category: "History",
    durationHours: 2.5,
    costPerPerson: 10,
    badge: "Must-See Origin",
    image: "/lucy_2.jpg",
    description: "3.2M-year-old fossil of Dinknesh (Lucy), imperial crowns, and ancient Axumite relics.",
  },
  {
    id: "entoto",
    name: "Mount Entoto & Panoramic Ridge",
    amharic: "እንጦጦ ተራራ እና ፓርክ",
    category: "Nature",
    durationHours: 3.5,
    costPerPerson: 15,
    badge: "3,200m Altitude",
    image: "/entoto.jpg",
    description: "Breathtaking capital skyline views, fragrant eucalyptus forests, and Emperor Menelik's 1882 palace.",
  },
  {
    id: "unity",
    name: "Unity Park & Grand Palace",
    amharic: "አንድነት ፓርክ",
    category: "History",
    durationHours: 3,
    costPerPerson: 20,
    badge: "Imperial Palace",
    image: "/unity.jpg",
    description: "Restored royal throne halls, regional ethnic pavilions, and indigenous black-maned lion sanctuary.",
  },
  {
    id: "coffee",
    name: "Traditional Buna Coffee Ceremony",
    amharic: "ባህላዊ የቡና ሥነ-ሥርዓት",
    category: "Food",
    durationHours: 1.5,
    costPerPerson: 12,
    badge: "Living Ritual",
    image: "/bunna.jpeg",
    description: "Charcoal pan-roasting of green Arabica beans, clay Jebena brewing, frankincense, and salted popcorn.",
  },
  {
    id: "cathedral",
    name: "Holy Trinity & St. George Cathedral",
    amharic: "ቅድስት ሥላሴ ካቴድራል",
    category: "Culture",
    durationHours: 2,
    costPerPerson: 10,
    badge: "Orthodox Art",
    image: "/addis.jpeg",
    description: "Imperial tombs of Haile Selassie, Afewerk Tekle stained-glass windows, and historic Piazza octagonal church.",
  },
  {
    id: "merkato",
    name: "Addis Merkato & Spice Quarters",
    amharic: "አዲስ መርካቶ የቅመም ገበያ",
    category: "Culture",
    durationHours: 2.5,
    costPerPerson: 15,
    badge: "Africa's Largest",
    image: "/merkato.jpeg",
    description: "Sensory walk through Berbere spice alleys, hand-woven cotton textiles, and traditional Jebena pottery.",
  },
  {
    id: "dinner",
    name: "Cultural Dinner & Live Eskista Dance",
    amharic: "ባህላዊ እራት እና እስክስታ",
    category: "Food",
    durationHours: 2.5,
    costPerPerson: 25,
    badge: "Evening Show",
    image: "/bunna.jpeg",
    description: "Injera feast, authentic honey wine (Tej), and energetic live shoulder-dancing performances from 8 Ethiopian regions.",
  },
];

// ---------------------------------------------------------------------------
// 5. Vehicles & Accommodation Tiers
// ---------------------------------------------------------------------------
export const VEHICLE_OPTIONS: VehicleOption[] = [
  {
    id: "standard",
    name: "Standard City Sedan / Compact",
    capacity: "Up to 3 passengers",
    pricePerDay: 25,
    description: "Air-conditioned city vehicle with professional local driver. Ideal for solo or couples.",
  },
  {
    id: "prado",
    name: "4x4 Toyota Land Cruiser / Prado",
    capacity: "Up to 4 passengers",
    pricePerDay: 60,
    description: "Premium all-terrain highland comfort. Elevated ride for mountain roads & Entoto ridge.",
  },
  {
    id: "van",
    name: "VIP Executive HiAce Van",
    capacity: "Up to 9 passengers",
    pricePerDay: 75,
    description: "Spacious passenger van with extra luggage capacity for families and group delegations.",
  },
];

export const STAY_OPTIONS: StayOption[] = [
  {
    id: "none",
    name: "No Accommodation (Day Tour Only)",
    pricePerNight: 0,
    description: "I already have my own hotel or guest house in Addis Ababa.",
  },
  {
    id: "guesthouse",
    name: "Delight Boutique Guest House (Bole)",
    pricePerNight: 55,
    description: "Peaceful neighborhood stay, fiber Wi-Fi, generator backup, and fresh home-style breakfast.",
  },
  {
    id: "luxury",
    name: "5-Star Partner Hotel Suite",
    pricePerNight: 120,
    description: "Luxury city hotel room with swimming pool, spa access, and 24/7 business facilities.",
  },
];

// ---------------------------------------------------------------------------
// 6. Detailed Services Breakdown
// ---------------------------------------------------------------------------
export const DETAILED_SERVICES: ServiceDetail[] = [
  {
    id: "city-tours",
    badge: "Exploration & Culture",
    title: "Guided Addis & Regional Tours",
    subtitle: "Immersive private day tours and UNESCO flight excursions led by licensed historians",
    description:
      "Our signature tours guide you through millennia of history, ancient human origins, and dynamic contemporary urban life. We handle all logistics—from skip-the-line museum tickets and Lalibela domestic flights to private vehicle navigation through the city.",
    image: "/addis.jpeg",
    highlights: [
      "Exclusive access to the National Museum & Lucy (Dinknesh) palaeontology gallery",
      "Panoramic views of the entire city from Mount Entoto (3,200m altitude)",
      "Optional flight excursions to the monolithic 12th-century churches of Lalibela",
      "Traditional coffee roasting ceremony with local culinary lunch",
      "Custom pace tailored for families, photographers, and solo adventurers",
    ],
    specs: [
      { label: "Duration", value: "Half-Day, Full-Day, or Multi-Day Flights" },
      { label: "Group Size", value: "Private (1 to 12 guests)" },
      { label: "Languages", value: "English, Arabic, French, Amharic" },
      { label: "Pickup", value: "Complimentary hotel/guest house pickup" },
    ],
  },
  {
    id: "accommodations",
    badge: "Comfort & Hospitality",
    title: "Curated Guest House Stays",
    subtitle: "Peaceful, verified accommodations in premier Addis neighborhoods",
    description:
      "Avoid sterile hotels and experience genuine Ethiopian warmth. We partner with handpicked guest houses in safe, vibrant neighborhoods like Bole and Kazanchis, offering full security, fiber Wi-Fi, and personalized home-style breakfasts.",
    image: "/client1.avif",
    highlights: [
      "Convenient access to international restaurants, cafes, and Bole Airport",
      "High-speed fiber internet and uninterrupted backup power generators",
      "Daily fresh breakfast featuring Ethiopian and continental options",
      "Dedicated 24/7 on-call host for reservations and local advice",
      "Clean, modern private rooms with en-suite bathrooms and work desks",
    ],
    specs: [
      { label: "Locations", value: "Bole, Kazanchis, Old Airport" },
      { label: "Room Types", value: "Deluxe Queen, Twin Suites, Family Units" },
      { label: "Amenities", value: "Fiber Wi-Fi, Generator, Hot Water, Breakfast" },
      { label: "Check-in", value: "Flexible 24/7 with advance notice" },
    ],
  },
  {
    id: "transport",
    badge: "Seamless Mobility",
    title: "Private Chauffeur & Airport Mobility",
    subtitle: "Modern air-conditioned 4x4 SUVs and minivans with expert drivers",
    description:
      "Navigating traffic in a bustling metropolis requires local expertise. Our chauffeured transport service gives you total flexibility, whether you need on-time Bole Airport transfers, full-day shopping in Merkato, or weekend excursions to crater lakes.",
    image: "/addis1.jpg",
    highlights: [
      "Meet-and-greet right outside Bole International Airport terminal",
      "Late-model Toyota Land Cruisers, Prados, and executive HiAce vans",
      "Courteous, licensed drivers fluent in English with impeccable safety records",
      "Fuel, insurance, and parking permits fully covered in all packages",
      "Available for inter-city day trips (Debre Zeit, Wenchi Crater Lake)",
    ],
    specs: [
      { label: "Fleet", value: "Toyota 4x4 SUVs, VIP Vans (1–12 seats)" },
      { label: "Availability", value: "24/7 on-demand or pre-scheduled" },
      { label: "Coverage", value: "All Addis Ababa & Oromia regional day trips" },
      { label: "Luggage", value: "Spacious trunk capacity for multiple bags" },
    ],
  },
];

// ---------------------------------------------------------------------------
// 7. Frequently Asked Questions
// ---------------------------------------------------------------------------
export const FAQS_DATA: FAQItem[] = [
  {
    question: "Can I combine an Addis Ababa tour with a visit to Lalibela?",
    answer:
      "Yes! Ethiopian Airlines operates multiple 1-hour flights daily between Addis Ababa Bole Airport and Lalibela (LLI). We arrange all-inclusive 2 or 3-day packages covering roundtrip domestic flights, cliffside lodge stays, and licensed priest-historians for all 11 rock churches.",
  },
  {
    question: "How do international travelers obtain an Ethiopian tourist visa?",
    answer:
      "Most international travelers can conveniently apply online for an official Ethiopian e-Visa (30 or 90 days single entry) via evisa.gov.et prior to departure. Citizens of many nations can also obtain a visa upon arrival at Bole International Airport (ADD).",
  },
  {
    question: "Where will my driver or guide meet me upon arrival at Bole Airport?",
    answer:
      "For all airport transfer bookings, our dedicated driver waits directly outside the main international arrivals terminal holding a personalized Delight Tour welcome board with your name. We monitor live flight arrival times for delays.",
  },
  {
    question: "What currencies and payment methods are accepted?",
    answer:
      "For this prototype platform, all rates are displayed in USD for international clarity. Locally, we accept major foreign currencies (USD, EUR, GBP) converted at official bank rates, Ethiopian Birr (ETB), Telebirr, and major credit cards.",
  },
  {
    question: "Can Delight Tour accommodate strict vegetarian, vegan, or fasting diets?",
    answer:
      "Ethiopia has one of the world's richest traditions of plant-based cuisine due to Ethiopian Orthodox fasting traditions (Tsom). Delicious vegan platters (Bayenetu) consisting of spiced lentils, yellow split peas, collard greens, and shiro on injera are widely available daily.",
  },
  {
    question: "What is your cancellation and rescheduling policy?",
    answer:
      "We offer flexible rescheduling without penalty up to 24 hours before your scheduled tour departure. Cancellations made 48 hours in advance are eligible for a 100% refund of the deposit.",
  },
  {
    question: "Is Addis Ababa safe for solo and family travelers?",
    answer:
      "Addis Ababa is considered one of the safer capital cities in Africa. As in any large metropolitan area, common-sense precautions against petty pickpocketing in crowded areas like Merkato apply. Having our private licensed guide and vehicle ensures a seamless and secure experience.",
  },
];

// ---------------------------------------------------------------------------
// 9. Booking & Mock Checkout Types & Helpers
// ---------------------------------------------------------------------------
export interface BookingOrder {
  orderId?: string;
  tourId: string;
  tourName: string;
  tag?: string;
  duration: string;
  guests: number;
  travelDate?: string;
  pricePerPerson: number;
  totalPrice: number;
  currency?: "USD" | "EUR" | "ETB";
  vehicle?: string;
  stay?: string;
  inclusions?: string[];
  customer?: {
    fullName: string;
    email: string;
    phone: string;
    pickupLocation: string;
    specialNotes?: string;
  };
  paymentMethod?: string;
  paidAt?: string;
}

const CHECKOUT_STORAGE_KEY = "delight_current_checkout";
const CONFIRMED_BOOKING_KEY = "delight_last_confirmed_booking";

export const saveCheckoutOrder = (order: BookingOrder): void => {
  try {
    sessionStorage.setItem(CHECKOUT_STORAGE_KEY, JSON.stringify(order));
  } catch {
    // Fallback or ignore
  }
};

export const getCheckoutOrder = (): BookingOrder | null => {
  try {
    const raw = sessionStorage.getItem(CHECKOUT_STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    // Fallback
  }
  return null;
};

export const saveConfirmedBooking = (booking: BookingOrder): void => {
  try {
    sessionStorage.setItem(CONFIRMED_BOOKING_KEY, JSON.stringify(booking));
  } catch {
    // Fallback
  }
};

export const getConfirmedBooking = (): BookingOrder | null => {
  try {
    const raw = sessionStorage.getItem(CONFIRMED_BOOKING_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    // Fallback
  }
  return null;
};

