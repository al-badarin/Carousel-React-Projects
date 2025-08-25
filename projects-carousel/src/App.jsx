import { Routes, Route, Link } from 'react-router-dom';
// import Carousel from './components/Carousel.jsx';
// import ProjectCard from './components/ProjectCard.jsx';
import ProjectDetail from './components/ProjectDetail.jsx';
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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <footer className="mt-16 border-t border-white/10">
        <div className="container py-8 text-sm text-white/60">
          © {new Date().getFullYear()} Your Name. Built with React + Tailwind.
        </div>
      </footer>
    </div>
  );
}

export default App;
