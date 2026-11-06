export interface TattooStyle {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  featuredInHome?: boolean;
  techniques: string[];
  recommendedPlacement: string;
}

export interface Artist {
  id: string;
  name: string;
  role: string;
  specialization: string;
  bio: string;
  fullBio: string;
  portrait: string;
  experienceYears: number;
  featuredWorks: string[];
  availableDays: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  style: string;
  artist: string;
  artistId: string;
  image: string;
  placement: string;
  sessionTime: string;
  tags: string[];
  isFeatured?: boolean;
}

export interface Testimonial {
  id: string;
  clientName: string;
  location: string;
  rating: number;
  review: string;
  tattooType: string;
  artistName: string;
  date: string;
}

export interface FAQItem {
  id: string;
  category: 'Booking' | 'Pricing' | 'Preparation' | 'Aftercare' | 'General';
  question: string;
  answer: string;
}

export const STUDIO_INFO = {
  name: 'ATELIER NOIR',
  subName: 'Bespoke Fine Art & Tattoo Atelier',
  address: '447 Mercer Street, SoHo, New York, NY 10013',
  phone: '+1 (212) 555-0198',
  email: 'concierge@ateliernoir-studio.com',
  hours: {
    tueFri: '11:00 AM – 8:00 PM',
    satSun: '12:00 PM – 7:00 PM',
    mon: 'Private Consultations Only',
  },
  socials: {
    instagram: '@ateliernoir.tattoo',
    vogueFeature: 'Featured in Harper\'s Bazaar & GQ Style',
  },
};

export const POPULAR_STYLES: TattooStyle[] = [
  {
    id: 'black-and-grey',
    name: 'Black & Grey',
    shortDesc: 'Rich tonal gradients, deep carbon pigments, and masterful contrast capturing sculptural form and lifelike depth.',
    fullDesc: 'Rooted in classic fine art chiaroscuro, our Black & Grey approach prioritizes smooth gradient washes and clean needle saturation. By balancing pure skin breaks with intense black values, each composition yields lasting definition that holds its crisp elegance over decades.',
    image: '/src/assets/images/tattoo_realism_portrait_1793799071055.jpg',
    featuredInHome: true,
    techniques: ['Multi-needle wash shading', 'Opaque grey layering', 'High-contrast skin breaks'],
    recommendedPlacement: 'Forearm, Outer Bicep, Calf, Back',
  },
  {
    id: 'realism',
    name: 'Realism',
    shortDesc: 'Photographic precision and delicate micro-needle shading reproducing portraits, classical marble, and botanical life.',
    fullDesc: 'Fine-tuned micro-needle groupings and precision lighting studies allow our realism specialists to translate marble sculpture, cinematic portraiture, and natural forms into permanent skin tapestries with photographic nuance.',
    image: '/src/assets/images/hero_cinematic_tattoo_1793799069695.jpg',
    featuredInHome: true,
    techniques: ['Micro-magnum blending', 'Classical anatomical proportion', 'Photometric depth'],
    recommendedPlacement: 'Shoulder, Upper Arm, Thigh, Backpiece',
  },
  {
    id: 'fine-line',
    name: 'Fine Line',
    shortDesc: 'Single-needle precision yielding ethereal flora, subtle typography, and celestial geometry that age gracefully.',
    fullDesc: 'Executing fine line tattooing requires surgical needle discipline and gentle skin tension. We calibrate our rotary pen stroke depths to preserve crisp, hairline legibility that heals softly without ink blowouts.',
    image: '/src/assets/images/tattoo_fineline_botanical_1793799072123.jpg',
    featuredInHome: true,
    techniques: ['Single-needle (1RL/3RL)', 'Stipple graduation', 'Geometric alignment'],
    recommendedPlacement: 'Inner Wrist, Forearm, Ribcage, Collarbone',
  },
  {
    id: 'blackwork',
    name: 'Blackwork',
    shortDesc: 'Bold saturated solid blacks, sacred geometry, and intricate dotwork patterns shaped to body anatomy.',
    fullDesc: 'Contemporary blackwork celebrates absolute saturation and negative space. From hypnotic sacred mandalas to brutalist geometric panels, our blackwork is engineered to accentuate natural body contours.',
    image: '/src/assets/images/studio_atelier_interior_1793799069847.jpg',
    featuredInHome: true,
    techniques: ['Solid carbon packing', 'Sacred geometry layout', 'Hand-stipple dotwork'],
    recommendedPlacement: 'Full Sleeve, Chest Plate, Forearm, Shin',
  },
];

