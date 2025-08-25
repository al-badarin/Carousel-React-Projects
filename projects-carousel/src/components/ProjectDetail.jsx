// File: src/components/ProjectDetail.jsx
import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Carousel from './Carousel.jsx';
import { projects } from '../data/projects.js';

export default function ProjectDetail() {
  const { id } = useParams();
  const nav = useNavigate();
  const p = useMemo(() => projects.find((x) => x.id === id), [id]);

  if (!p) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-16">
        <p className="text-neutral-300">Project not found.</p>
        <button
          className="mt-6 px-4 py-2 rounded-md border border-neutral-700/70 bg-neutral-900"
          onClick={() => nav(-1)}
        >
          Go back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <button
        onClick={() => nav(-1)}
        className="mb-6 px-3 py-2 rounded-md border border-neutral-700/70 bg-neutral-900 hover:bg-neutral-800"
        aria-label="Go back"
      >
        ← Back
      </button>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <img
          src={p.thumb}
          alt={`${p.title} hero`}
          className="rounded-xl border border-neutral-800 shadow"
        />
        <div>
          <h1 className="text-3xl font-bold">{p.title}</h1>
          {p.subtitle && <p className="text-neutral-300 mt-1">{p.subtitle}</p>}

          <div className="mt-4 flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-1 rounded-full bg-neutral-800 border border-neutral-700/80"
              >
                {t}
              </span>
            ))}
          </div>

          <p className="mt-6 text-neutral-100/90 leading-relaxed">
            {p.description}
          </p>
          {p.highlights?.length > 0 && (
            <ul className="mt-4 list-disc list-inside text-neutral-200/80 space-y-1">
              {p.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          )}

          <div className="mt-6 flex gap-3">
            <a
              className="rounded-md px-4 py-2 border border-neutral-700/70 bg-neutral-900 hover:bg-neutral-800"
              href={p.repoUrl}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="rounded-md px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white"
              href={p.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              Visit site
            </a>
          </div>
        </div>
      </div>

      {p.images?.length > 1 && (
        <section className="mt-12">
          <h2 className="text-xl font-semibold mb-3">Screenshots</h2>
          <Carousel
            items={p.images}
            itemWidth={420}
            ariaLabel={`${p.title} screenshots`}
            renderItem={(src) => (
              <img
                src={src}
                alt="Project screenshot"
                className="rounded-lg border border-neutral-800 aspect-video object-cover"
                loading="lazy"
              />
            )}
          />
        </section>
      )}
    </div>
  );
}
