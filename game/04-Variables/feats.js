/*
	Key points
	series: "seriesName", //Will only show the first locked feat in a series to the player
	softLockable: true, //Will disable the unlocking of the feat if softmode is enabled
	pregnancyLockable: true, //Will disable the unlocking of the feat if certain pregnancy settings are too low
	hidden: true, //Will hide the feat at all times unless unlocked, best for feats for unreleased content
*/
setup.feats = {
	"Pocket Change": {
		title: "Pocket Change",
		desc: "Have £1,000.",
		difficulty: 1,
		series: "money",
		filter: ["All", "General"],
		softLockable: true,
	},
	"Money Maker": {
		title: "Money Maker",
		desc: "Have £10,000.",
		difficulty: 1,
		series: "money",
		filter: ["All", "General"],
		softLockable: true,
	},
	Tycoon: {
		title: "Tycoon",
		desc: "Have £100,000.",
		difficulty: 2,
		series: "money",
		filter: ["All", "General"],
		softLockable: true,
	},
	Millionaire: {
		title: "Millionaire",
		desc: "Have £1,000,000.",
		difficulty: 3,
		series: "money",
		filter: ["All", "General"],
		softLockable: true,
	},
	"It Belongs in a Museum": {
		title: "It Belongs in a Museum!",
		desc: "Find all the artefacts",
		difficulty: 3,
		series: "",
		filter: ["All", "General"],
		softLockable: true,
	},
	"Fully Covered": {
		title: "Fully Covered",
		desc: "Drenched in something other than water.",
		difficulty: 3,
		series: "",
		filter: ["All", "General"],
	},
	"Being a Boy": {
		title: "Being a Boy",
		desc: "Get to day 50 as a boy.",
		difficulty: 1,
		series: "",
		filter: ["All", "General"],
		softLockable: true,
	},
	"Being a Girl": {
		title: "Being a Girl",
		desc: "Get to day 50 as a girl.",
		difficulty: 1,
		series: "",
		filter: ["All", "General"],
		softLockable: true,
	},
	"Being a Hermaphrodite": {
		title: "Being a Hermaphrodite",
		desc: "Get to day 50 as a hermaphrodite.",
		difficulty: 1,
		series: "",
		filter: ["All", "General"],
		softLockable: true,
	},
	"Being an Orphan": {
		title: "Being an Orphan",
		desc: "Get to day 150.",
		difficulty: 2,
		series: "",
		filter: ["All", "General"],
		softLockable: true,
	},
	"Stressful Challenge": {
		title: "Stressful Challenge",
		desc: "Get to day 50 without passing out.",
		difficulty: 2,
		series: "challenge",
		filter: ["All", "General"],
		softLockable: true,
	},
	"Long Stressful Challenge": {
		title: "Long Stressful Challenge",
		desc: "Get to day 150 without passing out.",
		difficulty: 3,
		series: "challenge",
		filter: ["All", "General"],
		softLockable: true,
	},
	Billboard: {
		title: "Billboard",
		desc: "Wear an advert, and have it pay off.",
		difficulty: 1,
		series: "",
		filter: ["All", "General"],
	},
	"A Living Canvas": {
		title: "A Living Canvas",
		desc: "Ink on every part.",
		difficulty: 1,
		series: "",
		filter: ["All", "General"],
	},
	Farmhand: {
		title: "Farmhand",
		desc: "Help Alex expand the farm.",
		difficulty: 2,
		series: "alex",
		filter: ["All", "General"],
	},
	Farmer: {
		title: "Farmer",
		desc: "Return the farm to its former glory.",
		difficulty: 3,
		series: "alex",
		filter: ["All", "General"],
	},
	Cultivator: {
		title: "Cultivator",
		desc: "Claim every field at Alex's farm.",
		difficulty: 3,
		series: "alex",
		filter: ["All", "General"],
	},
	"The Rival Farm": {
		title: "The Rival Farm",
		desc: "Fully upgrade a farm expansion.",
		difficulty: 2,
		series: "farm",
		filter: ["All", "General"],
	},
	"The Rival Estate": {
		title: "The Rival Estate",
		desc: "Build all the farm expansions.",
		difficulty: 3,
		series: "farm",
		filter: ["All", "General"],
	},
	"Heroic Victory": {
		title: "Heroic Victory",
		desc: "Defend nine fields from Remy, lose none.",
		difficulty: 3,
		series: "",
		filter: ["All", "General"],
	},
	"Five in a Row": {
		title: "Five in a Row",
		desc: "Win five games of blackjack in a row.",
		difficulty: 1,
		series: "",
		filter: ["All", "General"],
	},
	Distinction: {
		title: "Distinction",
		desc: "Win a distinction on a school exam.",
		difficulty: 1,
		series: "distinction",
		filter: ["All", "General"],
	},
	Distinctive: {
		title: "Distinctive",
		desc: "Win 5 distinctions on school exams.",
		difficulty: 2,
		series: "distinction",
		filter: ["All", "General"],
	},
	Distinguished: {
		title: "Distinguished",
		desc: "Win 15 distinctions on school exams.",
		difficulty: 3,
		series: "distinction",
		filter: ["All", "General"],
	},
	"Science Fair Winner": {
		title: "Science Fair Winner",
		desc: "Blind them with science.",
		difficulty: 2,
		series: "",
		filter: ["All", "General"],
		softLockable: true,
	},
	"Maths Competition Winner": {
		title: "Maths Competition Winner",
		desc: "Sordid advantage or no.",
		difficulty: 2,
		series: "",
		filter: ["All", "General"],
		softLockable: true,
	},
	"Rich Hearts": {
		title: "Rich Hearts",
		desc: "Perform well during the English class stage play.",
		difficulty: 2,
		series: "",
		filter: ["All", "General"],
		softLockable: true,
	},
	"Most Aware": {
		title: "Most Aware",
		desc: "You see things others don't.",
		difficulty: 1,
		series: "",
		filter: ["All", "Stats"],
	},
	"Most Innocent": {
		title: "Most Innocent",
		desc: "Everything is fine.",
		difficulty: 1,
		series: "",
		filter: ["All", "Stats"],
	},
	"No More Control": {
		title: "No More Control",
		desc: "You don't know how to get lewder!",
		difficulty: 2,
		series: "",
		filter: ["All", "Stats"],
	},
	Thief: {
		title: "Thief",
		desc: "You know how to acquire things.",
		difficulty: 2,
		series: "",
		filter: ["All", "Stats"],
	},
	"May I have this Dance?": {
		title: "May I Have This Dance?",
		desc: "No one can resist your moves.",
		difficulty: 1,
		series: "",
		filter: ["All", "Stats"],
	},
	Aquanaut: {
		title: "Aquanaut",
		desc: "For those treasure hunters.",
		difficulty: 1,
		series: "",
		filter: ["All", "Stats"],
	},
	Seductress: {
		title: "Seductress",
		desc: "Be in control.",
		difficulty: 1,
		series: "",
		filter: ["All", "Stats"],
	},
	"Green Fingered": {
		title: "Green Fingered",
		desc: "You can get a lot done on your knees.",
		difficulty: 1,
		series: "",
		filter: ["All", "Stats"],
	},
	Majordomo: {
		title: "Majordomo",
		desc: "No filth escapes your notice.",
		difficulty: 1,
		series: "",
		filter: ["All", "Stats"],
	},
	Swift: {
		title: "Swift",
		desc: "Like the Wind.",
		difficulty: 1,
		series: "",
		filter: ["All", "Stats"],
	},
	Alluring: {
		title: "Alluring",
		desc: "Attracting attention is easy.",
		difficulty: 2,
		series: "",
		filter: ["All", "Stats"],
		softLockable: true,
	},
	"Sex Specialist": {
		title: "Sex Specialist",
		desc: "You excel at making others cum.",
		difficulty: 3,
		series: "",
		filter: ["All", "Stats"],
	},
	"Perfect Record": {
		title: "Perfect Record",
		desc: "You excel at studying.",
		difficulty: 2,
		series: "",
		filter: ["All", "Stats"],
	},
	"Perfect Sub": {
		title: "Perfect Sub",
		desc: "The pinnacle of submission.",
		difficulty: 2,
		series: "",
		filter: ["All", "Stats"],
	},
	"Defying the Odds": {
		title: "Defying the Odds",
		desc: "The pinnacle of defiance.",
		difficulty: 2,
		series: "",
		filter: ["All", "Stats"],
	},
	Hawker: {
		title: "Hawker",
		desc: "Profit from the earth.",
		difficulty: 1,
		series: "market",
		filter: ["All", "Stats"],
	},
	Vendor: {
		title: "Vendor",
		desc: "Prove your sales chops.",
		difficulty: 2,
		series: "market",
		filter: ["All", "Stats"],
	},
	Merchant: {
		title: "Merchant",
		desc: "Dominate the market.",
		difficulty: 2,
		series: "market",
		filter: ["All", "Stats"],
	},
	"Twisted Desire": {
		title: "Twisted Desire",
		desc: "Suffering is optional.",
		difficulty: 2,
		series: "",
		filter: ["All", "Stats"],
	},
	"Served Hot": {
		title: "Served Hot",
		desc: "You'll hurt them. And you'll like it.",
		difficulty: 2,
		series: "",
		filter: ["All", "Stats"],
	},
	Sadomasochist: {
		title: "Sadomasochist",
		desc: "You want to hurt.",
		difficulty: 3,
		series: "",
		filter: ["All", "Stats"],
	},
	"Shining Reputation": {
		title: "Shining Reputation",
		desc: "Famous, but only in the right ways.",
		difficulty: 3,
		series: "",
		filter: ["All", "Stats"],
	},
	"Social Butterfly": {
		title: "Social Butterfly",
		desc: "You are the centre of attention.",
		difficulty: 1,
		series: "",
		filter: ["All", "Social"],
	},
	"Anti-Social Moth": {
		title: "Unsocial Moth",
		desc: "Who needs friends?",
		difficulty: 1,
		series: "",
		filter: ["All", "Social"],
	},
	"Teachers Pet": {
		title: "Teacher's Pet",
		desc: "You are the best in class.",
		difficulty: 1,
		series: "",
		filter: ["All", "Social"],
	},
	"Teachers Nightmare": {
		title: "Teacher's Nightmare",
		desc: "You are a terror!",
		difficulty: 1,
		series: "",
		filter: ["All", "Social"],
	},
	"Robin the Lover": {
		title: "Robin the Lover",
		desc: "You gave your virginity to them.",
		difficulty: 2,
		series: "",
		filter: ["All", "Social"],
	},
	"Robin's Song": {
		title: "Robin's Song",
		desc: "Helped Robin feel comfortable crossdressing.",
		difficulty: 2,
		series: "",
		filter: ["All", "Social"],
	},
	"Whitney the Tsundere": {
		title: "Whitney the Bully",
		desc: "You gave your virginity to them.",
		difficulty: 2,
		series: "",
		filter: ["All", "Social"],
	},
	"Delinquent Antics": {
		title: "Delinquent Antics",
		desc: "Made Whitney cum during class.",
		difficulty: 1,
		series: "",
		filter: ["All", "Social"],
	},
	"Giddy Up": {
		title: "Giddy Up",
		desc: "Throw Whitney into a pool.",
		difficulty: 2,
		series: "",
		filter: ["All", "Social"],
	},
	"Kylar the Obsessed": {
		title: "Kylar the Obsessed",
		desc: "You gave your virginity to them.",
		difficulty: 2,
		series: "",
		filter: ["All", "Social"],
	},
	"Eden the Lonely": {
		title: "Eden the Lonely",
		desc: "You gave your virginity to them.",
		difficulty: 2,
		series: "",
		filter: ["All", "Social"],
	},
	"Avery the Moneybags": {
		title: "Avery the Moneybags",
		desc: "You gave your virginity to them.",
		difficulty: 2,
		series: "",
		filter: ["All", "Social"],
	},
	"Leighton the Shady": {
		title: "Leighton the Shady",
		desc: "You gave your virginity to them.",
		difficulty: 2,
		series: "",
		filter: ["All", "Social"],
	},
	"Alex the Robust": {
		title: "Alex the Robust",
		desc: "You gave your virginity to them.",
		difficulty: 2,
		series: "",
		filter: ["All", "Social"],
	},
	"Great Hawk the Terror": {
		title: "Great Hawk the Terror",
		desc: "You'll make an excellent spouse.",
		difficulty: 2,
		series: "",
		filter: ["All", "Social"],
	},
	"Wren the Sly": {
		title: "Wren the Sly",
		desc: "You gave your virginity to them.",
		difficulty: 2,
		series: "",
		filter: ["All", "Social"],
	},
	"Great Wolf the Alpha": {
		title: "Black Wolf the Alpha",
		desc: "You gave your virginity to them.",
		difficulty: 2,
		series: "",
		filter: ["All", "Social"],
	},
	"Sydney the Pure Hearted": {
		title: "Sydney the Pure-Hearted",
		desc: "They gave their virginity to you.",
		difficulty: 2,
		series: "",
		filter: ["All", "Social"],
	},
	"Harper the Hypnotist": {
		title: "Harper the Hypnotist",
		desc: "You gave your virginity to them.",
		difficulty: 2,
		series: "",
		filter: ["All", "Social"],
	},
	"Morgan the Lost": {
		title: "Morgan the Lost",
		desc: "You gave your virginity to them.",
		difficulty: 2,
		series: "",
		filter: ["All", "Social"],
	},
	"Love Triangles": {
		title: "Love Triangles",
		desc: "You don't know who to choose.",
		difficulty: 2,
		series: "love triangles",
		filter: ["All", "Social"],
	},
	"Love Trapezoids": {
		title: "Love Trapezoids",
		desc: "Three wasn't enough for you.",
		difficulty: 3,
		series: "love triangles",
		filter: ["All", "Social"],
	},
	"Ballroom Show-off": {
		title: "Ballroom Show-off",
		desc: "Won a competition with Avery.",
		difficulty: 1,
		series: "",
		filter: ["All", "Social"],
	},
	"Under the Table": {
		title: "Under the Table",
		desc: "Proved your mettle in a drinking contest.",
		difficulty: 1,
		series: "",
		filter: ["All", "Social"],
	},
	"Pub Crawl Victors": {
		title: "Pub Crawl Victors",
		desc: "Won a competition with your work colleagues.",
		difficulty: 1,
		series: "",
		filter: ["All", "Social"],
	},
	"Mason's Secret": {
		title: "Mason's Secret",
		desc: "Convince Mason to share something they'd rather not.",
		difficulty: 2,
		series: "",
		filter: ["All", "Social"],
	},
	"Mason's Shame": {
		title: "Mason's Shame",
		desc: "Bring Mason to orgasm inside a locker.",
		difficulty: 2,
		series: "",
		filter: ["All", "Social"],
	},
	"Animal Tender": {
		title: "Animal Tender",
		desc: "Earn the respect of all animals at Alex's farm.",
		difficulty: 2,
		series: "",
		filter: ["All", "Social"],
	},
	"I Spy": {
		title: "I Spy",
		desc: "Peek on Alex in the shower.",
		difficulty: 1,
		series: "",
		filter: ["All", "Social"],
	},
	"First Kiss": {
		title: "First Kiss",
		desc: "Give your first kiss to a love interest.",
		difficulty: 1,
		series: "",
		filter: ["All", "Social"],
	},
	"A Crime Most Foul": {
		title: "A Crime Most Foul",
		desc: "Once late, forever shamed.",
		difficulty: 2,
		series: "",
		hint: "Hint: Make a written punishment permanent.",
		filter: ["All", "Social"],
	},
	Longing: {
		title: "Longing",
		desc: "Escaped Kylar's home.",
		difficulty: 3,
		series: "",
		hint: "Hint: Drive Kylar to restrained madness.",
		filter: ["All", "Social"],
	},
	"Pagan Rite": {
		title: "Pagan Rite",
		desc: "Learned about Kylar's parents.",
		difficulty: 1,
		series: "",
		hint: "Hint: Discover the secret of Kylar's manor.",
		filter: ["All", "Social"],
	},
	Neko: {
		title: "Purrfect",
		desc: "Purring for attention.",
		difficulty: 1,
		series: "",
		filter: ["All", "Transformation"],
	},
	Wolf: {
		title: "Howl at the Moon",
		desc: "Looking to be part of a pack.",
		difficulty: 1,
		series: "",
		filter: ["All", "Transformation"],
	},
	Cattle: {
		title: "Mess With the Bull...",
		desc: "Ready for milking.",
		difficulty: 1,
		series: "",
		filter: ["All", "Transformation"],
	},
	Harpy: {
		title: "Fly Like an Eagle",
		desc: "Casting a great shadow.",
		difficulty: 1,
		series: "",
		filter: ["All", "Transformation"],
	},
	Fox: {
		title: "You Sly Fox",
		desc: "Thieving little rascal.",
		difficulty: 1,
		series: "",
		filter: ["All", "Transformation"],
	},
	Angel: {
		title: "Walk Like an Angel",
		desc: "Try not to fall.",
		difficulty: 1,
		series: "",
		filter: ["All", "Transformation"],
	},
	"Fallen Angel": {
		title: "Falling, Falling, Falling...",
		desc: "Cruel defilement.",
		difficulty: 1,
		series: "",
		filter: ["All", "Transformation"],
	},
	Demon: {
		title: "Devilish Looks",
		desc: "A cause of great lewdity.",
		difficulty: 1,
		series: "",
		filter: ["All", "Transformation"],
	},
	"A Special Trait": {
		title: "A Special Trait",
		desc: "Gain a special trait.",
		difficulty: 2,
		series: "special trait",
		hint: "Hint: Something special.",
		filter: ["All", "Special"],
	},
	"A Special Trait Collector": {
		title: "A Special Trait Collector",
		desc: "Gain all the special traits.",
		difficulty: 3,
		hint: "Hint: Something extra special.",
		series: "special trait",
		filter: ["All", "Special"],
	},
	"Broodmother Host": {
		title: "Broodmother Host",
		desc: "Host to an endless number of little critters.",
		difficulty: 2,
		series: "",
		filter: ["All", "Pregnancy"],
		hint: "Hint: Something left behind.",
	},
	"Top Broodmother Host": {
		title: "Top Broodmother Host",
		desc: "Host to a perfect critter.",
		difficulty: 3,
		series: "",
		filter: ["All", "Pregnancy"],
		hint: "Hint: Something amazing left behind.",
	},
	"Broodmother Zoologist": {
		title: "Broodmother Zoologist",
		desc: "Filled out the parasite notebook.",
		difficulty: 3,
		series: "",
		filter: ["All", "Pregnancy"],
		hint: "Hint: Everything left behind, carefully detailed.",
	},
	"Miracle of Life": {
		title: "Miracle of Life",
		desc: "Gave birth to your first child.",
		difficulty: 2,
		series: "",
		filter: ["All", "Pregnancy"],
		pregnancyLockable: true,
	},
	"First Fatherhood": {
		title: "First Fatherhood",
		desc: "Became a father to your first child.",
		difficulty: 2,
		series: "",
		filter: ["All", "Pregnancy"],
	},
	"Hail Mary": {
		title: "Hail Mary",
		desc: "Gave birth as a virgin.",
		difficulty: 4,
		series: "",
		filter: ["All", "Pregnancy"],
		hint: "Hint: Gained something but not at the cost of something else.",
		pregnancyLockable: true,
		pregnancySillyLockable: true,
	},
	"Bicycle Mother": {
		title: "Bicycle Mother",
		desc: "Gave birth without knowing who the father is.",
		difficulty: 2,
		series: "",
		filter: ["All", "Pregnancy"],
		hint: "Hint: Do you know who did it?",
	},
	"Life Comes in Threes": {
		title: "Life Comes in Threes",
		desc: "Gave birth to triplets.",
		difficulty: 2,
		series: "",
		filter: ["All", "Pregnancy"],
		hint: "Hint: Three of a kind.",
		pregnancyLockable: true,
	},
	"Life begins when you least expect": {
		title: "Life begins when you least expect",
		desc: "Gave birth to children as a male.",
		difficulty: 2,
		series: "",
		filter: ["All", "Pregnancy"],
		hint: "Hint: The Magic that helps create that what should not be.",
	},
	"Diversity of Life": {
		title: "Diversity of Life",
		desc: "Gave birth to children of many different species.",
		difficulty: 4,
		series: "",
		filter: ["All", "Pregnancy"],
		hint: "Hint: Many forms of existence.",
		pregnancyLockable: true,
	},
	/* "Broken Dam":{ //Not in the code right now
		title: "Broken Dam",
		desc: "Get impregnated thanks to a broken condom.",
		difficulty: 2,
		series: "",
		filter: ["All", "Pregnancy"],
		hint: "Hint: ."
	}, */
	/* "Seed Spreader":{  ToDo: Pregnancy: uncomment once you can impregnate more that 3 named npc's
		title: "Seed Spreader",
		desc: "Impregnate three NPCs in a single day.",
		difficulty: 1,
		series: "",
		filter: ["All", "Pregnancy"],
		hint: "Hint: ."
	}, */
	"Producer of Lewd Fluids": {
		title: "Producer of Lewd Fluids",
		desc: "Those tentacles know who's boss.",
		difficulty: 1,
		series: "lewd fluids",
		filter: ["All", "Special"],
		hint: "Hint: The tentacles envy you.",
	},
	"Literally Buckets": {
		title: "Literally Buckets",
		desc: "A tentacle god.",
		difficulty: 2,
		series: "lewd fluids",
		filter: ["All", "Special"],
		hint: "Hint: A tub full of [Redacted].",
	},
	"Feeling Full": {
		title: "Feeling Full",
		desc: "Full of lewd fluid.",
		difficulty: 1,
		series: "",
		filter: ["All", "Special"],
		hint: "Hint: After a large meal.",
	},
	"Head Chief": {
		title: "Head Chef",
		desc: "They just love your buns.",
		difficulty: 2,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Baking for others.",
	},
	"Locked In Gold": {
		title: "Locked In Gold",
		desc: "Won't protect you from frustration.",
		difficulty: 2,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Better to lock it away than lose it.",
	},
	"Bailey's Trouble Maker": {
		title: "Bailey's Trouble Maker",
		desc: "Made them cum.",
		difficulty: 3,
		series: "",
		filter: ["All", "Special"],
		hint: "Hint: Trouble at home.",
	},
	"Leighton's Nightmare": {
		title: "Leighton's Nightmare",
		desc: "Made them cum.",
		difficulty: 3,
		series: "",
		filter: ["All", "Special"],
		hint: "Hint: Trouble at school.",
	},
	"Alex's Partner": {
		title: "Alex's Partner",
		desc: "Made them cum.",
		difficulty: 3,
		series: "",
		filter: ["All", "Special"],
		hint: "Hint: A field of fun.",
	},
	"Harper's Bane": {
		title: "Harper's Bane",
		desc: "Made Harper drink their serum.",
		difficulty: 3,
		series: "",
		filter: ["All", "Special"],
		hint: "Hint: A taste of their own medicine.",
	},
	Laughingstock: {
		title: "Laughingstock",
		desc: "Sent someone to the pillory.",
		difficulty: 2,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Humiliate them.",
	},
	"You're the Laughingstock": {
		title: "You're the Laughingstock",
		desc: "Got sent to the pillory.",
		difficulty: 2,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Seen as a criminal.",
	},
	"The Endless Deep": {
		title: "The Endless Deep",
		desc: "Kept swimming out to sea.",
		difficulty: 2,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: To the edge of the world.",
	},
	"Wet and Ruined": {
		title: "Wet and Ruined",
		desc: "Discovered the ruined castle.",
		difficulty: 2,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Lost in the mire.",
	},
	"Head of the Pack": {
		title: "Head of the Pack",
		desc: "Be the leader of wolves.",
		difficulty: 2,
		series: "wolves",
		filter: ["All", "Special"],
		hint: "Hint: Being a leader.",
	},
	"Top of the Food Chain": {
		title: "Top of the Food Chain",
		desc: "All fear the terrible howls.",
		difficulty: 2,
		series: "wolves",
		filter: ["All", "Special"],
		hint: "Hint: Prove your leadership.",
	},
	"Illicit Science": {
		title: "Illicit Science",
		desc: "Discovered the compound.",
		difficulty: 1,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Secrets hidden from the law-abiding.",
	},
	"Mouth Sealed Shut": {
		title: "Mouth Sealed Shut",
		desc: "Survived an interrogation.",
		difficulty: 1,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Don't spill the beans.",
	},
	"Neck Deep": {
		title: "Neck Deep",
		desc: "Survived being submerged in aphrodisiac.",
		difficulty: 1,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Resist a most lewd substance.",
	},
	Seedy: {
		title: "Seedy",
		desc: "Seeds are little things, but they can't hide from you.",
		difficulty: 1,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Harvest nature's secrets.",
		softLockable: true,
	},
	"Pride of the Farm": {
		title: "Pride of the Farm",
		desc: "Out-produced all others.",
		difficulty: 2,
		series: "",
		filter: ["All", "Special"],
		hint: "Hint: Supreme yield.",
	},
	"Dawn to Dusk": {
		title: "Dawn to Dusk",
		desc: "Worked all day on the farm.",
		difficulty: 1,
		series: "",
		filter: ["All", "Special"],
		hint: "Hint: Honest agrarian labour.",
	},
	"Runaway Cattle": {
		title: "Runaway Cattle",
		desc: "Escaped Remy's farm.",
		difficulty: 1,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: No pen can hold you.",
		softLockable: true,
	},
	"Equine Rescue": {
		title: "Equine Rescue",
		desc: "Rescued by your equine friends.",
		difficulty: 1,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Collapse in a field, but dodge the consequences.",
	},
	"A Thunderous Response": {
		title: "A Thunderous Response",
		desc: "Caused a brawl on the High Street.",
		difficulty: 2,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Cause a schism in a crowd.",
	},
	"A Lewd Adventure": {
		title: "A Lewd Adventure",
		desc: "Made an exposed journey through town.",
		difficulty: 1,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Make a daring journey.",
		softLockable: true,
	},
	"Sour Dealing": {
		title: "Sour Dealing",
		desc: "Rescued from a gang who got in too deep.",
		difficulty: 1,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Make some unscrupulous acquaintances.",
		softLockable: true,
	},
	"Rear Passenger": {
		title: "Rear Passenger",
		desc: "Almost crashed a car with your butt.",
		difficulty: 1,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Break road safety laws.",
	},
	"Cornered Rogue": {
		title: "Cornered Rogue",
		desc: "Recovered your clothes from a mischievous fox.",
		difficulty: 1,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Outfox a mischievous rogue.",
		softLockable: true,
	},
	"Pain Rider": {
		title: "Pain Rider",
		desc: "Demonstrated Winter's wooden horse to completion.",
		difficulty: 2,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Ride a wooden horse to completion.",
		softLockable: true,
	},
	Submerged: {
		title: "Submerged",
		desc: "Demonstrated Winter's ducking stool to completion.",
		difficulty: 2,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Be ducked to completion.",
		softLockable: true,
	},
	"Farm Protector": {
		title: "Farm Protector",
		desc: "Defended the fields from a rival's thugs.",
		difficulty: 2,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Trespassers will be kicked.",
		softLockable: true,
	},
	"A Knot to Remember": {
		title: "A Knot to Remember",
		desc: "Knotted in the field with people nearby.",
		difficulty: 1,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: A most deviant display.",
	},
	"Wrong Size": {
		title: "Wrong Size",
		desc: "Swapped the boys' and girls' clothes.",
		difficulty: 1,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Drown the rumours.",
	},
	"Idle Hands": {
		title: "Idle Hands",
		desc: "Robbed a client while working as a masseur.",
		difficulty: 1,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Skilled hands have many uses.",
	},
	"Stolen Technology": {
		title: "Stolen Technology",
		desc: "Repaired the brothel sex machine.",
		difficulty: 2,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Briar has something for everyone.",
		softLockable: true,
	},
	Spelunking: {
		title: "Spelunking",
		desc: "Found the old smuggler's cave near the beach.",
		difficulty: 1,
		series: "beach cave",
		filter: ["All", "Discoveries"],
		hint: "Hint: Find the old smuggler route.",
		softLockable: true,
	},
	"X Marks the Spot": {
		title: "X Marks the Spot",
		desc: "Found a treasure map in the smuggler's cave.",
		difficulty: 2,
		series: "beach cave",
		filter: ["All", "Discoveries"],
		hint: "Hint: Hidden deep.",
		softLockable: true,
	},
	"Buried Treasure": {
		title: "Buried Treasure",
		desc: "Followed the treasure map, and made a discovery.",
		difficulty: 3,
		series: "beach cave",
		filter: ["All", "Discoveries"],
		hint: "Hint: Follow the map.",
		softLockable: true,
	},
	"Abnormal Mollusc": {
		title: "Abnormal Mollusc",
		desc: "Escaped the giant slug.",
		difficulty: 2,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Lurking below the surf.",
		softLockable: true,
	},
	Leverage: {
		title: "Leverage",
		desc: "Threatened your way from the smuggler's den.",
		difficulty: 3,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Defy the rogues.",
		softLockable: true,
	},
	Flurry: {
		title: "Flurry",
		desc: "Protected Robin's stand from snowball-wielding delinquents.",
		difficulty: 1,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Win a snowball fight.",
	},
	"Under the Ice": {
		title: "Under the Ice",
		desc: "Escaped the frozen lake.",
		difficulty: 1,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Break free.",
		softLockable: true,
	},
	"A Festive Home": {
		title: "A Festive Home",
		desc: "Gave gifts to the orphans.",
		difficulty: 1,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Bring wintry cheer to the orphans.",
	},
	"In Red Light": {
		title: "In Red Light",
		desc: "Harvested wild blood lemons.",
		difficulty: 2,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Strange fruit grows in strange light.",
		softLockable: true,
	},
	"Oh Bother": {
		title: "Oh Bother",
		desc: "Harvested wild honeycomb.",
		difficulty: 1,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Sweet and sticky.",
		softLockable: true,
	},
	"Employee Benefits": {
		title: "Employee Benefits",
		desc: "Discovered a shipment of gold by day, and took it by night.",
		difficulty: 3,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Find gold. Steal it later.",
		softLockable: true,
	},
	"Not Like the Movies": {
		title: "Not Like the Movies",
		desc: "Gained knowledge of quicksand.",
		difficulty: 2,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Sunken moor wisdom.",
		softLockable: true,
	},
	Slippery: {
		title: "Slippery",
		desc: "Escaped Remy's goons.",
		difficulty: 1,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Escape Remy's goons.",
		softLockable: true,
	},
	"High Reflection": {
		title: "High Reflection",
		desc: "Returned the mirror to the top of the castle ruin.",
		difficulty: 1,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Blind and in ruin.",
		softLockable: true,
	},
	Schism: {
		title: "Schism",
		desc: "Witnessed a drowned history.",
		difficulty: 3,
		series: "",
		hint: "Hint: Witness a history washed away.",
		filter: ["All", "Discoveries"],
		softLockable: true,
	},
	"Catch the Wind": {
		title: "Catch the Wind",
		desc: "Learned how to fly.",
		difficulty: 2,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Learn to fly.",
		softLockable: true,
	},
	"Trading Dignity": {
		title: "Trading Dignity",
		desc: "Orally satisfied a pack of Remy's goons.",
		difficulty: 1,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Make a one-sided trade.",
		softLockable: true,
	},
	"Playing with Fire": {
		title: "Playing with Fire",
		desc: "Made Wren cum before you.",
		difficulty: 2,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Endure a gambler's demands.",
		softLockable: true,
	},
	Firestarter: {
		title: "Firestarter",
		desc: "Convinced Wren to start a fire.",
		difficulty: 1,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Win a destructive prize.",
		softLockable: true,
	},
	Dealing: {
		title: "Dealing",
		desc: "Sold produce to an unscrupulous company.",
		difficulty: 1,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Sell Alex's strange produce.",
		softLockable: true,
	},
	"To Watch the Fields": {
		title: "To Watch the Fields",
		desc: "Hired security for your farm.",
		difficulty: 1,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Hire help.",
		softLockable: true,
	},
	"Reliable Employer": {
		title: "Reliable Employer",
		desc: "Employed an S-ranked guard.",
		difficulty: 2,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Help an employee reach their potential.",
		softLockable: true,
	},
	"Into the Sunset": {
		title: "Into the Sunset",
		desc: "Escaped Remy's goons on horseback.",
		difficulty: 1,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Escape mounted pursuers.",
		softLockable: true,
	},
	"Bent Copper": {
		title: "Bent Copper",
		desc: "Interrupted a corrupt exchange.",
		difficulty: 1,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Keep your eyes open while helping the community.",
		softLockable: true,
	},
	"Social Contract": {
		title: "Social Contract",
		desc: "Finished community service.",
		difficulty: 2,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Pay your debt to society.",
		softLockable: true,
	},
	Institutionalised: {
		title: "Institutionalised",
		desc: "Released from prison after serving your sentence.",
		difficulty: 1,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Do your time.",
		softLockable: true,
	},
	Breaker: {
		title: "Breaker",
		desc: "Disabled the prison shock collars.",
		difficulty: 1,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Rebellious sabotage.",
		softLockable: true,
	},
	"Time and Pressure": {
		title: "Time and Pressure",
		desc: "Dug through the prison wall.",
		difficulty: 1,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: No walls are thick enough.",
		softLockable: true,
	},
	"More than a Number": {
		title: "More than a Number",
		desc: "Learned five names in prison.",
		difficulty: 2,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Make friends from behind bars.",
		softLockable: true,
	},
	"Friends in the Sky": {
		title: "Friends in the Sky",
		desc: "Befriended the watchers.",
		difficulty: 2,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Recover that which was lost.",
		softLockable: true,
	},
	"Not Meant to be Caged": {
		title: "Not Meant to be Caged",
		desc: "Broke out of prison.",
		difficulty: 3,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Cut your sentence short.",
		softLockable: true,
	},
	"Slip Through the Backdoor": {
		title: "Slip Through the Backdoor",
		desc: "Wiped Bailey's list and evaded punishment.",
		difficulty: 2,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Wiped clean and got away with it.",
	},
	"Life of the Party": {
		title: "Life of the Party",
		desc: "Impressed a party with your dance.",
		difficulty: 1,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Impress Charlie's friends.",
		softLockable: true,
	},
	"Belle of the Ball": {
		title: "Belle of the Ball",
		desc: "Impressed an aristocratic party with your dance.",
		difficulty: 2,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Impress high society.",
		softLockable: true,
	},
	"Breaking the Stone": {
		title: "Breaking the Stone",
		desc: "Stopped the ritual beneath a Danube manor.",
		difficulty: 3,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Use your dance connections to access and end a ritual.",
		softLockable: true,
	},
	"Pound Alpha": {
		title: "Pound Alpha",
		desc: "Reached maximum status at the dog pound.",
		difficulty: 1,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Show those dogs who's boss.",
		softLockable: true,
	},
	"Pound Runt": {
		title: "Pound Runt",
		desc: "Reached minimum status at the dog pound.",
		difficulty: 1,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Submit to the dogs.",
		softLockable: true,
	},
	"Pounded Pound": {
		title: "Pounded Pound",
		desc: "Informed Bailey of the dog pound's activities.",
		difficulty: 2,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Find dirt on the dog pound.",
		softLockable: true,
	},
	"Pound Liberator": {
		title: "Pound Liberator",
		desc: "Rescued the black dog.",
		difficulty: 2,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Release a special prisoner.",
		softLockable: true,
	},
	"The Value of Pain": {
		title: "The Value of Pain",
		desc: "Rescued an orphan while preying as a demon.",
		difficulty: 1,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Do a good deed, demonically.",
		softLockable: true,
	},
	"Free Booze": {
		title: "Free Booze",
		desc: "Drank all the youths' booze, but resisted rape.",
		difficulty: 1,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Drink a lot on the moor.",
		softLockable: true,
	},
	"Bewitching Echoes": {
		title: "Bewitching Echoes",
		desc: "Caused a mad frenzy during the bukkake show.",
		difficulty: 1,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Ruin a demonic show in the best way.",
		softLockable: true,
	},
	"Dark Delvings": {
		title: "Dark Delvings",
		desc: "Retrieved the white crystal.",
		difficulty: 2,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Break into an ancient site.",
		softLockable: true,
	},
	"Lurker Beyond": {
		title: "Lurker Beyond",
		desc: "Defeated the lurker in the tentacle forest.",
		difficulty: 3,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Defeat a monster in another world.",
		softLockable: true,
	},
	"Down Below": {
		title: "Down Below",
		desc: "Escaped slavery in the mines.",
		difficulty: 2,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Escape an old industry.",
		softLockable: true,
	},
	"Bridging the Past": {
		title: "Bridging the Past",
		desc: "Built a bridge over the canal.",
		difficulty: 1,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Restore a bridge.",
		softLockable: true,
	},
	"Safe Trail": {
		title: "Safe Trail",
		desc: "Restored the road through the forest.",
		difficulty: 1,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Restore a road.",
		softLockable: true,
	},
	"Field Work": {
		title: "Field Work",
		desc: "Built an archaeological field office at the lake.",
		difficulty: 1,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Build Winter's wish.",
		softLockable: true,
	},
	"Concrete Woodland": {
		title: "Concrete Woodland",
		desc: "Restored the residential thicket.",
		difficulty: 1,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Restore a thicket.",
		softLockable: true,
	},
	"School Green": {
		title: "School Green",
		desc: "Restored the school green.",
		difficulty: 1,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Restore a green.",
		softLockable: true,
	},
	"Hookah Master": {
		title: "Hookah Master",
		desc: "Inherited the hookah parlour.",
		difficulty: 2,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Delve into hookah smoke.",
		softLockable: true,
	},
	"Sins of the Past": {
		title: "Sins of the Past",
		desc: "Discovered the mayor's secret.",
		difficulty: 3,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Access the mayor's computer.",
		softLockable: true,
	},
	"Panic Room": {
		title: "Panic Room",
		desc: "Escaped a security system in the flats.",
		difficulty: 1,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Discover intense security on Barb Street.",
		softLockable: true,
	},
	"Lost World": {
		title: "Lost World",
		desc: "Discovered an island lost to history.",
		difficulty: 1,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: A mist-shrouded island waits.",
		softLockable: true,
	},
	"Prehistoric Landscape": {
		title: "Prehistoric Landscape",
		desc: "Discovered all the areas on the island.",
		difficulty: 2,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Explore a mist-shrouded island.",
		softLockable: true,
	},
	"Face of a Guardian": {
		title: "Face of a Guardian",
		desc: "Built an islander mask of your own.",
		difficulty: 2,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Practise wilderness woodwork.",
		softLockable: true,
	},
	"Wild Monarch": {
		title: "Wild Monarch",
		desc: "Built a throne.",
		difficulty: 2,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Practise vain wilderness woodwork.",
		softLockable: true,
	},
	Naturalised: {
		title: "Naturalised",
		desc: "Infiltrated the islander castle, without being captured.",
		difficulty: 3,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Disguise yourself and enter a foreign stronghold.",
		softLockable: true,
	},
	"Gilded Spear": {
		title: "Gilded Spear",
		desc: "Retrieved the gilded spear.",
		difficulty: 3,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: At the root of an island, waiting.",
		softLockable: true,
	},
	"Defy the Night": {
		title: "Defy the Night",
		desc: "Endured the Trial of Anguish to completion.",
		difficulty: 2,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Climb the temple hierarchy.",
		softLockable: true,
	},
	"Withering Truth": {
		title: "Withering Truth",
		desc: "Met the bishop.",
		difficulty: 3,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Through confession, revelation.",
		softLockable: true,
	},
	"Lost Heirloom": {
		title: "Lost Heirloom",
		desc: "Retrieved the gold compass.",
		difficulty: 2,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Stolen abroad.",
		softLockable: true,
	},
	"Max Those Shots": {
		title: "Max Those Shots",
		desc: "Holding a lot of pepper spray.",
		difficulty: 2,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: The best defence is a good offence.",
		softLockable: true,
	},
	"Opened Pandoras Box": {
		title: "Opened Pandora's Box",
		desc: "Helped with rebuilding the Adult Shop.",
		difficulty: 1,
		series: "Adult Shop",
		filter: ["All", "Discoveries"],
		hint: "Hint: Is it worth opening the toybox?",
	},
	"Brothel Provider": {
		title: "Brothel Provider",
		desc: "Installed a vending machine to sell products at a profit.",
		difficulty: 2,
		series: "",
		filter: ["All", "Discoveries"],
		hint: "Hint: Convince Briar to do business.",
	},
	"Opened Pandoras Cocks": {
		title: "Opened Pandora's Cocks",
		desc: "The Adult Shop couldn't have done it without you.",
		difficulty: 3,
		series: "Adult Shop",
		filter: ["All", "Discoveries"],
		hint: "Hint: Was it worth opening the toybox so fast?",
	},
	"Ear Slime Lover": {
		title: "Ear Slime Lover",
		desc: "It is your best friend.",
		difficulty: 3,
		series: "",
		filter: ["All", "Special"],
		hint: "Hint: Whispers in your ear.",
	},
	"Ear Slime Amalgam": {
		title: "Ear Slime Amalgam",
		desc: "You became one with your best friend.",
		difficulty: 3,
		series: "",
		filter: ["All", "Special"],
		hint: "Hint: Given time and love to bloom.",
	},
	"The Path to Redemption": {
		title: "The Path to Redemption",
		desc: "Recover your humanity from the demon within.",
		difficulty: 3,
		series: "",
		filter: ["All", "Special"],
		hint: "Hint: Recover what you lost.",
		softLockable: true,
	},
	"A New Life": {
		title: "A New Life",
		desc: "Start with a boost.",
		difficulty: 1,
		series: "",
		filter: ["All", "Special"],
		hint: "Hint: Starting off fast.",
	},
	Negotiator: {
		title: "Negotiator",
		desc: "Made over £500 from a single tip.",
		difficulty: 3,
		series: "",
		filter: ["All", "Special"],
		hint: "Hint: Rake it in.",
	},
	"Curious Attire": {
		title: "Curious Attire",
		desc: "Unlocked all the special clothing items.",
		difficulty: 2,
		series: "",
		filter: ["All", "Special"],
		hint: "Hint: Able to wear them all.",
		softLockable: true,
	},
	"My Collection of Feats": {
		title: "My Collection of Feats",
		desc: "Too many to count.",
		difficulty: 3,
		series: "collection",
		filter: ["All", "Special"],
		hint: "Hint: A collection of something.",
	},
	"My Timeless Collection of Feats": {
		title: "My Timeless Collection of Feats",
		desc: "Feats being worth more than time itself.",
		difficulty: 5,
		series: "collection",
		filter: ["All", "Special"],
		hint: "Hint: Time and effort.",
	},
};