export const ALL_STYLES: TattooStyle[] = [
  ...POPULAR_STYLES,
  {
    id: 'neo-traditional',
    name: 'Neo Traditional',
    shortDesc: 'Vibrant illustrative energy blending classic bold outlines with contemporary muted palettes and dynamic perspective.',
    fullDesc: 'Honoring traditional American and European roots while expanding color theory into velvet blacks, terracotta, sage, and burnished gold. Rich decorative filigree and mythic fauna characterize our neo-traditional commissions.',
    image: '/src/assets/images/hero_cinematic_tattoo_1793799069695.jpg',
    techniques: ['Bold contour linework', 'Layered color transitions', 'Illustrative filigree'],
    recommendedPlacement: 'Thigh, Calves, Outer Forearm, Chest',
  },
  {
    id: 'japanese',
    name: 'Japanese (Irezumi)',
    shortDesc: 'Timeless mythological motifs, flowing waterbars, and dragons rendered with deep respect for classical composition.',
    fullDesc: 'Guided by traditional Ukiyo-e woodblock principles, our Japanese custom work integrates wind bars, waves, koi, and dragons that flow with natural muscle movements across large anatomical canvases.',
    image: '/src/assets/images/tattoo_realism_portrait_1793799071055.jpg',
    techniques: ['Mikiri backgrounding', 'Dynamic wave composition', 'Traditional motif balance'],
    recommendedPlacement: 'Bodysuit, Full Sleeve, Backpiece, Torso',
  },
  {
    id: 'custom-tattoos',
    name: 'Custom Tattoos',
    shortDesc: 'One-of-a-kind original compositions sketched from your unique narrative, anatomy, and creative vision.',
    fullDesc: 'We do not repeat flash sheets or copy other artists’ work. Every bespoke project starts with a private conceptual dialogue, body stencil mapping, and hand-drawn drafts customized exclusively for you.',
    image: '/src/assets/images/artist_master_portrait_1793799071792.jpg',
    techniques: ['Direct skin drafting', 'Anatomical flow mapping', 'Bespoke conceptual drafting'],
    recommendedPlacement: 'Any placement tailored to body contour',
  },
  {
    id: 'cover-up-tattoos',
    name: 'Cover-up & Rework',
    shortDesc: 'Strategic layering, tonal neutralization, and artistic transformation of existing tattoos into renewed statements.',
    fullDesc: 'Transforming an outdated or regrettable tattoo requires strategic mastery of dark values, texture distraction, and creative redirection. We engineer compositions where the old ink becomes invisible structural depth.',
    image: '/src/assets/images/studio_atelier_interior_1793799069847.jpg',
    techniques: ['Tonal neutralization', 'Optical camouflaging', 'Texture distraction'],
    recommendedPlacement: 'Existing tattoo placement site',
  },
];

