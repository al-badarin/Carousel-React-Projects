import { Routes, Route, Link } from 'react-router-dom';
import { projects } from './data/projects.js';

import Header from './components/Header.jsx';
import Carousel from './components/Carousel.jsx';
import ProjectCard from './components/ProjectCard.jsx';
import ProjectDetail from './components/ProjectDetail.jsx';

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
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-center text-neutral-300/80">
          © {new Date().getFullYear()} Jamal Al Badarin. 
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

      {/* Projects Carousel */}
      <section className="mt-8">
        <Carousel
          items={projects}
          itemWidth={320}
          autoplay
          ariaLabel="Projects gallery"
          renderItem={(p) => <ProjectCard p={p} />}
        />
      </section>

      {/* Text Section to separate the carousel and projects list */}
      <section className="mt-16 text-center bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-500 text-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          A Collection of My React Projects
        </h2>
        <p className="text-lg md:text-xl">
          Here you'll find a few of the React projects I've worked on. These
          projects are built with clean, reusable code, and are designed to
          showcase modern web development practices.
        </p>
      </section>

      {/* Projects List Section */}
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
