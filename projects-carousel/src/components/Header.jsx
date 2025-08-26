import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-neutral-950/70 backdrop-blur border-b border-neutral-800/80 shadow-[inset_0_-1px_0_0_rgba(255,255,255,0.05)]">
      {/* Why: consistent width + spacing, good readability */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-14 flex items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-md"
            aria-label="Home"
          >
            <span className="text-base font-semibold tracking-tight bg-gradient-to-r from-neutral-50 to-neutral-300 bg-clip-text text-transparent">
              My Projects
            </span>
          </Link>

          <ul className="hidden sm:flex items-center gap-2 text-xs">
            {['React', 'Tailwind', 'JSX'].map((t) => (
              <li key={t}>
                <span className="inline-flex items-center rounded-full border border-neutral-700/70 bg-neutral-900 px-2.5 py-1 text-neutral-300 hover:text-white">
                  {t}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
