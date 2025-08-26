import { Link } from 'react-router-dom';

export default function ProjectCard({ p }) {
  return (
    <div className="rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow">
      <Link to={`/project/${p.id}`} aria-label={`Open details for ${p.title}`}>
        <img
          src={p.thumb}
          alt={`${p.title} preview`}
          className="aspect-video w-full object-cover"
          loading="lazy"
        />
      </Link>

      <div className="p-4">
        <div className="flex items-baseline justify-between gap-2">
          <Link
            to={`/project/${p.id}`}
            aria-label={`Open details for ${p.title}`}
            className="hover:underline"
          >
            <h3 className="text-lg font-semibold">{p.title}</h3>
          </Link>
          {p.subtitle && (
            <span className="text-xs text-neutral-300/80">{p.subtitle}</span>
          )}
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {p.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded-full bg-neutral-800 border border-neutral-700/80"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <a
            className="text-center rounded-md px-3 py-2 border border-neutral-700/70 bg-neutral-900 hover:bg-neutral-800"
            href={p.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </a>
          <a
            // className="text-center rounded-md px-3 py-2 text-black"
            // style={{ backgroundColor: '#f8cc27' }}
            className="text-center rounded-md px-3 py-2 bg-indigo-500 hover:bg-indigo-600 text-white"
            href={p.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live
          </a>
        </div>
      </div>
    </div>
  );
}
