import Carousel from "./Carousel";

export default function ProjectDetail() {
  const { id } = useParams();
  const nav = useNavigate();
  const p = useMemo(() => projects.find((x) => x.id === id), [id]);

  // guard: unknown id
  if (!p) {
    return (
      <div className="container py-16">
        <p className="text-white/70">Project not found.</p>
        <button
          className="mt-6 px-4 py-2 rounded-xl bg-white/10"
          onClick={() => nav(-1)}
        >
          Go back
        </button>
      </div>
    );
  }

  return (
    <div className="container py-10">
      {/* Back Button */}
      <button
        onClick={() => nav(-1)}
        className="mb-6 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10"
        aria-label="Go back"
      >
        ← Back
      </button>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Hero + Meta */}
        <img
          src={p.thumb}
          alt={`${p.title} hero`}
          className="rounded-2xl border border-white/10 shadow-2xl"
        />
        <div>
          <h1 className="text-3xl font-bold">{p.title}</h1>
          {p.subtitle && <p className="text-white/70 mt-1">{p.subtitle}</p>}

          {/* Tech Chips */}
          <div className="mt-4 flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Description + Highlights */}
          <p className="mt-6 text-white/90 leading-relaxed">{p.description}</p>
          {p.highlights?.length > 0 && (
            <ul className="mt-4 list-disc list-inside text-white/80 space-y-1">
              {p.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          )}

          {/* primary actions */}
          <div className="mt-6 flex gap-3">
            <a
              className="rounded-xl px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10"
              href={p.repoUrl}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="rounded-xl px-4 py-2 bg-indigo-500/90 hover:bg-indigo-500 text-white"
              href={p.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              Visit site
            </a>
          </div>
        </div>
      </div>

      {/* screenshots carousel (conditional) */}
      {p.images?.length > 1 && (
        <section className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Screenshots</h2>
          <Carousel
            items={p.images}
            itemWidth={420}
            ariaLabel={`${p.title} screenshots`}
            renderItem={(src) => (
              <img
                src={src}
                alt="Project screenshot"
                className="rounded-xl border border-white/10 aspect-video object-cover"
                loading="lazy"
              />
            )}
          />
        </section>
      )}
    </div>
  );
}
