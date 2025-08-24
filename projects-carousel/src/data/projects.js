export const projects = [
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
      '/images/react-essentials-1.jpg',
      '/images/react-essentials-2.jpg',
    ],
    thumb: '/images/react-essentials-1.jpg',
    highlights: [
      'Stateful components & props drilling',
      'Conditional rendering & lists',
      'Form handling & validation basics',
    ],
  },
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
    images: ['/images/tic-tac-toe-1.jpg', '/images/tic-tac-toe-2.jpg'],
    thumb: '/images/tic-tac-toe-1.jpg',
    highlights: [
      'Win/draw detection & reset',
      'Scoreboard with persistence',
      'Keyboard-accessible controls',
    ],
  },
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
    images: ['/images/investment-1.jpg', '/images/investment-2.jpg'],
    thumb: '/images/investment-1.jpg',
    highlights: [
      'Yearly table output',
      'Form validation & UX',
      'Derived state & memoization',
    ],
  },
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
    images: ['/images/countdown-1.jpg', '/images/countdown-2.jpg'],
    thumb: '/images/countdown-1.jpg',
    highlights: [
      'Accurate interval timing',
      'Responsive controls',
      'Accessible feedback cues',
    ],
  },
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
    images: ['/images/pm-1.jpg', '/images/pm-2.jpg'],
    thumb: '/images/pm-1.jpg',
    highlights: [
      'Project & task relations',
      'Modal-based forms',
      'Empty/error state UX',
    ],
  },
];