export const ARTISTS: Artist[] = [
  {
    id: 'marcus-vance',
    name: 'Marcus Vance',
    role: 'Founder',
    specialization: 'Classical Realism & Dark Surrealism',
    bio: '14 years of fine art painting and tattooing experience, specializing in high-contrast classical realism, anatomical flow, and large-scale sleeve narratives.',
    fullBio: 'Trained at the Florence Academy of Art before dedicating his career to permanent skin art, Marcus brings Renaissance chiaroscuro and Baroque drama into modern tattooing. His work has received international acclaim for sculptural depth and ink longevity.',
    portrait: '/src/assets/images/artist_master_portrait_1793799071792.jpg',
    experienceYears: 14,
    featuredWorks: ['Classical Roman Marble Sleeve', 'Veiled Christ Chestpiece', 'Botanical Anatomical Sleeve'],
    availableDays: 'Tuesday, Thursday, Saturday',
  },
  {
    id: 'elena-rostova',
    name: 'Elena Rostova',
    role: 'Senior Artisan',
    specialization: 'Fine Line & Botanical Geometry',
    bio: 'Trained in architectural drafting and natural history illustration, Elena crafts single-needle compositions with ethereal precision and natural grace.',
    fullBio: 'Elena graduated from the Saint Petersburg State Academy of Art and Design. Her signature aesthetic harmonizes micro-botanical specimens, celestial orbits, and subtle geometric framework. Her work is celebrated for whisper-thin lines that retain sharpness over years.',
    portrait: '/src/assets/images/hero_cinematic_tattoo_1793799069695.jpg',
    experienceYears: 9,
    featuredWorks: ['Ethereal Fern & Moon Phase', 'Constellation Spine Piece', 'Delicate Peony Forearm'],
    availableDays: 'Wednesday, Friday, Sunday',
  },
  {
    id: 'kai-chen',
    name: 'Kai Chen',
    role: 'Senior Resident',
    specialization: 'Contemporary Blackwork & Dotwork',
    bio: 'Kai fuses ancient sacred geometry with brutalist symmetry and meticulous hand-stippled dotwork tailored strictly to the client’s muscle structure.',
    fullBio: 'With a background in computational geometry and printmaking, Kai builds large-scale patterns that warp and shift dynamically with body movement. Every dot is placed with meditative precision, creating gradients of optical density without mechanical harshness.',
    portrait: '/src/assets/images/studio_atelier_interior_1793799069847.jpg',
    experienceYears: 11,
    featuredWorks: ['Mandala Shoulder Cap', 'Geometric Torso Shield', 'Stippled Negative Space Sleeve'],
    availableDays: 'Tuesday, Wednesday, Saturday',
  },
  {
    id: 'aria-sterling',
    name: 'Aria Sterling',
    role: 'Resident Artist',
    specialization: 'Neo Traditional & Dark Illustrative',
    bio: 'Aria brings mythic folklore and natural history to life using velvety blacks, muted earth tones, and expressive, sculptural linework.',
    fullBio: 'Aria’s background in graphic novel illustration and copperplate etching lends her work distinct narrative depth. She excels in serpent motifs, avian figures, and ornate tarot-inspired storytelling with rich, moody saturation.',
    portrait: '/src/assets/images/tattoo_fineline_botanical_1793799072123.jpg',
    experienceYears: 7,
    featuredWorks: ['Ouroboros & Dagger', 'Raven & Wild Thistle', 'Muted Serpent Sternum'],
    availableDays: 'Thursday, Friday, Sunday',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'work-1',
    title: 'The Veiled Sculpture',
    style: 'Realism',
    artist: 'Marcus Vance',
    artistId: 'marcus-vance',
    image: '/src/assets/images/tattoo_realism_portrait_1793799071055.jpg',
    placement: 'Full Outer Arm & Shoulder',
    sessionTime: '18 Hours (3 Sessions)',
    tags: ['Realism', 'Black & Grey', 'Sculpture'],
    isFeatured: true,
  },
  {
    id: 'work-2',
    title: 'Celestial Flora & Solar Cycle',
    style: 'Fine Line',
    artist: 'Elena Rostova',
    artistId: 'elena-rostova',
    image: '/src/assets/images/tattoo_fineline_botanical_1793799072123.jpg',
    placement: 'Inner Forearm',
    sessionTime: '3.5 Hours',
    tags: ['Fine Line', 'Botanical', 'Celestial'],
    isFeatured: true,
  },
  {
    id: 'work-3',
    title: 'Baroque Floral Armor',
    style: 'Black & Grey',
    artist: 'Marcus Vance',
    artistId: 'marcus-vance',
    image: '/src/assets/images/hero_cinematic_tattoo_1793799069695.jpg',
    placement: 'Forearm to Bicep',
    sessionTime: '12 Hours (2 Sessions)',
    tags: ['Black & Grey', 'Realism', 'Sleeve'],
    isFeatured: true,
  },
  {
    id: 'work-4',
    title: 'Monolithic Sacred Mandala',
    style: 'Blackwork',
    artist: 'Kai Chen',
    artistId: 'kai-chen',
    image: '/src/assets/images/studio_atelier_interior_1793799069847.jpg',
    placement: 'Backpiece & Shoulder Span',
    sessionTime: '22 Hours (4 Sessions)',
    tags: ['Blackwork', 'Geometric', 'Dotwork'],
    isFeatured: false,
  },
  {
    id: 'work-5',
    title: 'The Mythic Serpent & Dagger',
    style: 'Neo Traditional',
    artist: 'Aria Sterling',
    artistId: 'aria-sterling',
    image: '/src/assets/images/artist_master_portrait_1793799071792.jpg',
    placement: 'Outer Thigh',
    sessionTime: '8 Hours',
    tags: ['Neo Traditional', 'Illustrative', 'Custom'],
    isFeatured: true,
  },
  {
    id: 'work-6',
    title: 'Anatomical Botanica',
    style: 'Fine Line',
    artist: 'Elena Rostova',
    artistId: 'elena-rostova',
    image: '/src/assets/images/tattoo_fineline_botanical_1793799072123.jpg',
    placement: 'Ribcage to Hip',
    sessionTime: '5 Hours',
    tags: ['Fine Line', 'Botanical', 'Custom'],
    isFeatured: false,
  },
  {
    id: 'work-7',
    title: 'Classical Marcus Aurelius Bust',
    style: 'Realism',
    artist: 'Marcus Vance',
    artistId: 'marcus-vance',
    image: '/src/assets/images/tattoo_realism_portrait_1793799071055.jpg',
    placement: 'Upper Arm Bicep',
    sessionTime: '9 Hours',
    tags: ['Realism', 'Black & Grey'],
    isFeatured: false,
  },
  {
    id: 'work-8',
    title: 'Japanese Great Wave & Dragon',
    style: 'Japanese',
    artist: 'Marcus Vance',
    artistId: 'marcus-vance',
    image: '/src/assets/images/hero_cinematic_tattoo_1793799069695.jpg',
    placement: 'Full Sleeve',
    sessionTime: '26 Hours (5 Sessions)',
    tags: ['Japanese', 'Custom', 'Sleeve'],
    isFeatured: false,
  },
  {
    id: 'work-9',
    title: 'Sacred Fibonacci Geometry',
    style: 'Blackwork',
    artist: 'Kai Chen',
    artistId: 'kai-chen',
    image: '/src/assets/images/studio_atelier_interior_1793799069847.jpg',
    placement: 'Forearm Wrap',
    sessionTime: '6.5 Hours',
    tags: ['Blackwork', 'Geometric'],
    isFeatured: false,
  },
];

