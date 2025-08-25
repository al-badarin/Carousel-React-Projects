import { Routes, Route, Link } from 'react-router-dom';
// import Carousel from './components/Carousel.jsx';
// import ProjectCard from './components/ProjectCard.jsx';
// import ProjectDetail from './pages/ProjectDetail.jsx';
// import { projects } from './data/projects.js';

function App() {
  return (
    <div>
      <header className="sticky top-0 z-40 backdrop-blur bg-neutral-950/70 border-b border-white/10">
        <div className="container flex items-center justify-between py-4">
          <Link to="/" className="font-bold tracking-tight">
            My Projects
          </Link>
          <nav className="text-sm text-white/70">React • Tailwind • Router</nav>
        </div>
      </header>

}

export default App;
