import { Game } from "./types";

const webGames: Game[] = [
  {
    name: "Codenames",
    description:
      "Codenames is a word-based party game where players split into two teams and take turns giving one-word clues to help their teammates identify specific words on a grid of cards. The goal is to find all of your team's words while avoiding the opposing team's words and the game's \"assassin\" word.",
    url: "https://codenames.game/",
    image: "codenames.png",
    minimumPlayers: 4,
    freeToHost: true,
    freeToJoin: true,
  },
  {
    name: "Connect the Stars",
    description:
      "A cooperative puzzle game where players work together to connect stars on a grid using a limited set of pathways. The goal is to create a clear path that connects all the stars while avoiding obstacles and efficiently utilizing the available pathways.",
    url: "https://connectthestars.xyz",
    image: "connect_the_stars.png",
    minimumPlayers: 1,
    freeToHost: true,
    freeToJoin: true,
  },
  {
    name: "Draw Battle",
    description:
      "A competitive multiplayer game that challenges players' artistic and guessing skills. Participants take turns drawing prompts while others attempt to guess what the drawing represents in a limited amount of time, leading to amusing and unpredictable outcomes.",
    url: "https://drawbattle.io/",
    image: "draw_battle.png",
    minimumPlayers: 2,
    freeToHost: true,
    freeToJoin: true,
  },
  {
    name: "Gartic Phone",
    description:
      'A multiplayer game that combines drawing and the classic "telephone" game concept. Players take turns drawing a prompt or describing an image, and each subsequent player must interpret and convey the content in their own way, resulting in hilarious and often distorted outcomes.',
    url: "https://garticphone.com",
    image: "gartic_phone.png",
    minimumPlayers: 4,
    maximumPlayers: 50,
    freeToHost: true,
    freeToJoin: true,
  },
  {
    name: "GeoGuessr",
    description:
      "A geographical exploration game where players are placed in random locations around the world using Google Street View. They must use visual clues to guess their location's country, city, or region, earning points based on the accuracy of their guesses and discovering unique and captivating places along the way.",
    url: "https://www.geoguessr.com/",
    image: "geoguessr.png",
    minimumPlayers: 1,
    freeToHost: true,
    freeToJoin: true,
  },
  {
    name: "Hanab",
    description:
      "A cooperative card game where players work together to create a perfect fireworks display. The catch is that each player holds their cards facing away from them, requiring teammates to give limited information to help each other play the right cards in the right order.",
    url: "https://www.hanab.cards/en",
    image: "hanab.png",
    minimumPlayers: 2,
    maximumPlayers: 5,
    freeToHost: true,
    freeToJoin: true,
  },
  {
    name: "HaxBall",
    description:
      "A fast-paced online multiplayer soccer game that features simple physics and controls. Players control circular avatars and work together in teams to score goals, making it an accessible and engaging sports game for both casual and competitive players.",
    url: "https://www.haxball.com/",
    image: "haxball.png",
    minimumPlayers: 2,
    maximumPlayers: 20,
    freeToHost: true,
    freeToJoin: true,
  },
  {
    name: "Longwave",
    description:
      "A social guessing game where players try to gauge how well their teammates can align their thoughts. One player gives a clue that falls on a spectrum, and their team must guess where the hidden target lies based on the clue's interpretation, resulting in amusing and insightful discussions.",
    url: "https://longwave.web.app/",
    minimumPlayers: 2,
    freeToHost: true,
    freeToJoin: true,
  },
  {
    name: "One Word",
    description:
      "A cooperative word-based party game where players collaborate to construct a coherent story, each contributing only one word at a time. The goal is to create a narrative that flows smoothly despite the limited input from each player, often leading to unexpected and entertaining twists.",
    url: "https://oneword.games/",
    minimumPlayers: 3,
    freeToHost: true,
    freeToJoin: true,
    group: {
      name: "One Word  Games",
      url: "https://oneword.games/about",
    },
  },
  {
    name: "Incrypt",
    description:
      "Incrypt is a word game for two teams, based on Decrypto. Each spy incrypts three words by writing down three clues... Too complex? Your own team won't get the message. Too simple? The other team will intercept it! ",
    url: "https://oneword.games/incrypt",
    minimumPlayers: 6,
    freeToHost: true,
    freeToJoin: true,
    group: {
      name: "One Word  Games",
      url: "https://oneword.games/about",
    },
  },
  {
    name: "Listorama",
    description:
      "In one minute, come up with the perfect list for a category & mode: Forgotten Four — Find four examples that nobody else will pick. Threefold — Think of the three most popular answers. One on One — Match *exactly* one other player",
    url: "https://oneword.games/listorama",
    minimumPlayers: 3,
    freeToHost: true,
    freeToJoin: true,
    group: {
      name: "One Word  Games",
      url: "https://oneword.games/about",
    },
  },
  {
    name: "Storytime",
    description: "You and your friends find yourself in a text adventure!",
    url: "https://oneword.games/storytime",
    minimumPlayers: 4,
    freeToHost: true,
    freeToJoin: true,
    group: {
      name: "One Word  Games",
      url: "https://oneword.games/about",
    },
  },
  {
    name: "Pairwise",
    description:
      "This is an online word game inspired by Dixit, originally a picture-based board game. Write a clue, trick your friends, find the pair. But beware: If your clue is either too obvious or too off the wall, your friends will get ahead!,",
    url: "https://oneword.games/pairwise",
    minimumPlayers: 4,
    freeToHost: true,
    freeToJoin: true,
    group: {
      name: "One Word  Games",
      url: "https://oneword.games/about",
    },
  },
  {
    name: "Quad Squad",
    description:
      "Cleverly categorize the world in less-than-obvious ways! Three rules: 1) Name a thing. 2) Everyone else decides where it goes on an ever-changing alignment chart. 3) The more different answers you get, the more points.",
    url: "https://oneword.games/quadsquad",
    minimumPlayers: 4,
    freeToHost: true,
    freeToJoin: true,
    group: {
      name: "One Word  Games",
      url: "https://oneword.games/about",
    },
  },
  {
    name: "Skribbl",
    description:
      "An online multiplayer drawing and guessing game where players take turns drawing a given word while others try to guess what it is. The game's fun and fast-paced nature, along with the humorous interpretations of drawings, make it a popular choice for virtual gatherings and casual gameplay.",
    url: "https://skribbl.io",
    image: "skribbl.png",
    minimumPlayers: 2,
    maximumPlayers: 20,
    freeToHost: true,
    freeToJoin: true,
  },
  {
    name: "Spyfall",
    description:
      "A social deduction game where players are given secret roles as either regular players or a spy, except one player doesn't know their role. Set in various locations, players ask and answer questions to figure out who the spy is, while the spy attempts to blend in and identify the location without revealing their lack of knowledge.",
    url: "https://www.spyfall.app/",
    image: "spyfall.png",
    minimumPlayers: 4,
    maximumPlayers: 14,
    freeToHost: true,
    freeToJoin: true,
  },
  {
    name: "WikiRace",
    description:
      "An online game where players race against each other to navigate from one Wikipedia article to another using only the links within the articles. The goal is to find the shortest path between the initial and target articles, showcasing players' knowledge of Wikipedia's vast interconnectedness.",
    url: "https://wiki-race.com/",
    image: "wikirace.png",
    minimumPlayers: 1,
    maximumPlayers: 10,
    freeToHost: true,
    freeToJoin: true,
  },
];

