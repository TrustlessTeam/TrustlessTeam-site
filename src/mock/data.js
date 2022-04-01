import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'TrustlessTeam, DAO', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Building Blockchain Entertainment', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: 'We Build Blockchain Fun.',
  cta: 'Projects',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  title: 'CORE TEAM: ',
  paragraphOne: '',
  paragraphTwo: 'Edd Norris: #GameDev, Blockchain',
  paragraphThree: 'Isaac Schwab : #WebDev, Blockchain',
  githubOne: '',
  twitterOne: '',
  githubTwo: 'https://github.com/twobitEDD',
  twitterTwo: 'https://twitter.com/eddnorris',
  githubThree: 'https://github.com/isaacschwab',
  twitterThree: 'https://twitter.com/devschwab',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'fishingscreenshot.png',
    pdf: 'https://bafybeifwguc5jfma7kplmtljp373ccowavhxdrampviaqcit2e5zw6tn4a.ipfs.dweb.link/',
    title: 'FishFight.one',
    info: 'FishFight is a collectable NFT game where you catch FISH on an alien world. ❄️   -- Once you catch your $FISH, they will only want to do $ONE thing: FIGHT!💀 -- After that, they\'re gonna want to BREED...💞',
    info2: 'Collect and enjoy interactive experiences with yours & other people\'s $FISH across the world! 💙',
    info3: 'Catch them, trade them, sell them, earn FISHFOOD, FISHEGG & FISHSCALES via Gameplay!  Including feeding them fish from other games like #DefiKingdoms #Bloaters ',
    url: 'https://FishFight.one',
    repo: 'https://bafybeifwguc5jfma7kplmtljp373ccowavhxdrampviaqcit2e5zw6tn4a.ipfs.dweb.link/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ScribblesNFTOffspring.png',
    pdf: 'https://bafybeifwguc5jfma7kplmtljp373ccowavhxdrampviaqcit2e5zw6tn4a.ipfs.dweb.link/',
    title: 'ScribblesNFToffspring',
    info: 'TrustlessTeam is proud to maintain the entirely On-Chain Collectable-NFT Modern Art Project ScribblesNFT.',
    info2: '1024 Randomly Generated NFT Pieces Minted on the Harmony $ONE Blockchain by @BadAtBlockchain!',
    info3: 'Series 2 will be called ScribblesNFToffspring, & it is a generative NFT project for ScribblesNFT Holders Only... Stay tuned!',
    url: 'https://nftkey.app/collections/scribbles/',
    //repo: 'https://bafybeifwguc5jfma7kplmtljp373ccowavhxdrampviaqcit2e5zw6tn4a.ipfs.dweb.link/', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'TrustlessTeam has recently launched a Staking Validator on Harmony! ',
  cta2: 'Your support would be very much appreciated! ',
  btn: 'STAKE NOW!',
  email: 'https://staking.harmony.one/validators/mainnet/one1w9g7j40ctzlffmjrp6nmypdupsmyh0u90yn9xs',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://www.twitter.com/TrustlessTeam',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://www.github.com/TrustlessTeam',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
