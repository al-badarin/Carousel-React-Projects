export const projects = [
   // BecomePro Website
  {
    id: 'becomepro-website',
    title: 'BecomePro – Football Training Platform',
    subtitle: 'Training, Nutrition, Mental Toughness',
    description:
      'BecomePro is a comprehensive platform for football players, offering resources on training, nutrition, mental toughness, and performance enhancement.',
    tech: ['React', 'JavaScript', 'Bootstrap', 'CSS3', 'HTML5', 'Node.js', 'Firebase'],
    repoUrl: 'https://github.com/al-badarin/BecomePro',
    liveUrl: 'https://becomepro-2024.web.app',
    images: [
      '/images/becomepro-1.png', // Add the actual screenshot paths
      '/images/becomepro-2.png',
    ],
    thumb: '/images/becomepro-1.png',
    highlights: [
      'User authentication with Formik and Yup',
      'Dynamic article management (create, edit, delete)',
      'Responsive design with loading indicators and notifications',
    ],
  },

  // Grip Socks BecomePro Website
  {
    id: 'grip-socks-becomepro',
    title: 'Grip Socks BecomePro – Product Promotion Platform',
    subtitle: 'Grip Socks for Football Players',
    description:
      'A dedicated platform promoting and selling high-quality grip socks, with a focus on product features, customer testimonials, and easy ordering.',
    tech: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Firebase'],
    repoUrl: 'https://github.com/al-badarin/Grip-Socks-BecomePro-Website',
    liveUrl: 'https://grip-socks-becomepro.web.app',
    images: [
      '/images/grip-socks-1.png', // Add the actual screenshot paths
      '/images/grip-socks-2.png',
    ],
    thumb: '/images/grip-socks-1.png',
    highlights: [
      'Responsive navigation and design',
      'Order form integrated with EmailJS',
      'Customer testimonials and FAQ sections',
    ],
  },
  
  // React Essentials
  {
    id: 'react-essentials',
    title: 'React Essentials – Core Concepts',
    subtitle: 'Components, Props, State & Hooks',
    description:
      'Foundational React project covering JSX, components, props, state, effects, and list & form rendering.',
    tech: ['React', 'JSX', 'Hooks', 'Vite', 'Tailwind'],
    repoUrl:
      'https://github.com/al-badarin/React-Projects/tree/main/01-React-Essentials-starting-project',
    liveUrl: 'https://react-essentials-albadarin.netlify.app/',
    images: [
      '/images/react-essentials-1.png',
      //   '/images/react-essentials-2.png',
    ],
    thumb: '/images/react-essentials-1.png',
    highlights: [
      'Stateful components & props drilling',
      'Conditional rendering & lists',
      'Form handling & validation basics',
    ],
  },

  // Tic Tac Toe
  {
    id: 'tic-tac-toe',
    title: 'Tic Tac Toe – Score & Persistence',
    subtitle: 'Game logic, state, and localStorage',
    description:
      'Classic Tic Tac Toe with score tracking, turn management, win detection, and persistence across reloads.',
    tech: ['React', 'Hooks', 'LocalStorage', 'Tailwind'],
    repoUrl:
      'https://github.com/al-badarin/React-Projects/tree/main/02-Tic-Tac-Toe-game-project',
    liveUrl: 'https://tic-tac-toe-albadarin.netlify.app/',
    images: [
      '/images/tic-tac-toe-1.png',
      // '/images/tic-tac-toe-2.png'
    ],
    thumb: '/images/tic-tac-toe-1.png',
    highlights: [
      'Win/draw detection & reset',
      'Scoreboard with persistence',
      'Keyboard-accessible controls',
    ],
  },

  // Investment Calculator
  {
    id: 'investment-calculator',
    title: 'Investment Calculator – Compound Growth',
    subtitle: 'Controlled forms & calculations',
    description:
      'Interactive calculator that visualizes compound interest over time with yearly breakdown and totals.',
    tech: ['React', 'Forms', 'State', 'Tailwind'],
    repoUrl:
      'https://github.com/al-badarin/React-Projects/tree/main/03-Investment-Calculator',
    liveUrl: 'https://investment-calculator-albadarin.netlify.app/',
    images: [
      '/images/investment-1.png',
      // '/images/investment-2.png'
    ],
    thumb: '/images/investment-1.png',
    highlights: [
      'Yearly table output',
      'Form validation & UX',
      'Derived state & memoization',
    ],
  },

  // Countdown Game
  {
    id: 'countdown-game',
    title: 'Countdown Game – Reflex Challenge',
    subtitle: 'Timers, effects & game loop',
    description:
      'Reflex-based game using timers and effects to manage countdowns, scoring, and difficulty.',
    tech: ['React', 'useEffect', 'Timers', 'Tailwind'],
    repoUrl:
      'https://github.com/al-badarin/React-Projects/tree/main/04-Countdown-Game',
    liveUrl: 'https://countdown-game-albadarin.netlify.app/',
    images: [
      '/images/countdown-1.png',
      // '/images/countdown-2.png'
    ],
    thumb: '/images/countdown-1.png',
    highlights: [
      'Accurate interval timing',
      'Responsive controls',
      'Accessible feedback cues',
    ],
  },

  // Project Management App
  {
    id: 'project-manager-app',
    title: 'Project Management App – Tasks & Projects',
    subtitle: 'Modals, CRUD, lists & state',
    description:
      'A small project/task manager with create/edit/delete flows, modal dialogs, and persisted state.',
    tech: ['React', 'CRUD', 'Dialogs', 'Tailwind'],
    repoUrl:
      'https://github.com/al-badarin/React-Projects/tree/main/05-project-management-app',
    liveUrl: 'https://project-manager-app-albadarin.netlify.app/',
    images: ['/images/pm-1.png', '/images/pm-2.png'],
    thumb: '/images/pm-1.png',
    highlights: [
      'Project & task relations',
      'Modal-based forms',
      'Empty/error state UX',
    ],
  },
];
