import { galleryImages } from "@/data/gallery";

function img(id: string) {
  const image = galleryImages.find((image) => image.id === id);
  if (!image) throw new Error(`Unknown gallery image id: ${id}`);
  return { src: image.src, alt: image.alt };
}

// Best-of Sri Lanka destinations, mapped to real gallery photos.
// Shared between the homepage DestinationsCarousel and the /about-sri-lanka page.
export const destinationInfo = [
  {
    id: "g-073-couple-sigiriya-rock-fortress-view",
    slug: "sigiriya-rock-fortress",
    name: "Sigiriya Rock Fortress",
    summary:
      "Climb the ancient rock fortress rising from the jungle, past 5th-century frescoes, to a summit with sweeping views across the plains.",
    description:
      "Rising 200 metres above the surrounding jungle, Sigiriya is one of Sri Lanka's most iconic sights and a UNESCO World Heritage Site. King Kashyapa built his royal citadel on this sheer rock outcrop in the 5th century, and what remains today is remarkable: water gardens at the base, a gallery of ancient frescoes halfway up, mirror walls polished enough to still reflect light, and the giant carved lion's paws that give the fortress its name — Sigiriya, or Lion Rock. The final staircase to the summit is steep and exposed, but the reward is a 360-degree view over the Cultural Triangle's forests and reservoirs that makes the climb one of the most memorable mornings of any Sri Lanka itinerary.",
    bestTime: "Jan – Mar",
    weather: "Hot & humid, 26–32°C",
    essentials: "Sun hat, water, sturdy shoes for the climb",
    history: [
      "Sigiriya's story begins in the 5th century CE, when King Kashyapa I seized the throne after deposing — and, according to the ancient Mahavamsa chronicle, killing — his father, King Dhatusena. Fearing revenge from his half-brother Moggallana, the rightful heir who had fled to India, Kashyapa abandoned the traditional capital of Anuradhapura and built an entirely new fortified city on and around this isolated granite outcrop.",
      "For around eighteen years Sigiriya functioned as a self-contained royal citadel, complete with moats, ramparts, landscaped water gardens and a summit palace. When Moggallana finally returned with an army in 495 CE, Kashyapa rode out to meet him on the plains below rather than defend the fortress — his forces reportedly faltered, and he took his own life. Moggallana returned the capital to Anuradhapura, and Sigiriya was handed over to Buddhist monks, who used the surrounding caves as a monastery until around the 14th century before the site was gradually reclaimed by jungle.",
      "Sigiriya was rediscovered by British surveyors in 1831 and has been under archaeological excavation since the late 19th century. It was inscribed as a UNESCO World Heritage Site in 1982, recognised as much for its ancient urban planning and hydraulic engineering as for its artwork and dramatic setting.",
    ],
    funFacts: [
      "Of an estimated 500 frescoes that once covered a section of the rock face, only around 18–21 survive today.",
      "The polished 'Mirror Wall' below the frescoes is covered in graffiti verses left by visitors as far back as the 8th century — some of the oldest surviving Sinhala poetry.",
      "The giant carved lion's paws at the base of the final staircase are all that remain of a colossal lion statue whose head has never been found — Sigiriya, or 'lion rock', takes its name from it.",
    ],
    images: [
      img("g-037-man-sigiriya-rock-viewpoint"),
      img("g-111-friends-sigiriya-rock-viewpoint-selfie"),
      img("g-080-group-sigiriya-rock-fortress-lawn"),
      img("g-woman-sigiriya-rock-ruins-portrait"),
    ],
  },
  {
    id: "g-hills-nine-arches",
    slug: "nine-arches-bridge-ella",
    name: "Nine Arches Bridge, Ella",
    summary:
      "Watch the blue train wind across this colonial-era viaduct, framed by mist and jungle in the cool hills above Ella.",
    description:
      "Built entirely from stone, brick and cement without a single piece of steel — the story goes that construction stalled during World War I when the steel shipment never arrived, so local builders improvised — the Nine Arches Bridge is one of the finest examples of colonial-era railway engineering in Sri Lanka. Set among tea plantations and jungle canopy just outside Ella, the viaduct is at its most photogenic when the blue-liveried train crosses it, usually a couple of times a day. Arrive early to find a good vantage point on the surrounding hillside paths, and stay for the walk down into Ella town for a coffee overlooking the valley.",
    bestTime: "Dec – Mar",
    weather: "Mild & misty, 15–25°C",
    essentials: "Light jacket, camera, check the train times",
    history: [
      "The Nine Arches Bridge was built in 1921 as part of the British-era railway line linking Kandy to Badulla through Sri Lanka's hill country, a project that took British and local engineers years to complete through some of the island's steepest terrain.",
      "Local tradition holds that construction stalled when the steel earmarked for the bridge was diverted to the war effort during the First World War, leaving the local contractor, P. K. Appuhamy, to redesign the structure using only stone, brick and cement. Whether or not the wartime shortage is the full story, the finished bridge — nine graceful arches rising around 24 metres above the valley floor — remains standing today without a single piece of structural steel, a point of pride in Sri Lankan railway engineering.",
      "The line still carries daily passenger trains, and the bridge has become one of the most photographed pieces of railway infrastructure in Asia, especially when the blue-liveried train crosses it against the surrounding tea plantations and jungle.",
    ],
    funFacts: [
      "The bridge spans roughly 91 metres and rises about 24 metres above the ravine below.",
      "It was built without any steel reinforcement — a rarity for a viaduct of its size and age.",
      "The Kandy–Badulla line it carries took the British over 15 years to build because of the terrain.",
    ],
    images: [
      img("g-146-guide-boy-nine-arches-bridge"),
      img("g-167-family-nine-arches-bridge-viewpoint"),
      img("g-woman-nine-arches-bridge-portrait"),
      img("g-woman-nine-arches-bridge-railway-track"),
    ],
  },
  {
    id: "g-misty-tea-plantation-hillside",
    slug: "tea-country-nuwara-eliya",
    name: "Tea Country, Nuwara Eliya",
    summary:
      "Walk between endless rows of tea bushes across misty highland slopes, where the world's finest Ceylon tea is hand-picked daily.",
    description:
      "Nicknamed \"Little England\" by British colonists for its cool climate, rolling hills and Tudor-style architecture, Nuwara Eliya sits at the heart of Sri Lanka's tea country. The surrounding hillsides are covered in emerald-green tea estates, many still hand-picked by workers who carry the same wicker baskets their families have used for generations. A visit to a working tea factory — Labookellie is the most accessible — walks you through withering, rolling, fermenting and drying before you sample a fresh cup at source. Between estates, expect winding roads, waterfalls, strawberry farms and a noticeably cooler climate than the rest of the island.",
    bestTime: "Jan – Mar",
    weather: "Cool, 10–20°C, chilly nights",
    essentials: "Warm layers, comfortable walking shoes",
    history: [
      "Nuwara Eliya was founded by British colonists in the 1820s and 1830s as a hill station and sanatorium, prized for a climate cool enough to grow English vegetables and, briefly, coffee. When a devastating fungal blight wiped out Ceylon's coffee industry in the 1870s, planters — led by pioneers like James Taylor, who opened the island's first commercial tea estate at Loolecondera in 1867 — replanted the hillsides with tea instead.",
      "The gamble paid off. By the early 20th century, Ceylon tea had become one of the world's most recognised brands, and the hill country around Nuwara Eliya, with its cool air and misty slopes, proved ideal for high-grown tea prized for its delicate flavour. Much of the picking and processing work was, and still is, done by Tamil communities whose ancestors were brought from South India as indentured labour during the colonial tea boom — a history that remains part of the region's social fabric today.",
      "Nuwara Eliya's Tudor-style post office, racecourse and golf club, all built by British planters seeking a slice of home in the tropics, are why the town is still nicknamed 'Little England'.",
    ],
    funFacts: [
      "Sri Lanka is one of the world's largest tea exporters, and Ceylon Tea's lion-logo certification mark guarantees the tea was grown and packed entirely on the island.",
      "Nuwara Eliya sits at around 1,868 metres above sea level, making it one of the coolest inhabited towns in Sri Lanka.",
      "Tea here is still hand-picked — only the top two leaves and a bud from each shoot are taken, exactly as it was over 150 years ago.",
    ],
    images: [
      img("g-050-tea-plantation-hills-rows"),
      img("g-059-woman-tea-plantation-picking-leaves"),
      img("g-089-couple-labookellie-tea-plantation-view"),
      img("g-171-couple-labookellie-tea-plantation-sign"),
    ],
  },
  {
    id: "g-165-leopard-tree-branch-dangling-legs",
    slug: "yala-national-park",
    name: "Yala National Park",
    summary:
      "Track leopards, elephants and exotic birds on an open jeep safari through Sri Lanka's most rewarding wildlife national park.",
    description:
      "Yala is Sri Lanka's most visited national park, and for good reason — it holds one of the highest densities of leopards anywhere in the world, alongside elephants, sloth bears, crocodiles and over 200 recorded bird species. Mornings and late afternoons are the best times to be out, when the heat drops and animals move to open ground and waterholes. Game drives are done in open-sided 4x4 jeeps with an experienced tracker, and while leopard sightings are never guaranteed, Yala's Block 1 delivers them more consistently than almost anywhere else in Asia. Beyond the wildlife, the park's landscape shifts from dry scrub jungle to lagoons and rocky outcrops, with ancient Buddhist ruins scattered throughout.",
    bestTime: "Feb – Jun",
    weather: "Hot & dry, 27–33°C",
    essentials: "Binoculars, neutral clothing, sun protection",
    history: [
      "Yala was declared a wildlife sanctuary by the British colonial government in 1900 and upgraded to a national park in 1938, making it one of the oldest and best-established protected areas in Sri Lanka. It was originally set aside as a hunting ground for colonial and local elite before conservation took over as its primary purpose.",
      "Long before it was a national park, the area held religious significance — the ruins of the Sithulpahuwa monastery within Yala's boundaries date back to the 2nd century BCE and are believed to have once housed thousands of Buddhist monks, drawn to its remote, meditative setting.",
      "Today Yala is best known for having one of the highest densities of leopards recorded anywhere in the world, a distinction that has made it Sri Lanka's most visited national park and a benchmark destination for wildlife photographers.",
    ],
    funFacts: [
      "Yala is split into five blocks; almost all safaris run in Block 1, which holds the highest concentration of wildlife.",
      "The Sri Lankan leopard (Panthera pardus kotiya) is a subspecies found only on the island.",
      "Beyond leopards, Yala shelters elephants, sloth bears, crocodiles and over 215 recorded bird species.",
    ],
    images: [
      img("g-048-leopard-resting-tree-branch"),
      img("g-083-leopard-sleeping-tree-branch"),
      img("g-men-bathing-elephants-river"),
      img("g-137-sambar-deer-grazing-grassland"),
    ],
  },
  {
    id: "g-fishing-boats-beach-sunset",
    slug: "southern-coast-beaches",
    name: "Southern Coast Beaches",
    summary:
      "Relax on palm-fringed golden sand, surf gentle swells, and watch fishing boats return each evening along the southern coastline.",
    description:
      "From the surf breaks of Weligama and Midigama to the quieter sands around Tangalle and Dickwella, the southern coast is where most Sri Lanka itineraries wind down. Palm-fringed beaches, warm turquoise water and laid-back beach towns make it easy to fill a few days with nothing more ambitious than surf lessons, whale watching out of Mirissa, and watching the fishing fleet come in at sunset. Galle Fort — a walled, colonial-era old town of boutique cafes and ramparts overlooking the ocean — makes a good half-day stop between beach time, and the coast road connects everything by a scenic, easy drive.",
    bestTime: "Nov – Apr",
    weather: "Warm, 27–31°C",
    essentials: "Sunscreen, swimwear, light clothing",
    history: [
      "The southern coast's defining landmark, Galle Fort, was first built by the Portuguese in 1588 and then massively expanded by the Dutch after they took control in 1649, turning it into the finest surviving example of a European-built fortified city in Asia. The British held it after 1796, but largely preserved the Dutch layout — cobbled streets, a working lighthouse and colonial-era villas that still stand within the ramparts today.",
      "Beyond the fort, the string of fishing and farming villages along this coast — Weligama, Mirissa, Tangalle, Dickwella — grew slowly around small-scale fishing and coconut cultivation for centuries before surfing and beach tourism arrived from the 1970s onward.",
      "The region was hit hard by the 2004 Indian Ocean tsunami; the decades since have seen extensive rebuilding, and many communities along this stretch now depend heavily on the tourism that has returned.",
    ],
    funFacts: [
      "Galle Fort was named a UNESCO World Heritage Site in 1988 for being the best-preserved example of a fortified city built by Europeans in South Asia.",
      "Blue whales — the largest animal on Earth — pass close to Mirissa's coast between November and April, making it one of the most reliable whale-watching spots in the world.",
      "Weligama's gentle, sandy-bottomed bay has made it one of Asia's most popular places to learn to surf.",
    ],
    images: [
      img("g-golden-sand-beach-rocky-shoreline"),
      img("g-palm-fringed-turquoise-bay-coast"),
      img("g-turquoise-bay-palm-tree-viewpoint"),
      img("g-surfers-sunset-ocean-silhouette"),
    ],
  },
  {
    id: "g-055-family-polonnaruwa-ruins-palace",
    slug: "polonnaruwa-ancient-city",
    name: "Polonnaruwa Ancient City",
    summary:
      "Cycle between 12th-century royal ruins, carved Buddha statues and ancient reservoirs across Sri Lanka's best-preserved medieval capital city.",
    description:
      "Sri Lanka's second ancient capital, Polonnaruwa flourished in the 11th and 12th centuries under King Parakramabahu I, and its ruins are the best-preserved of the island's ancient cities. The archaeological park is spread out and flat, which makes it ideal to explore by bicycle — pedalling between the royal palace's seven-storey remains, the intricately carved Vatadage relic house, and the Gal Vihara's four monumental Buddha statues cut directly into a single granite outcrop. The scale of the ancient reservoir, Parakrama Samudra, is a reminder of the sophisticated irrigation engineering that supported the city more than 800 years ago.",
    bestTime: "May – Sep",
    weather: "Hot, 28–33°C",
    essentials: "Modest dress, hat, rent a bike for the site",
    history: [
      "Polonnaruwa became Sri Lanka's second great ancient capital after repeated South Indian invasions made Anuradhapura difficult to defend, with kings ruling from here between roughly the 11th and 13th centuries. The city reached its peak under King Parakramabahu I (1153–1186), remembered as one of the island's greatest builders, and under King Nissanka Malla, who followed him.",
      "Parakramabahu I is best known for a vast irrigation programme, crowned by the reservoir now called Parakrama Samudra — 'the Sea of Parakrama' — an engineering feat that still irrigates farmland today. He is credited with the philosophy, recorded in the island's chronicles, that not a single drop of rainwater should be allowed to reach the ocean without first being put to use for people.",
      "Polonnaruwa's decline followed further invasions and the shift of political power elsewhere in the 13th century; the city was gradually abandoned and swallowed by jungle for centuries before it was excavated and restored, and it was inscribed as a UNESCO World Heritage Site in 1982.",
    ],
    funFacts: [
      "The four Buddha statues at Gal Vihara were carved directly into a single granite outcrop in the 12th century and are considered the finest surviving example of ancient Sinhalese rock-carving.",
      "Parakrama Samudra, the ancient reservoir built under Parakramabahu I, still irrigates rice paddies in the region more than 800 years later.",
      "Because the ruins are spread across a flat, open site, cycling is the most popular way to explore Polonnaruwa.",
    ],
    images: [
      img("g-polonnaruwa-ancient-staircase-moonstone"),
      img("g-polonnaruwa-vatadage-buddha-statue"),
      img("g-family-polonnaruwa-royal-palace-ruins"),
    ],
  },
  {
    id: "g-072-temple-tooth-relic-kandy",
    slug: "temple-of-the-tooth-kandy",
    name: "Temple of the Tooth, Kandy",
    summary:
      "Visit Kandy's sacred temple housing Buddha's tooth relic, where drummers and worshippers gather for evening rituals each day.",
    description:
      "Sri Dalada Maligawa, the Temple of the Sacred Tooth Relic, is one of the most important Buddhist pilgrimage sites in the world, said to house a tooth relic of the Buddha himself brought to Sri Lanka in the 4th century. Set on the shore of Kandy Lake in the last capital of the Sinhalese kings, the temple complex comes alive during the thrice-daily puja rituals, when drummers and horn players lead a ceremonial procession to the inner shrine. The relic chamber itself is rarely opened to view, but the atmosphere, architecture and devotion on display make a visit worthwhile any time of year — especially so during the Kandy Esala Perahera festival each July or August.",
    bestTime: "Year-round",
    weather: "Mild, 20–28°C",
    essentials: "Shoulders/knees covered, shoes off inside",
    history: [
      "According to tradition, the tooth relic housed at Sri Dalada Maligawa was smuggled out of India in the 4th century CE, hidden in the hair of a princess named Hemamala, to protect it from destruction during political unrest in her homeland. It has been enshrined in Sri Lanka ever since, moving between capitals as the seat of power shifted, before settling in Kandy when the city became the last capital of the island's Sinhalese kings.",
      "For centuries, possession of the tooth relic was considered central to the legitimacy of Sri Lankan kingship — ancient chronicles record the belief that whoever held the relic held the right to rule the island, and successive capitals built temples to house it as a symbol of sovereignty as much as of faith.",
      "Kandy itself held out as the last independent Sinhalese kingdom until it fell to the British in 1815, ending over two thousand years of local monarchy on the island. The temple and the old royal palace complex around it were inscribed as part of the Sacred City of Kandy UNESCO World Heritage Site in 1988.",
    ],
    funFacts: [
      "The relic chamber is rarely opened to public view — most visitors witness the ritual devotion around it rather than the tooth itself.",
      "The Kandy Esala Perahera, held each July or August, is one of Asia's oldest and grandest Buddhist festivals, with decorated elephants parading through the streets in honour of the relic.",
      "Puja rituals are held three times a day, accompanied by traditional Kandyan drumming that can be heard throughout the temple complex.",
    ],
    images: [
      img("g-temple-tooth-relic-golden-buddha-shrine"),
      img("g-046-friends-temple-flower-offering-kandy"),
    ],
  },
  {
    id: "g-119-family-stilt-fishing-poles-beach",
    slug: "stilt-fishermen-south-coast",
    name: "Stilt Fishermen, South Coast",
    summary:
      "Watch fishermen balance on wooden poles above the surf, an iconic and dwindling tradition unique to Sri Lanka's south coast.",
    description:
      "Perched on a single crossbar driven into the seabed just offshore, stilt fishermen casting their lines into the surf are one of the most photographed sights on Sri Lanka's south coast. The technique dates back to the food shortages of the 1940s, when fishermen began fishing from the wreckage of World War II ships and, later, purpose-built poles, to reach fish beyond the reef without competing for space on crowded rocks. Genuine full-time stilt fishing has become rare — many of the fishermen you'll see today are demonstrating the tradition for a small tip rather than fishing commercially — but it remains a striking, uniquely Sri Lankan scene best caught in the golden light of early morning or late afternoon around Koggala and Ahangama.",
    bestTime: "Nov – Apr",
    weather: "Warm, 27–31°C",
    essentials: "Camera, sun protection, a small tip for photos",
    history: [
      "Stilt fishing is a relatively recent tradition, generally traced back to the years during and after the Second World War, when food shortages and overcrowded fishing spots pushed local fishermen to improvise. Early fishermen are said to have used the wreckage of ships and downed aircraft as makeshift perches above the reef before purpose-built wooden poles took over.",
      "Perched on a single crossbar driven into the seabed, a stilt fisherman casts into the surf from just above the waterline, reaching fish beyond the reef without competing with others for space on the rocks — a simple, distinctly local solution to a very practical problem.",
      "The 2004 tsunami destroyed many of the original stilts and displaced fishing communities along this coast, and declining fish stocks since have made stilt fishing far less viable as a full-time livelihood. Today, most of the fishermen visitors photograph around Koggala and Ahangama are demonstrating the tradition for tips rather than fishing to sell their catch — a shift that keeps a fading practice visible, even as its original purpose has largely disappeared.",
    ],
    funFacts: [
      "Genuine commercial stilt fishing has become rare — most scenes visitors see today are posed for photographs in exchange for a small tip.",
      "The best light for photographs is early morning or late afternoon, when the low sun catches the surf and silhouettes the fishermen on their poles.",
      "Each stilt, known locally as a 'petta', is typically shared by the same small group of fishermen, who take turns on it throughout the day.",
    ],
    images: [
      img("g-015-couple-beach-stilt-fisherman"),
      img("g-020-family-stilt-fishing-posts-beach"),
      img("g-087-children-stilt-fishing-poles-beach"),
      img("g-163-family-stilt-fisherman-rough-surf"),
    ],
  },
  {
    id: "g-159-couple-worlds-end-sign-horton-plains",
    slug: "worlds-end-horton-plains",
    name: "World's End, Horton Plains",
    summary:
      "Hike across misty cloud-forest plains to a sheer 870-metre escarpment drop, with views across the southern plains on a clear morning.",
    description:
      "Horton Plains National Park sits high on Sri Lanka's central plateau, a landscape of montane grassland and cloud forest that feels a world away from the tropical coast. The main draw is the 9km loop trail out to World's End, a sheer escarpment that drops 870 metres to the plains below — on a clear morning the views stretch as far as the south coast, though cloud typically rolls in by mid-morning, which is why an early start is essential. Along the way the trail passes Baker's Falls and open grassland where sambar deer graze in the cool highland air, a noticeably different climate and ecosystem from anywhere else on the island.",
    bestTime: "Jan – Mar",
    weather: "Cold & misty, 5–15°C",
    essentials: "Warm jacket, start before 7am for clear views",
    history: [
      "Horton Plains takes its English name from Sir Robert Wilmot-Horton, the British governor of Ceylon in the 1830s, though the plateau had long been known to local communities before colonial surveyors mapped it. Its cool, wet, high-altitude climate made it unsuitable for the tea and coffee plantations that transformed much of the surrounding hill country, which is a large part of why its cloud forest and grassland have survived largely intact.",
      "The plains sit at the heart of Sri Lanka's central highlands and form the watershed for three of the island's major rivers — the Mahaweli, Kelani and Walawe — making the ecosystem here critical to water supply far beyond the park itself. The area was declared a national park in 1988 and, together with the surrounding highlands, was inscribed as a UNESCO World Heritage Site in 2010 for its exceptional biodiversity and endemic species.",
      "World's End itself, the sheer escarpment at the edge of the plateau, has long been a place of local legend as much as a hiking destination — a landscape that seems to end abruptly in mid-air, with the plains falling away toward the lowlands nearly a kilometre below.",
    ],
    funFacts: [
      "The escarpment at World's End drops roughly 870 metres in a near-vertical cliff face.",
      "Horton Plains is one of the few places in Sri Lanka cold enough for ground frost to form on clear mornings.",
      "The plateau is the source of three of Sri Lanka's most important rivers, feeding water systems used across much of the island.",
    ],
    images: [
      img("g-051-couple-hiking-forest-path-horton-plains"),
      img("g-129-couple-horton-plains-foggy-entrance-sign"),
      img("g-horton-plains-grassland-mountain-view"),
      img("g-horton-plains-trail-info-board"),
    ],
  },
  {
    id: "g-145-guide-family-boat-lotus-lagoon",
    slug: "madu-river-lotus-lagoon",
    name: "Madu River Lotus Lagoon",
    summary:
      "Drift by boat through mangrove channels and a pink lotus-covered lagoon, spotting cinnamon islands and water monitors along the way.",
    description:
      "The Madu River estuary, near Balapitiya on the south coast, is a maze of mangrove-lined channels, small islands and open lagoon that makes for one of Sri Lanka's most relaxing half-day excursions. Traditional boat safaris weave between more than 60 islands, stopping at a cinnamon-growing island to see the spice processed by hand, and often at a small local family's home for tea. The highlight for many is drifting through a wide lagoon carpeted in pink lotus flowers, with kingfishers and water monitors along the banks and, if you're lucky, a fish eagle overhead — a calm, scenic contrast to the coast's beaches just a few minutes away.",
    bestTime: "Dec – Apr",
    weather: "Warm & humid, 27–31°C",
    essentials: "Sun hat, camera, insect repellent",
    history: [
      "The Madu Ganga estuary has supported fishing and small-scale agriculture for the surrounding villages for centuries, its maze of channels and roughly 64 islands forming one of the largest remaining mangrove ecosystems on Sri Lanka's coast. In recognition of its ecological importance, it was designated a Ramsar Wetland of International Importance in 2003.",
      "Cinnamon has been grown and processed on the estuary's islands for generations, part of a trade that stretches back much further — Ceylon cinnamon was one of the main reasons European powers fought over control of Sri Lanka's coastline from the 16th century onward, and the spice is still grown and hand-processed here using largely traditional methods.",
      "Kothduwa Rajamaha Vihara, a small Buddhist temple on one of the estuary's islands, has drawn pilgrims by boat for generations and remains a quiet counterpoint to the wildlife-watching that now brings most visitors to the Madu River.",
    ],
    funFacts: [
      "The Madu River wetland supports more than 300 plant species and is an important habitat for numerous resident and migratory birds.",
      "Sri Lanka was historically the world's main source of true cinnamon, and cinnamon peeling on Madu Ganga's Cinnamon Island is still done entirely by hand.",
      "The estuary contains around 64 islands, ranging from small mangrove outcrops to islands large enough to farm and live on.",
    ],
    images: [
      img("g-086-family-flag-lotus-flowers-boat"),
      img("g-147-women-madu-boat-safari-sign"),
      img("g-151-guide-canoe-lotus-lagoon-thumbsup"),
      img("g-166-couple-lotus-leaf-hats-wetland"),
    ],
  },
  {
    id: "g-169-man-pidurangala-rock-sigiriya-jump",
    slug: "pidurangala-rock",
    name: "Pidurangala Rock",
    summary:
      "Climb the boulder-strewn twin of Sigiriya for the best sunrise view of the Lion Rock itself, without the crowds or the ticket queue.",
    description:
      "Just across the plain from Sigiriya, Pidurangala is a quieter, cheaper and — for many visitors — more rewarding climb. King Kashyapa is said to have moved the resident monks here when he built his fortress on Sigiriya, and their cave temple still sits partway up the rock. The path to the top is a scramble over boulders rather than a formal staircase, steeper in places and requiring a bit more agility, but it delivers what Sigiriya itself can't: an unobstructed view of the Lion Rock rising out of the jungle, especially spectacular at sunrise before the day's heat and crowds arrive.",
    bestTime: "Jan – Mar",
    weather: "Hot & humid, 26–32°C",
    essentials: "Head torch for the pre-dawn climb, sturdy shoes",
    history: [
      "Pidurangala's history is tied directly to Sigiriya's. According to the ancient chronicles, when King Kashyapa I built his fortress on Sigiriya rock in the 5th century, he relocated the Buddhist monks already living there to Pidurangala, funding the construction of a new monastery on this neighbouring outcrop as compensation for displacing them.",
      "The monastery has been in periodic use ever since, and the cave temple partway up the rock, along with a large reclining Buddha statue rebuilt in brick after the original was damaged, still functions as an active place of worship today rather than purely a historical site.",
      "Because it was a monastic site rather than a royal citadel, Pidurangala never received the same level of formal excavation and restoration as Sigiriya — the climb remains a rougher scramble over boulders, which is part of why it has stayed relatively uncrowded even as its more famous neighbour draws large crowds daily.",
    ],
    funFacts: [
      "Pidurangala offers what Sigiriya itself cannot: a full, unobstructed view of the Lion Rock rising out of the jungle.",
      "The reclining Buddha statue near the summit is around 12.5 metres long and was reconstructed in brick after the original was damaged.",
      "Sunrise is the most popular time to climb, both for cooler temperatures and for the light on Sigiriya across the plain.",
    ],
    images: [
      img("g-022-family-flag-sigiriya-lake"),
      img("g-woman-sigiriya-rock-garden-view"),
      img("g-couple-sigiriya-rock-field-portrait"),
    ],
  },
] as const;

export const destinations = destinationInfo.map((info) => ({
  ...galleryImages.find((image) => image.id === info.id)!,
  ...info,
}));

export type Destination = (typeof destinations)[number];

export function getDestinationBySlug(slug: string) {
  return destinations.find((destination) => destination.slug === slug);
}

export function relatedDestinations(slug: string, count = 3) {
  const others = destinations.filter((destination) => destination.slug !== slug);
  return others.slice(0, count);
}
