import { Link } from "@tanstack/react-router";

type Crumb = { label: string; to?: string };

export function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
}) {
  return (
    <section className="bg-surface-alt">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Trilha" className="mb-4 text-xs text-ink-muted">
            <ol className="flex flex-wrap items-center gap-1">
              {breadcrumbs.map((c, i) => (
                <li key={i} className="flex items-center gap-1">
                  {c.to ? (
                    <Link to={c.to} className="hover:text-primary">{c.label}</Link>
                  ) : (
                    <span>{c.label}</span>
                  )}
                  {i < breadcrumbs.length - 1 && <span>/</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-primary uppercase">
            {eyebrow}
          </p>
        )}
        <h1 className="font-serif text-4xl text-ink sm:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base text-ink-muted sm:text-lg">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
