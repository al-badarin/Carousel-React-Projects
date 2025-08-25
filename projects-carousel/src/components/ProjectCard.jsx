import { Link } from 'react-router-dom';

export default function ProjectCard({ p }) {
  <div className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 shadow-xl">
    <Link to={`/project/${p.id}`} aria-label={`Open details for ${p.title}`}>
      <img
        src={p.thumb}
        alt={`${p.title} preview`}
        className="aspect-video w-full object-cover group-hover:scale-105 transition"
        loading="lazy"
      />
    </Link>
    <div className="p-4">
      <div className="flex items-baseline justify-between gap-2">
        <h3 className="text-lg font-semibold">{p.title}</h3>
        {p.subtitle && (
          <span className="text-xs text-white/60">{p.subtitle}</span>
        )}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {p.tech.slice(0, 4).map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <a
          className="text-center rounded-xl px-3 py-2 bg-white/10 hover:bg-white/20 border border-white/10"
          href={p.repoUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${p.title} code on GitHub`}
        >
          Code
        </a>
        <a
          className="text-center rounded-xl px-3 py-2 bg-indigo-500/90 hover:bg-indigo-500 text-white"
          href={p.liveUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Visit ${p.title} website`}
        >
          Live
        </a>
      </div>
    </div>
    {/* Clickable overlay to open details without blocking buttons */}
    <Link
      to={`/project/${p.id}`}
      className="absolute inset-0"
      aria-label={`Open ${p.title} details`}
    />
  </div>;
}