export const WHY_CHOOSE_US = [
  {
    icon: 'ShieldCheck',
    title: 'Experienced Artists',
    description: 'Award-winning resident artisans with formal fine art degrees and over 40 collective years in bespoke tattoo craft.',
  },
  {
    icon: 'Sparkles',
    title: 'Personalized Designs',
    description: 'Every piece is drafted from original hand-sketches matched to your body contours. Zero repeated or mass-market flash.',
  },
  {
    icon: 'Sparkle',
    title: 'Hygiene & Safety',
    description: 'Medical autoclave sterilization, single-use surgical membrane needles, and certified organic vegan carbon pigments.',
  },
  {
    icon: 'Crown',
    title: 'Quality Workmanship',
    description: 'Engineered needle depth discipline ensuring crisp healing, minimal trauma, and lifetime artwork integrity.',
  },
];

export const TATTOO_PROCESS = [
  {
    step: '01',
    title: 'Share Your Idea',
    description: 'Submit your conceptual vision, placement preference, and visual references via our streamlined booking portal.',
  },
  {
    step: '02',
    title: 'Consultation',
    description: 'Collaborate one-on-one with your selected artist to develop custom sketches and refine proportional anatomy placement.',
  },
  {
    step: '03',
    title: 'Get Inked',
    description: 'Relax in our private, acoustic-treated studio suites with ergonomic seating and medical-grade sterile preparation.',
  },
  {
    step: '04',
    title: 'Dedicated Aftercare',
    description: 'Receive medical breathable barrier film, artisanal healing balm, and personalized check-in support through full heal.',
  },
];