const jackboxGames: Game[] = [
  {
    name: "You Don't Know Jack - 2015",
    description:
      "The comedy trivia sensation with hundreds of all-new questions.",
    url: "https://jackboxgames.com/ydkj-2015",
    image: "ydkj_2015.jpg",
    minimumPlayers: 1,
    maximumPlayers: 4,
    freeToHost: false,
    freeToJoin: true,
    group: {
      name: "The Jackbox Party Pack",
      url: "https://www.jackboxgames.com/party-pack/",
    },
  },
  {
    name: "Lie Swatter",
    description: "The wacky-fact-filled Lie Swatter.",
    url: "https://jackboxgames.com/lie-swatter",
    image: "lie_swatter.jpg",
    minimumPlayers: 1,
    maximumPlayers: 100,
    freeToHost: false,
    freeToJoin: true,
    group: {
      name: "The Jackbox Party Pack",
      url: "https://www.jackboxgames.com/party-pack/",
    },
  },
  {
    name: "Fibbage XL",
    description:
      "The hilarious bluffing game with 50% more questions added to the original hit.",
    url: "https://jackboxgames.com/fibbage-xl",
    image: "fibbage_xl.jpg",
    minimumPlayers: 2,
    maximumPlayers: 8,
    freeToHost: false,
    freeToJoin: true,
    group: {
      name: "The Jackbox Party Pack",
      url: "https://www.jackboxgames.com/party-pack/",
    },
  },
  {
    name: "Word Spud",
    description: "The racy-as-you-want-to-be fill-in-the-blank word game.",
    url: "https://jackboxgames.com/word-spud",
    image: "word_spud.jpg",
    minimumPlayers: 2,
    maximumPlayers: 8,
    freeToHost: false,
    freeToJoin: true,
    group: {
      name: "The Jackbox Party Pack",
      url: "https://www.jackboxgames.com/party-pack/",
    },
  },
  {
    name: "Drawful",
    description:
      "The bizarre drawing game where you draw right there on your phone or tablet.",
    url: "https://jackboxgames.com/drawful",
    image: "drawful.jpg",
    minimumPlayers: 3,
    maximumPlayers: 8,
    freeToHost: false,
    freeToJoin: true,
    group: {
      name: "The Jackbox Party Pack",
      url: "https://www.jackboxgames.com/party-pack/",
    },
  },
  {
    name: "Bomb Corp.",
    description:
      "The bomb-defusing nailbiter of a party game! As interns at Bomb Corp., you must defuse random bombs in the office in order to keep your jobs. You’ll probably die, but it’ll be good work experience!",
    url: "https://jackboxgames.com/bomb-corp",
    image: "bomb_corp.jpg",
    minimumPlayers: 1,
    maximumPlayers: 4,
    freeToHost: false,
    freeToJoin: true,
    group: {
      name: "The Jackbox Party Pack 2",
      url: "https://www.jackboxgames.com/party-pack-two/",
    },
  },
  {
    name: "Fibbage 2",
    description:
      "The runaway hit bluffing game with over 500 brand-new questions, more than 2x the original! Plus new features, like the deFIBrillator!",
    url: "https://jackboxgames.com/fibbage-two",
    image: "fibbage_2.jpg",
    minimumPlayers: 2,
    maximumPlayers: 8,
    freeToHost: false,
    freeToJoin: true,
    group: {
      name: "The Jackbox Party Pack 2",
      url: "https://www.jackboxgames.com/party-pack-two/",
    },
  },
  {
    name: "Bidiots",
    description:
      "The absurd art auction game where you draw right there on your phone or tablet. Outbid your opponents for weird art pieces – drawn by players themselves – and win this strangely competitive auction game! Don’t be a bidiot!",
    url: "https://jackboxgames.com/bidiots",
    image: "bidiots.jpg",
    minimumPlayers: 3,
    maximumPlayers: 6,
    freeToHost: false,
    freeToJoin: true,
    group: {
      name: "The Jackbox Party Pack 2",
      url: "https://www.jackboxgames.com/party-pack-two/",
    },
  },
  {
    name: "Earwax",
    description:
      "The hear-larious sound-effects game that will leave you up to your ears in laughter! Cow moo? Huge explosion? Or tiny fart? Which to choose?",
    url: "https://jackboxgames.com/earwax",
    image: "earwax.jpg",
    minimumPlayers: 3,
    maximumPlayers: 8,
    freeToHost: false,
    freeToJoin: true,
    group: {
      name: "The Jackbox Party Pack 2",
      url: "https://www.jackboxgames.com/party-pack-two/",
    },
  },
  {
    name: "Quiplash XL",
    description:
      "The say-anything, gut-busting Quiplash XL, which includes everything in Quiplash, Quip Pack 1, AND over 100 brand-new prompts!",
    url: "https://jackboxgames.com/quiplash-xl",
    image: "quiplash_xl.jpg",
    minimumPlayers: 3,
    maximumPlayers: 8,
    freeToHost: false,
    freeToJoin: true,
    group: {
      name: "The Jackbox Party Pack 2",
      url: "https://www.jackboxgames.com/party-pack-two/",
    },
  },
  {
    name: "Trivia Murder Party",
    description:
      "A deadly quiz show where you match wits with a trivia-obsessed killer.",
    url: "https://jackboxgames.com/trivia-murder-party",
    image: "trivia_murder_party.jpg",
    minimumPlayers: 1,
    maximumPlayers: 8,
    freeToHost: false,
    freeToJoin: true,
    group: {
      name: "The Jackbox Party Pack 3",
      url: "https://www.jackboxgames.com/party-pack-three/",
    },
  },
  {
    name: "Guesspionage",
    description: "The brain-battering data-mining guessing game.",
    url: "https://jackboxgames.com/guesspionage",
    image: "guesspionage.jpg",
    minimumPlayers: 2,
    maximumPlayers: 8,
    freeToHost: false,
    freeToJoin: true,
    group: {
      name: "The Jackbox Party Pack 3",
      url: "https://www.jackboxgames.com/party-pack-three/",
    },
  },
  {
    name: "Fakin' It",
    description:
      "One of your friends has something to hide in this sneaky game for tricksters.",
    url: "https://jackboxgames.com/fakin-it",
    image: "fakin_it.jpg",
    minimumPlayers: 3,
    maximumPlayers: 8,
    freeToHost: false,
    freeToJoin: true,
    group: {
      name: "The Jackbox Party Pack 3",
      url: "https://www.jackboxgames.com/party-pack-three/",
    },
  },
  {
    name: "Quiplash 2",
    description:
      "The say-anything sequel. Play all new questions or make your own!",
    url: "https://jackboxgames.com/quiplash-two",
    image: "quiplash_2.jpg",
    minimumPlayers: 3,
    maximumPlayers: 8,
    freeToHost: false,
    freeToJoin: true,
    group: {
      name: "The Jackbox Party Pack 3",
      url: "https://www.jackboxgames.com/party-pack-three/",
    },
  },
  {
    name: "Tee K.O.",
    description:
      "The t-shirt slugfest where you battle your custom t-shirts to the death!",
    url: "https://jackboxgames.com/tee-ko",
    image: "tee_ko.jpg",
    minimumPlayers: 3,
    maximumPlayers: 8,
    freeToHost: false,
    freeToJoin: true,
    group: {
      name: "The Jackbox Party Pack 3",
      url: "https://www.jackboxgames.com/party-pack-three/",
    },
  },
  {
    name: "Fibbage 3",
    description:
      "The blanking fun sequel with all-new question types and the game mode Fibbage: Enough About You where you guess the weird facts about your friends.",
    url: "https://jackboxgames.com/fibbage-three",
    image: "fibbage_3.png",
    minimumPlayers: 2,
    maximumPlayers: 8,
    freeToHost: false,
    freeToJoin: true,
    group: {
      name: "The Jackbox Party Pack 4",
      url: "https://www.jackboxgames.com/party-pack-four/",
    },
  },
  {
    name: "Monster Seeking Monster",
    description:
      "The spooky date-a-thon where you message and date fellow monsters with special powers.",
    url: "https://jackboxgames.com/monster-seeking-monster",
    image: "monster_seeking_monster.jpg",
    minimumPlayers: 3,
    maximumPlayers: 7,
    freeToHost: false,
    freeToJoin: true,
    group: {
      name: "The Jackbox Party Pack 4",
      url: "https://www.jackboxgames.com/party-pack-four/",
    },
  },
  {
    name: "Civic Doodle",
    description:
      "The one-up art game where you compete to improve the town murals. Play using your phones, tablets or computers. No extra controllers needed! Plus EVEN MORE features just for streamers!",
    url: "https://jackboxgames.com/civic-doodle",
    image: "civic_doodle.jpg",
    minimumPlayers: 3,
    maximumPlayers: 8,
    freeToHost: false,
    freeToJoin: true,
    group: {
      name: "The Jackbox Party Pack 4",
      url: "https://www.jackboxgames.com/party-pack-four/",
    },
  },
  {
    name: "Survive the Internet",
    description:
      "The web-based frame game where you twist your friends’ “online” comments in hilarious ways.",
    url: "https://jackboxgames.com/survive-the-internet",
    image: "survive_the_internet.jpg",
    minimumPlayers: 3,
    maximumPlayers: 8,
    freeToHost: false,
    freeToJoin: true,
    group: {
      name: "The Jackbox Party Pack 4",
      url: "https://www.jackboxgames.com/party-pack-four/",
    },
  },
  {
    name: "Bracketeering",
    description:
      "The deranged debate match where you place smart bets on stupid arguments.",
    url: "https://jackboxgames.com/bracketeering",
    image: "bracketeering.jpg",
    minimumPlayers: 3,
    maximumPlayers: 16,
    freeToHost: false,
    freeToJoin: true,
    group: {
      name: "The Jackbox Party Pack 4",
      url: "https://www.jackboxgames.com/party-pack-four/",
    },
  },
  {
    name: "You Don't Know Jack - Full Stream",
    description:
      "The pop-culture trivia mash-up YOU DON’T KNOW JACK: Full Stream. The classic returns, full of wild new surprises.",
    url: "https://jackboxgames.com/ydkj-full-stream",
    image: "full_stream.png",
    minimumPlayers: 1,
    maximumPlayers: 8,
    freeToHost: false,
    freeToJoin: true,
    group: {
      name: "The Jackbox Party Pack 5",
      url: "https://www.jackboxgames.com/party-pack-five/",
    },
  },
  {
    name: "Split The Room",
    description:
      "The what-if game Split the Room. Create strange and divisive hypothetical situations.",
    url: "https://jackboxgames.com/split-the-room",
    image: "split_the_room.png",
    minimumPlayers: 3,
    maximumPlayers: 8,
    freeToHost: false,
    freeToJoin: true,
    group: {
      name: "The Jackbox Party Pack 5",
      url: "https://www.jackboxgames.com/party-pack-five/",
    },
  },
  {
    name: "Mad Verse City",
    description:
      "The lyric-writing game Mad Verse City. Channel your inner MC as a rap battling robot.",
    url: "https://jackboxgames.com/mad-verse-city",
    image: "mad_verse_city.jpg",
    minimumPlayers: 3,
    maximumPlayers: 8,
    freeToHost: false,
    freeToJoin: true,
    group: {
      name: "The Jackbox Party Pack 5",
      url: "https://www.jackboxgames.com/party-pack-five/",
    },
  },
  {
    name: "Patently Stupid",
    description:
      "The competitive drawing game Patently Stupid. Create odd inventions to solve bizarre problems.",
    url: "https://jackboxgames.com/patently-stupid",
    image: "patently_stupid.png",
    minimumPlayers: 3,
    maximumPlayers: 8,
    freeToHost: false,
    freeToJoin: true,
    group: {
      name: "The Jackbox Party Pack 5",
      url: "https://www.jackboxgames.com/party-pack-five/",
    },
  },
  {
    name: "Zeeple Dome",
    description:
      "The deadliest game show in the Crab Nebula, Zeeple Dome! Fling yourself at bloodthirsty aliens to win millions of Zubabucks!",
    url: "https://jackboxgames.com/zeeple-dome",
    image: "zeeple_dome.jpg",
    minimumPlayers: 1,
    maximumPlayers: 6,
    freeToHost: false,
    freeToJoin: true,
    group: {
      name: "The Jackbox Party Pack 5",
      url: "https://www.jackboxgames.com/party-pack-five/",
    },
  },
  {
    name: "Trivia Murder Party 2",
    description:
      "The popular trivia deathmatch Trivia Murder Party 2. Try to survive the bizarre new minigames.",
    url: "https://jackboxgames.com/trivia-murder-party-two/",
    image: "trivia_murder_party_2.jpg",
    minimumPlayers: 1,
    maximumPlayers: 8,
    freeToHost: false,
    freeToJoin: true,
    group: {
      name: "The Jackbox Party Pack 6",
      url: "https://www.jackboxgames.com/party-pack-six/",
    },
  },
  {
    name: "Role Models",
    description:
      "The offbeat personality test Role Models. Find out who you really are. (Or at least what your friends think of you.)",
    url: "https://jackboxgames.com/role-models/",
    image: "role_models.jpg",
    minimumPlayers: 3,
    maximumPlayers: 6,
    freeToHost: false,
    freeToJoin: true,
    group: {
      name: "The Jackbox Party Pack 6",
      url: "https://www.jackboxgames.com/party-pack-six/",
    },
  },
  {
    name: "Joke Boat",
    description:
      "The comedy contest Joke Boat. Craft one-liners for a cruise ship talent show.",
    url: "https://jackboxgames.com/joke-boat/",
    image: "joke_boat.jpg",
    minimumPlayers: 3,
    maximumPlayers: 8,
    freeToHost: false,
    freeToJoin: true,
    group: {
      name: "The Jackbox Party Pack 6",
      url: "https://www.jackboxgames.com/party-pack-six/",
    },
  },
  {
    name: "Dictionarium",
    description:
      "The weird word circus Dictionarium. May the funniest definition win.",
    url: "https://jackboxgames.com/dictionarium/",
    image: "dictionarium.png",
    minimumPlayers: 3,
    maximumPlayers: 8,
    freeToHost: false,
    freeToJoin: true,
    group: {
      name: "The Jackbox Party Pack 6",
      url: "https://www.jackboxgames.com/party-pack-six/",
    },
  },
  {
    name: "Push The Button",
    description:
      "The hidden identity game Push The Button. Can you discover the aliens in time?",
    url: "https://jackboxgames.com/push-the-button/",
    image: "push_the_button.jpg",
    minimumPlayers: 4,
    maximumPlayers: 10,
    freeToHost: false,
    freeToJoin: true,
    group: {
      name: "The Jackbox Party Pack 6",
      url: "https://www.jackboxgames.com/party-pack-six/",
    },
  },
  {
    name: "Quiplash 3",
    description:
      "The say-anything threequel Quiplash 3 (3-8 players). It’s a head-to-head battle of the wits as you give hilarious responses to quirky prompts while everyone else votes for their favorite!",
    url: "https://www.jackboxgames.com/quiplash-three/",
    image: "quiplash_3.jpg",
    minimumPlayers: 3,
    maximumPlayers: 8,
    freeToHost: false,
    freeToJoin: true,
    group: {
      name: "The Jackbox Party Pack 7",
      url: "https://www.jackboxgames.com/party-pack-seven/",
    },
  },
  {
    name: "The Devils and the Details",
    description:
      "The collaborative chaos game The Devils and the Details (3-8 players). You’re a family of devils working together to survive in suburbia. Can you handle the daily torture of human life?",
    url: "https://www.jackboxgames.com/the-devils-and-the-details/",
    image: "the_devils_and_the_details.jpg",
    minimumPlayers: 3,
    maximumPlayers: 8,
    freeToHost: false,
    freeToJoin: true,
    group: {
      name: "The Jackbox Party Pack 7",
      url: "https://www.jackboxgames.com/party-pack-seven/",
    },
  },
  {
    name: "Champ’d Up",
    description:
      "The drawing fighting game Champ’d Up (3-8 players). Create absurd characters that will battle over unusual titles. Can you take down the heavy favorite?",
    url: "https://www.jackboxgames.com/champd-up/",
    image: "champd_up.jpg",
    minimumPlayers: 3,
    maximumPlayers: 8,
    freeToHost: false,
    freeToJoin: true,
    group: {
      name: "The Jackbox Party Pack 7",
      url: "https://www.jackboxgames.com/party-pack-seven/",
    },
  },
  {
    name: "Talking Points",
    description:
      "The on-the-spot public-speaking game Talking Points (3-8 players). Give a speech responding to picture slides you’ve never seen before or be the Assistant and approve pictures as fast as you can. Just keep talking whether it makes sense or not.",
    url: "https://www.jackboxgames.com/talking-points/",
    image: "talking_points.png",
    minimumPlayers: 3,
    maximumPlayers: 8,
    freeToHost: false,
    freeToJoin: true,
    group: {
      name: "The Jackbox Party Pack 7",
      url: "https://www.jackboxgames.com/party-pack-seven/",
    },
  },
  {
    name: "Blather ‘Round",
    description:
      "The pop culture guessing game Blather Round (2-6 players). Describe your secret prompt with a very limited vocabulary and hope that someone can figure it out in time. It’s a “GOOD” “FUN TIME” “EXPERIENCE.”",
    url: "https://www.jackboxgames.com/blather-round/",
    image: "blather_round.jpg",
    minimumPlayers: 2,
    maximumPlayers: 6,
    freeToHost: false,
    freeToJoin: true,
    group: {
      name: "The Jackbox Party Pack 7",
      url: "https://www.jackboxgames.com/party-pack-seven/",
    },
  },
  {
    name: "Drawful Animate",
    description:
      "It’s alive! The guessing game with terrible drawings and hilariously wrong answers makes a dynamic return. In this revamped title, players create looping, two-frame animations based on weird and random titles.",
    url: "https://www.jackboxgames.com/drawful-animate/",
    image: "drawful_animate.jpg",
    minimumPlayers: 3,
    maximumPlayers: 10,
    freeToHost: false,
    freeToJoin: true,
    group: {
      name: "The Jackbox Party Pack 8",
      url: "https://www.jackboxgames.com/party-pack-eight/",
    },
  },
  {
    name: "Job Job",
    description:
      "Use other people’s words to create unique and funny answers to classic job interview questions. Go head to head to see who scores the job!",
    url: "https://www.jackboxgames.com/job-job/",
    image: "job_job.png",
    minimumPlayers: 3,
    maximumPlayers: 10,
    freeToHost: false,
    freeToJoin: true,
    group: {
      name: "The Jackbox Party Pack 8",
      url: "https://www.jackboxgames.com/party-pack-eight/",
    },
  },
  {
    name: "The Poll Mine",
    description:
      "A survey game that’s all about YOU! Split into teams and see who can escape from the witch’s lair! Players individually rank their choices to a difficult question, then must guess how the group answered as a whole. How well do you know your friends?!",
    url: "https://www.jackboxgames.com/the-poll-mine/",
    image: "the_poll_mine.jpg",
    minimumPlayers: 2,
    maximumPlayers: 10,
    freeToHost: false,
    freeToJoin: true,
    group: {
      name: "The Jackbox Party Pack 8",
      url: "https://www.jackboxgames.com/party-pack-eight/",
    },
  },
  {
    name: "Weapons Drawn",
    description:
      "A social deduction game where everyone is both a murderer and a detective. Players doodle all the clues, hiding a letter from their name in the weapon drawings. Can you solve murders while trying to get away with your own?",
    url: "https://www.jackboxgames.com/weapons-drawn/",
    image: "weapons_drawn.jpg",
    minimumPlayers: 4,
    maximumPlayers: 8,
    freeToHost: false,
    freeToJoin: true,
    group: {
      name: "The Jackbox Party Pack 8",
      url: "https://www.jackboxgames.com/party-pack-eight/",
    },
  },
  {
    name: "The Wheel of Enormous Proportions",
    description:
      "Trivia has never been so large! A fantastic, mystical wheel challenges you with a variety of trivia prompts. Winners are awarded slices of the Wheel’s face with a chance to win big with each nail-biting spin. In the end, one player will have their most burning question answered by the great Wheel.",
    url: "https://www.jackboxgames.com/the-wheel-of-enormous-proportions/",
    image: "the_wheel_of_enormous_proportions.jpg",
    minimumPlayers: 3,
    maximumPlayers: 8,
    freeToHost: false,
    freeToJoin: true,
    group: {
      name: "The Jackbox Party Pack 8",
      url: "https://www.jackboxgames.com/party-pack-eight/",
    },
  },
  {
    name: "Drawful 2",
    description:
      "Your phones or tablets are your controllers! The game of terrible drawings and hilariously wrong answers.",
    url: "https://jackboxgames.com/drawful-two/",
    image: "drawful_2.jpg",
    minimumPlayers: 3,
    maximumPlayers: 8,
    freeToHost: false,
    freeToJoin: true,
  },
  {
    name: "Fibbage",
    description:
      "Fibbage is the lying, bluffing, fib-till-you-win trivia party game from the makers of YOU DON’T KNOW JACK! Fool your friends with your lies, avoid theirs, and find the (usually outrageous) truth. And get this: your phone or tablet is your controller!",
    url: "https://www.jackboxgames.com/fibbage/",
    minimumPlayers: 2,
    maximumPlayers: 8,
    freeToHost: false,
    freeToJoin: true,
  },
  {
    name: "Quiplash",
    description: "Quiplash is the gut-busting battle of wits and wittiness!",
    url: "https://www.jackboxgames.com/quiplash/",
    image: "quiplash.jpg",
    minimumPlayers: 3,
    maximumPlayers: 8,
    freeToHost: false,
    freeToJoin: true,
  },
  {
    name: "You Don't Know Jack - Classic Bundle",
    description:
      "Since 1995, Jackbox Games (formerly Jellyvision) has been making YOU DON’T KNOW JACK, the hit comedy trivia series where high culture and pop culture collide. And we refuse to stop until every human being has played it.",
    url: "https://www.jackboxgames.com/ydkj-classic-bundle/",
    minimumPlayers: 3,
    maximumPlayers: 8,
    freeToHost: false,
    freeToJoin: true,
  },
  {
    name: "Quiplash 2 InterLASHional",
    description:
      "The “say anything” party game is going international! All the hilarious content from Quiplash 2, now in French, Italian, German, and Spanish! With 100 NEW prompts in each language! (And you can still play in boring old English.) Get this QUINTILINGUAL Quiplash now, and take your next party global!",
    url: "https://www.jackboxgames.com/quiplash-two-interlashional/",
    image: "quiplash_2_interlashional.jpg",
    minimumPlayers: 3,
    maximumPlayers: 8,
    freeToHost: false,
    freeToJoin: true,
  },
  {
    name: "Roomerang",
    description:
      "In Roomerang, channel your inner reality TV star in an attempt to come out on top! Respond to prompts, bring the competition and role-play to avoid being voted out.",
    url: "https://www.jackboxgames.com/roomerang/",
    image: "roomerang.jpg",
    minimumPlayers: 4,
    maximumPlayers: 9,
    freeToHost: false,
    freeToJoin: true,
    group: {
      name: "The Jackbox Party Pack 9",
      url: "https://www.jackboxgames.com/party-pack-nine/",
    },
  },
  {
    name: "Junktopia",
    description:
      "In Junktopia, a strange wizard has turned you into a frog! Create hilarious backstories for weird objects and then get them appraised. The player with the most valuable items becomes human again!",
    url: "https://www.jackboxgames.com/junktopia/",
    image: "junktopia.jpg",
    minimumPlayers: 3,
    maximumPlayers: 8,
    freeToHost: false,
    freeToJoin: true,
    group: {
      name: "The Jackbox Party Pack 9",
      url: "https://www.jackboxgames.com/party-pack-nine/",
    },
  },
  {
    name: "Nonsensory",
    description:
      "Professor Nanners is here to test your NSP (Nonsensory Perception) in this drawing, writing, and guessing game! How close can you get to guessing where another player’s prompt ranks on the silliest of scales?",
    url: "https://www.jackboxgames.com/nonsensory/",
    image: "nonsensory.jpg",
    minimumPlayers: 3,
    maximumPlayers: 8,
    freeToHost: false,
    freeToJoin: true,
    group: {
      name: "The Jackbox Party Pack 9",
      url: "https://www.jackboxgames.com/party-pack-nine/",
    },
  },
  {
    name: "Fibbage 4",
    description:
      "The hilarious bluffing party game returns with an all-new Final Fibbage, video questions, fan-submitted questions, and Fibbage Enough About You mode! It’s a game so beloved that we decided to slap a 4 on it.",
    url: "https://www.jackboxgames.com/fibbage-four/",
    image: "fibbage_4.jpg",
    minimumPlayers: 3,
    maximumPlayers: 8,
    freeToHost: false,
    freeToJoin: true,
    group: {
      name: "The Jackbox Party Pack 9",
      url: "https://www.jackboxgames.com/party-pack-nine/",
    },
  },
  {
    name: "Quixort",
    description:
      "In this trivia sorting factory, work with your team to sort falling answers into their proper order before they hit the floor! Or, play the single player mode and see how many blocks you can sort before topping out. It’s as easy as A, C, B!",
    url: "https://www.jackboxgames.com/quixort/",
    image: "quixort.jpg",
    minimumPlayers: 1,
    maximumPlayers: 10,
    freeToHost: false,
    freeToJoin: true,
    group: {
      name: "The Jackbox Party Pack 9",
      url: "https://www.jackboxgames.com/party-pack-nine/",
    },
  },
];

const games: Game[] = webGames.concat(jackboxGames);

export default games;