async function featsMergePre() {
	// Replace getting the count with a better method that gets included with the sugarcube format
	T.saveDataImportCount = 0;
	const localStorageSaves = DoLSave.getSaves();

	const result = () => {
		if (!T.saveDataImportCount) {
			$("#featsBeginText").html(`0 saves detected, did you make a local save before trying this?`);
		} else if ((T.saveDataImportCount >= 10 && Browser.isMobile.any()) || T.saveDataImportCount >= 25) {
			$("#featsBeginText").html(`${T.saveDataImportCount} saves detected, this might take some time on a slower device.`);
		} else {
			$("#featsBeginText").html(`Only ${T.saveDataImportCount} saves detected, this shouldn't take too long.`);
		}
		$("#featsBeginLoadingText").addClass("hidden");
		$("#featsBeginButton").removeClass("hidden");
	};

	// Count the local storage saves
	if (localStorageSaves.autosave) T.saveDataImportCount++;
	if (localStorageSaves.slots) {
		localStorageSaves.slots.forEach(slot => {
			if (slot) T.saveDataImportCount++;
		});
	}

	// Count the index db saves
	try {
		// eslint-disable-next-line no-undef
		idb.getSaveDetails()
			.then(saveDataDetails => {
				T.saveDataImportCount += saveDataDetails.length;
			})
			.finally(() => {
				result();
			});
	} catch {
		result();
	}
}
DefineMacro("featsMergePre", featsMergePre);

