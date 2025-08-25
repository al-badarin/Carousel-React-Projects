import { Routes, Route, Link } from 'react-router-dom';
import { projects } from './data/projects.js';

import Carousel from './components/Carousel.jsx';
import ProjectCard from './components/ProjectCard.jsx';
import ProjectDetail from './components/ProjectDetail.jsx';
import Header from './components/Header.jsx';

function App() {
  return (
    <div className="bg-neutral-950 text-neutral-100 min-h-screen">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <footer className="mt-16 border-t border-neutral-800/80">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-neutral-300/80">
          © {new Date().getFullYear()} Jamal Al Badrin. Built with React +
          Tailwind.
        </div>
      </footer>
    </div>
  );
}

function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
        Featured React Projects
      </h1>
      {/* <p className="text-neutral-300 mt-2">
        A minimal, reusable carousel you can drop into any site.
      </p> */}

      <section className="mt-8">
        <Carousel
          items={projects}
          itemWidth={320}
          autoplay
          ariaLabel="Projects gallery"
          renderItem={(p) => <ProjectCard p={p} />}
        />
      </section>

      <section className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.id} p={p} />
        ))}
      </section>
    </main>
  );
}

function NotFound() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-2xl font-bold">404</h1>
      <p className="text-neutral-300 mt-2">Page not found.</p>
    </div>
  );
}

export default App;
