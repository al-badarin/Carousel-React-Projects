import { Routes, Route, Link } from 'react-router-dom';
import Carousel from './components/Carousel.jsx';
import ProjectCard from './components/ProjectCard.jsx';
import ProjectDetail from './components/ProjectDetail.jsx';
import { projects } from './data/projects.js';

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
          © {new Date().getFullYear()} Jamal Al Badrin. Built with React + Tailwind.
        </div>
      </footer>
    </div>
  );
}

function Home() {
  return (
    <main className="container py-12">
      <h1 className="text-4xl font-extrabold tracking-tight">
        Featured Projects
      </h1>
      <p className="text-white/70 mt-2">
        A minimal, reusable carousel you can drop into any site.
      </p>

      <section className="mt-8">
        <Carousel
          items={projects}
          itemWidth={360}
          autoplay
          ariaLabel="Projects gallery"
          renderItem={(p) => <ProjectCard p={p} />}
        />
      </section>

      <section className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.id} p={p} />
        ))}
      </section>
    </main>
  );
}

function NotFound() {
  return (
    <div className="container py-16">
      <h1 className="text-2xl font-bold">404</h1>
      <p className="text-white/70 mt-2">Page not found.</p>
    </div>
  );
}

export default App;
