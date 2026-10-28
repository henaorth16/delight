import React, { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Fade } from "../components/Fade";
import { FiMapPin, FiClock, FiCheck, FiShield, FaWhatsapp } from "../components/Icons";
import { MOCK_CONTACT } from "../../utils/utils";

interface DestinationItem {
  id: string;
  title: string;
  amharicTitle: string;
  category: "museum" | "nature" | "culture" | "heritage";
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

const destinationsData: DestinationItem[] = [
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
      "Modern Entoto Park with suspension bridges, ziplines, and viewpoint cafés",
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

export const Destinations: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredDestinations =
    activeFilter === "all"
      ? destinationsData
      : destinationsData.filter((d) => d.category === activeFilter);

  return (
    <div className="bg-slate-50 min-h-screen py-12 lg:py-16 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Demo Banner */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200/80 mb-8">
          <nav className="flex items-center text-xs text-slate-500 gap-2">
            <Link to="/" className="hover:text-brand-600 transition">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Destinations &amp; Landmarks</span>
          </nav>
          <span className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1 bg-amber-50 text-amber-800 rounded-full border border-amber-200">
            Prototype Showcase Guide
          </span>
        </div>

        {/* Hero Header */}
        <Fade delay={50}>
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
              Discover Addis Ababa &amp; Ethiopia
            </span>
            <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Curated Landmarks &amp; Cultural Treasures
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              From the 3.2-million-year-old origins of human ancestry to imperial palaces, panoramic mountain ridges,
              and aromatic open-air spice markets—explore what makes Addis Ababa the diplomatic and cultural capital of Africa.
            </p>
          </div>
        </Fade>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {[
            { id: "all", label: "All Landmarks (6)" },
            { id: "museum", label: "Museums & Paleontology" },
            { id: "heritage", label: "Imperial & Churches" },
            { id: "nature", label: "Highlands & Nature" },
            { id: "culture", label: "Culture & Living Traditions" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === tab.id
                  ? "bg-brand-600 text-white shadow-sm"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {filteredDestinations.map((dest, idx) => (
            <Fade key={dest.id} delay={idx * 100}>
              <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                {/* Image & Badges */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                  <img
                    src={dest.image}
                    alt={dest.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/95 backdrop-blur text-slate-900 rounded-full text-xs font-bold shadow-sm">
                      {dest.categoryLabel}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs text-amber-300 font-medium tracking-wide">
                      {dest.amharicTitle}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white drop-shadow-sm">
                      {dest.title}
                    </h2>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Meta Info Bar */}
                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pb-4 mb-5 border-b border-slate-100">
                      <div className="flex items-center gap-1.5 font-medium">
                        <FiMapPin className="text-brand-600" size={15} />
                        <span>{dest.district}</span>
                      </div>
                      <div className="flex items-center gap-1.5 font-medium">
                        <FiClock className="text-brand-600" size={15} />
                        <span>Duration: {dest.duration}</span>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed font-normal mb-4">
                      {dest.description}
                    </p>

                    <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 mb-5">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Historical Context
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {dest.historicalContext}
                      </p>
                    </div>

                    {/* Key Highlights */}
                    <div className="mb-5">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2.5">
                        Key Experience Highlights:
                      </h3>
                      <ul className="space-y-2 text-xs text-slate-600 font-normal">
                        {dest.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2">
                            <span className="text-emerald-600 mt-0.5">
                              <FiCheck size={14} />
                            </span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Visitor Tip */}
                    <div className="p-3.5 bg-amber-50/80 border border-amber-200/80 rounded-xl text-xs text-amber-900 flex items-start gap-2.5">
                      <span className="text-amber-600 font-bold shrink-0">💡 Travel Tip:</span>
                      <span className="font-normal">{dest.visitorTip}</span>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                    <div className="text-xs text-slate-500">
                      Featured in:{" "}
                      <span className="font-semibold text-slate-700">
                        {dest.includedInTours[0]}
                      </span>
                    </div>
                    <Link
                      to="/tours"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-50 hover:bg-brand-100 text-brand-700 text-xs font-bold rounded-xl transition border border-brand-200"
                    >
                      <span>View Tour Itinerary</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>

        {/* Practical Visitor Essentials */}
        <div className="mt-16 bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
              Essential Travel Knowledge
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              Preparing for Your Visit to Addis Ababa
            </h2>
            <p className="text-sm text-slate-600 mt-2 font-normal">
              Useful tips curated by Delight Tour to ensure your stay is comfortable, respectful, and safe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-brand-600 font-bold text-lg mb-2">🏔️ High Altitude (2,355m+)</div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Addis Ababa is the fourth-highest capital city in the world. Drink plenty of bottled mineral water, take your first day at a relaxed pace, and avoid strenuous hill sprints immediately after arrival.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-brand-600 font-bold text-lg mb-2">📸 Photography Etiquette</div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Always ask friendly permission before photographing local individuals, especially inside traditional markets. Military installations, airports, and government ministries strictly prohibit photography.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-brand-600 font-bold text-lg mb-2">👗 Respectful Church Attire</div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                When entering Ethiopian Orthodox churches and cathedrals, modest dress covering shoulders and knees is customary. Shoes are removed at the portal. Traditional white cotton Netela wraps are provided by your guide.
              </p>
            </div>
          </div>
        </div>

        {/* Custom Itinerary CTA */}
        <div className="mt-12 bg-gradient-to-r from-brand-700 to-emerald-800 rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg">
          <div className="max-w-xl">
            <span className="text-xs uppercase font-bold tracking-widest text-emerald-200">
              Personalized City Itineraries
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold mt-1">
              Want to Combine These Sites Into a Private Day?
            </h3>
            <p className="mt-2 text-sm text-emerald-100 font-normal leading-relaxed">
              We arrange customized timing, dedicated private vehicles, licensed multilingual historians, and hotel pickups for families, solo travelers, and delegations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href={`${MOCK_CONTACT.whatsappUrl}?text=${encodeURIComponent(
                "Hello Delight Tour! I'd like to plan a custom sightseeing itinerary in Addis Ababa."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm shadow-md transition"
            >
              <FaWhatsapp size={18} />
              <span>Chat on WhatsApp</span>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-white text-slate-900 hover:bg-slate-100 font-bold text-sm shadow-md transition"
            >
              Contact Booking Desk
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