function featsMerge() {
	if (window.featsMerge) return;
	window.featsMerge = true;

	const savesToLoad = T.saveDataImportCount;
	const loadingBar = $("#featsLoadingMeter .greenbar");
	const loadingText = $("#featsLoadingText");
	let featData = localStorage.getItem("dolFeats");
	if (featData) {
		featData = JSON.parse(featData);
	} else {
		featData = {};
	}

	const loadFeats = (data = {}) => {
		Object.entries(data).forEach(([key, date]) => {
			if (!featData[key] || new Date(date).getTime() < new Date(featData[key]).getTime()) {
				featData[key] = date;
			}
		});
	};

	const result = () => {
		let points = 0;
		Object.keys(featData).forEach(key => {
			if (setup.feats[key]) points += setup.feats[key].difficulty;
		});
		featData.points = points;

		V.feats.allSaves = featData;
		localStorage.setItem("dolFeats", JSON.stringify(featData));

		loadingBar.css("width", "100%");
		loadingText.html("All feat data imported.");
		$("#featsFinishButton").removeClass("hidden");

		delete window.featsMerge;
	};

	// Read the local storage saves
	let localSavesChecked = 0;
	const localStorageSaves = clone(DoLSave.getSaves());
	if (localStorageSaves) {
		if (localStorageSaves.autosave) {
			localStorageSaves.autosave.state.history = State.deltaDecode(localStorageSaves.autosave.state.delta);
			DoLSave.decompressIfNeeded(localStorageSaves.autosave);

			if (
				localStorageSaves.autosave.state.history &&
				localStorageSaves.autosave.state.history[0] &&
				localStorageSaves.autosave.state.history[0].variables
			) {
				const variables = localStorageSaves.autosave.state.history[0].variables;
				if (variables.feats) {
					loadFeats(variables.feats.allSaves);
					loadFeats(variables.feats.currentSave);
				}
			}
			localSavesChecked++;
			loadingBar.css("width", `${(localSavesChecked / savesToLoad) * 100}%`);
		}
		if (localStorageSaves.slots) {
			localStorageSaves.slots.forEach(slot => {
				if (slot) {
					slot.state.history = State.deltaDecode(slot.state.delta);
					DoLSave.decompressIfNeeded(slot);
					if (slot.state.history && slot.state.history[0] && slot.state.history[0].variables) {
						const variables = slot.state.history[0].variables;
						if (variables.feats) {
							loadFeats(variables.feats.allSaves);
							loadFeats(variables.feats.currentSave);
						}
					}
					localSavesChecked++;
					loadingBar.css("width", `${(localSavesChecked / savesToLoad) * 100}%`);
				}
			});
		}
	}

	// Read the index db saves
	try {
		// eslint-disable-next-line no-undef
		idb.getAllSaves()
			.then(saves =>
				saves.forEach((slot, index) => {
					if (slot.data && Array.isArray(slot.data.history)) {
						slot.data.history.forEach(saveData => {
							if (saveData.variables && saveData.variables.feats) {
								loadFeats(saveData.variables.feats.allSaves);
								loadFeats(saveData.variables.feats.currentSave);
							}
						});
					}
					loadingBar.css("width", `${((localSavesChecked + index + 1) / savesToLoad) * 100}%`);
					loadingText.html(`${index + 1} out of ${savesToLoad} saves checked.`);
				})
			)
			.finally(() => {
				result();
			});
	} catch {
		result();
	}
}
DefineMacro("featsMerge", featsMerge);