export const REVIEWS: Testimonial[] = [
  {
    id: 'rev-1',
    clientName: 'Julian Sterling',
    location: 'New York, NY',
    rating: 5,
    review: 'Marcus executed a classical Roman realism sleeve that exceeded every expectation. The studio ambiance is more akin to an upscale gallery than a tattoo shop. Sterile, quiet, and masterclass craftsmanship.',
    tattooType: 'Classical Realism Sleeve',
    artistName: 'Marcus Vance',
    date: 'October 2026',
  },
  {
    id: 'rev-2',
    clientName: 'Sophia Lindqvist',
    location: 'Stockholm & Brooklyn',
    rating: 5,
    review: 'Elena’s single-needle linework is nothing short of surgical poetry. My botanical rib piece healed seamlessly in under ten days with zero ink fallout. The aftercare kit and guidance were unparalleled.',
    tattooType: 'Fine Line Botanical',
    artistName: 'Elena Rostova',
    date: 'September 2026',
  },
  {
    id: 'rev-3',
    clientName: 'David K. Morrison',
    location: 'Boston, MA',
    rating: 5,
    review: 'Kai’s geometric blackwork transformed an awkward old college tattoo into a powerful sacred geometric centerpiece. The negative space balance and dotwork gradients are immaculate.',
    tattooType: 'Blackwork Geometric Cover-up',
    artistName: 'Kai Chen',
    date: 'August 2026',
  },
];

export const FAQ_LIST: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Booking',
    question: 'How far in advance should I book my appointment?',
    answer: 'Our resident artists typically book 2 to 6 weeks in advance. For large-scale projects like full sleeves or backpieces, we recommend booking a preliminary consultation 1 to 2 months prior.',
  },
  {
    id: 'faq-2',
    category: 'Pricing',
    question: 'How is pricing structured at Atelier Noir?',
    answer: 'We charge either by the project or an hourly rate depending on the scope. Single-session pieces receive a fixed transparent quote after consultation. Multi-session sleeves and backpieces run on an hourly tier ranging from $200 to $300/hour depending on the artist.',
  },
  {
    id: 'faq-3',
    category: 'Pricing',
    question: 'What is the deposit policy?',
    answer: 'A non-refundable deposit ($100–$250 depending on project scale) is required to secure your appointment and reserve dedicated design drafting time. This deposit is fully credited toward the final cost of your tattoo.',
  },
  {
    id: 'faq-4',
    category: 'Preparation',
    question: 'How should I prepare for my tattoo session?',
    answer: 'Get a full night’s sleep, hydrate well for 48 hours prior, and eat a substantial meal 1–2 hours before arriving. Avoid alcohol, aspirin, and heavy caffeine for 24 hours. Wear comfortable, dark, loose-fitting clothing that allows easy access to the tattoo placement area.',
  },
  {
    id: 'faq-5',
    category: 'Aftercare',
    question: 'What aftercare products and procedures do you provide?',
    answer: 'Every client receives medical-grade breathable dermal barrier film applied immediately after the session, plus our studio’s organic botanical balm and a step-by-step healing calendar. You will also have direct concierge contact for questions during recovery.',
  },
  {
    id: 'faq-6',
    category: 'General',
    question: 'Can you rework or cover up an old tattoo?',
    answer: 'Yes. Our artists specialize in advanced tonal layering, negative space diversion, and camouflage techniques. During your consultation, we assess existing ink darkness and develop a bespoke composition that permanently transforms it.',
  },
  {
    id: 'faq-7',
    category: 'General',
    question: 'What are the age and ID requirements?',
    answer: 'Strictly 18 years of age or older. Valid government-issued photo identification (passport, driver\'s license, or state ID card) is legally required at check-in before any procedure. No exceptions.',
  },
];
