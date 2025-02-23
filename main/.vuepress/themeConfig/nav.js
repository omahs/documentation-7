/* --- NAVBAR (top) --- */
// NOTES:
// Internal links: Must have a corresponding folder with a README.md file
// Links must be absolute with trailing slash '/guide/'
// Trailing slash implies it is looking for a .md file

module.exports = [
  {
    text: 'Getting Started',
    ariaLabel: 'Getting Started Menu',
    items: [
      {
        text: 'Installing the Agoric SDK',
        ariaLabel: 'Installing the Agoric SDK Menu',
        link: '/guides/getting-started/',
      },
      {
        text: 'Starting a Project',
        ariaLabel: 'Starting a Project Menu',
        link: '/guides/getting-started/start-a-project',
      },
      {
        text: 'Deploying Smart Contracts',
        ariaLabel: 'Deploying Menu',
        link: '/guides/getting-started/deploying',
      },
    ]
  },
  {
  text: 'Agoric Components',
  ariaLabel: 'Agoric Components Menu',
  items: [
      {
      text: 'Agoric CLI',
      ariaLabel: 'Agoric CLI',
      link: '/guides/agoric-cli/',
      },
      {
      text: 'JavaScript Framework',
      ariaLabel: 'JavaScript Framework',
      link: '/guides/js-programming/',
      },
      {
      text: 'Wallet',
      ariaLabel: 'Wallet',
      link: '/guides/wallet/'
      },
      {
      text: 'ERTP',
      ariaLabel: 'ERTP',
      link: '/guides/ertp/'
      },
      {
      text: 'Zoe',
      ariaLabel: 'Zoe',
      link: '/guides/zoe/'
      },
      {
      text: 'Example Zoe Contracts',
      ariaLabel: 'Example Zoe Contracts',
      link: '/guides/zoe/contracts/'
      },
      {
      text: 'Agoric Dapps',
      ariaLabel: 'Agoric Dapps',
      link: '/guides/dapps/'
      },
    ]
  },
  {
    text: 'API Reference',
    ariaLabel: 'API Reference Menu',
    items: [
      {
          text: 'Wallet API',
          ariaLabel: 'Wallet API Menu',
          link: '/reference/wallet-api',
      },
      {
          text: 'ERTP API',
          ariaLabel: 'ERTP API Menu',
          link: '/reference/ertp-api/',
      },
      {
        text: 'REPL API',
        ariaLabel: 'REPL API Menu',
        link: '/reference/repl/',
      },
      {
        text: 'Zoe API',
        ariaLabel: 'ZOE API Menu',
        link: '/reference/zoe-api/',
      },
    ]
  },
  {
    text: 'Glossary',
    ariaLabel: 'Glossary Menu',
    link: '/glossary/'
  },
  {
    text: 'Learn More',
    ariaLabel: 'Learn More Menu',
    items: [
      {
        text: 'Agoric',
        ariaLabel: 'Agoric Homepage Link',
        link: 'https://agoric.com/'
      },      
      {
        text: 'Papers',
        ariaLabel: 'Papers Page Link',
        link: 'https://agoric.com/papers/'
      },
      {
        text: 'YouTube',
        ariaLabel: 'Agoric YouTube Channel Page Link',
        link: 'https://www.youtube.com/channel/UCpY91oQLh_Lp0mitdZ5bYWg/'
      },     
      {
        text: 'Github',
        ariaLabel: 'Agoric Github Link',
        link: 'https://github.com/Agoric/'
      }
    ]
  },  
]