// eslint-disable-next-line no-unused-vars
function earnHourlyFeats() {
	if (V.feats.locked || V.cheatdisable === "f" || V.debug || V.gamemode === "soft" || V.alluremod < 1 || V.replayScene) return false;

	const fragment = document.createDocumentFragment();

	const earnFeat = featName => {
		if (!V.feats.currentSave[featName]) fragment.append(wikifier("earnFeat", `"${featName}"`));
	};

	// Feats that can only be earned after 50 days
	if (Time.days >= 50) {
		switch (V.player.gender) {
			case "m":
				earnFeat("Being a Boy");
				break;
			case "f":
				earnFeat("Being a Girl");
				break;
			case "h":
				earnFeat("Being a Hermaphrodite");
				break;
		}

		if (Time.days >= 150) earnFeat("Being an Orphan");

		if (!V.passoutstat) {
			earnFeat("Stressful Challenge");
			if (Time.days >= 150) earnFeat("Long Stressful Challenge");
		}
	}

	if (V.awareness >= 500) earnFeat("Most Aware");
	if (V.awareness <= -199) earnFeat("Most Innocent");
	if (V.promiscuity >= 100 && V.deviancy >= 100 && V.exhibitionism >= 100) earnFeat("No More Control");

	if (
		(!V.player.vaginaExist || V.vaginalskill >= 1000) &&
		(!V.player.penisExist || V.penileskill >= 1000) &&
		V.oralskill >= 1000 &&
		(V.analskill >= 1000 || V.analdisable === "t") &&
		V.handskill >= 1000 &&
		V.feetskill >= 1000 &&
		V.bottomskill >= 1000 &&
		V.thighskill >= 1000 &&
		V.chestskill >= 1000
	) {
		earnFeat("Sex Specialist");
	}

	if (V.submissive >= 2000) earnFeat("Perfect Sub");
	if (V.submissive <= 0) earnFeat("Defying the Odds");
	if (V.museumAntiques.museumCount === V.museumAntiques.maxCount) earnFeat("It Belongs in a Museum");

	// LI Romance
	const loveCount = (V.robinromance ? 1 : 0) + (V.whitneyromance ? 1 : 0) + (V.kylarenglish ? 1 : 0) + (V.sydneyromance ? 1 : 0);
	if (loveCount >= 3) earnFeat("Love Triangles");
	if (loveCount >= 4) earnFeat("Love Trapezoids");

	if (V.cat >= 6) earnFeat("Neko");
	if (V.wolfgirl >= 6) earnFeat("Wolf");
	if (V.angel >= 6) earnFeat("Angel");
	if (V.fallenangel >= 2) earnFeat("Fallen Angel");
	if (V.demon >= 6) earnFeat("Demon");
	if (V.cow >= 6) earnFeat("Cattle");
	if (V.harpy >= 6) earnFeat("Harpy");
	if (V.fox >= 6) earnFeat("Fox");

	const specialTraits =
		(V.orgasmtrait >= 1 ? 1 : 0) +
		(V.ejactrait >= 1 ? 1 : 0) +
		(V.molesttrait >= 1 ? 1 : 0) +
		(V.rapetrait >= 1 ? 1 : 0) +
		(V.bestialitytrait >= 1 ? 1 : 0) +
		(V.tentacletrait >= 1 ? 1 : 0) +
		(V.voretrait >= 1 ? 1 : 0) +
		(V.milkdranktrait >= 1 ? 1 : 0) +
		(V.choketrait >= 1 ? 1 : 0);
	if (specialTraits >= 1) earnFeat("A Special Trait");
	if (specialTraits >= 9) earnFeat("A Special Trait Collector");

	if (V.sexStats.anus.pregnancy.motherStatus >= 2 || V.sexStats.vagina.pregnancy.motherStatus >= 2) earnFeat("Broodmother Host");
	if (
		V.pregnancyStats.parasiteTypesSeen &&
		V.pregnancyStats.parasiteTypesSeen.length >= 14 &&
		V.pregnancyStats.parasiteVariantsSeen.length >= 2 &&
		V.pregnancyStats.parasiteBook === 3
	) {
		// typesSeen: fish, snake, slime, spider, maggot, worm, eel, wasp, bee, lurker, squid, slug, tentacle, vine
		// variantsSeen: pale, metal
		earnFeat("Broodmother Zoologist");
	}

	if (V.spraymax >= 7) earnFeat("Max Those Shots");
	if ((V.semen_volume >= 2000 && V.semen_amount >= V.semen_volume) || (V.milk_volume >= 2000 && V.milk_amount >= V.milk_volume)) earnFeat("Feeling Full");
	if (V.cool >= 400) earnFeat("Social Butterfly");
	if (V.cool <= 2 && !V.backgroundTraits.includes("nerd")) earnFeat("Anti-Social Moth");
	if (V.delinquency <= 0) earnFeat("Teachers Pet");
	if (V.delinquency >= 1000) earnFeat("Teachers Nightmare");

	if (
		V.skin.forehead.writing &&
		V.skin.left_cheek.writing &&
		V.skin.right_cheek.writing &&
		V.skin.left_shoulder.writing &&
		V.skin.right_shoulder.writing &&
		V.skin.breasts.writing &&
		V.skin.back.writing &&
		V.skin.pubic.writing &&
		V.skin.left_thigh.writing &&
		V.skin.right_thigh.writing
	) {
		earnFeat("A Living Canvas");
	}

	if (V.produce_sold >= 100) earnFeat("Hawker");
	if (V.produce_sold >= 1000) earnFeat("Vendor");
	if (V.produce_sold >= 5000) earnFeat("Merchant");
	if (V.plants_known.length >= 17) earnFeat("Seedy");
	if (V.daily.ex.road === 1 && V.daily.ex.cream === 1 && V.daily.ex.flyover === 1) earnFeat("A Lewd Adventure");
	if (V.athletics >= 1000) earnFeat("Swift");

	if (V.farm_stage >= 2 && V.farm.beasts.horses >= 20 && V.farm.beasts.cattle >= 20 && V.farm.beasts.dogs >= 20 && V.farm.beasts.pigs >= 20) {
		earnFeat("Animal Tender");
	}

	if (V.masochism_level >= 4 && V.sadism_level >= 4) earnFeat("Sadomasochist");
	if (V.masochism_level >= 4) earnFeat("Twisted Desire");
	if (V.sadism_level >= 4) earnFeat("Served Hot");

	// V.fame.pimp has been excluded, should be added back in if enabled
	if (
		V.fame.sex <= 29 &&
		V.fame.prostitution <= 29 &&
		V.fame.rape <= 29 &&
		V.fame.bestiality <= 29 &&
		V.fame.exhibitionism <= 29 &&
		V.fame.pregnancy <= 29 &&
		V.fame.impreg <= 29 &&
		V.fame.scrap >= 1000 &&
		V.fame.good >= 1000 &&
		V.fame.business >= 1000 &&
		V.fame.social >= 1000 &&
		V.fame.model >= 1000
	) {
		earnFeat("Shining Reputation");
	}

	if (
		Object.values(V.children).reduce((prev, curr) => {
			if (curr.mother === "pc") prev.pushUnique(curr.type);
			return prev;
		}, []).length >= Object.keys(pregnancyGenerator).filter(type => setup.pregnancy.typesEnabled.includes(type)).length
	) {
		earnFeat("Diversity of Life");
	}

	if (V.money >= 100000) earnFeat("Pocket Change");
	if (V.money >= 1000000) earnFeat("Money Maker");
	if (V.money >= 10000000) earnFeat("Tycoon");
	if (V.money >= 100000000) earnFeat("Millionaire");

	if (
		V.liquidoutsidecount >= 100 &&
		(V.analdisable === "t" || setup.bodyliquid.combined("anus") >= 5) &&
		(!V.player.vaginaExist || setup.bodyliquid.combined("vagina") >= 5) &&
		setup.bodyliquid.combined("mouth") >= 5
	) {
		earnFeat("Fully Covered");
	}

	if (V.skulduggery >= 1000) earnFeat("Thief");
	if (V.danceskill >= 1000) earnFeat("May I have this Dance?");
	if (V.swimmingskill >= 1000) earnFeat("Aquanaut");
	if (V.seductionskill >= 1000) earnFeat("Seductress");
	if (V.tending >= 1000) earnFeat("Green Fingered");
	if (V.housekeeping >= 1000) earnFeat("Majordomo");
	if (V.baseAllure >= 7000 && V.outside === 1 && V.moonstate === 0) earnFeat("Alluring");
	if (V.science >= 1000 && V.maths >= 1000 && V.english >= 1000 && V.history >= 1000) earnFeat("Perfect Record");
	if (V.earSlime.corruption >= 100) earnFeat("Ear Slime Lover");
	if (V.earSlime.corruption >= 100 && V.earSlime.growth >= 200) earnFeat("Ear Slime Amalgam");

	// To earn the feat "Curious Attire"
	fragment.append(wikifier("specialClothesUpdate"));

	// Should be last
	let currentMax = 0;
	for (let i = 0; i < Object.keys(setup.feats).length; i++) {
		currentMax += setup.feats[Object.keys(setup.feats)[i]].difficulty;
	}
	if (V.feats.allSaves.points >= Math.floor(currentMax * 0.5)) earnFeat("My Collection of Feats");
	if (V.feats.allSaves.points >= Math.floor(currentMax * 0.95)) earnFeat("My Timeless Collection of Feats");

	return fragment;
}
