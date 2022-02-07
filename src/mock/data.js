import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Trustless Team, DAO', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Building Trustless Technology', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: 'Edd Norris : GameDev, Blockchain',
  paragraphTwo: 'Isaac Schwab : WebDev, Blockchain',
  paragraphThree: '',
  githubOne: 'https://github.com/twobitEDD',
  githubTwo: 'https://github.com/isaacschwab',
  githubThree: '',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'FishFight.one',
    info: 'Fish Fight is a collectable NFT game where you go fishing on an alien world.',
    info2: 'Once you catch your fish, they will only want to do $ONE thing... FIGHT!',
    url: 'https://FishFight.one',
    repo: 'https://github.com/TrustlessTeam/FishFight', // if no repo, the button will not show up
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
