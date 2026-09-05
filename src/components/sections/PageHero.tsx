import { Link } from "@tanstack/react-router";

type Crumb = { label: string; to?: string };

export function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
  index,
  size = "default",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
  /** Editorial index mark shown next to the title, e.g. "01". */
  index?: string;
  size?: "default" | "compact";
}) {
  return (
    <section className="border-b border-border bg-surface-alt">
      <div
        className={
          "mx-auto max-w-6xl px-4 sm:px-6 " +
          (size === "compact" ? "py-10 lg:py-14" : "py-14 lg:py-20")
        }
      >
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Trilha" className="mb-6 text-xs text-ink-muted">
            <ol className="flex flex-wrap items-center gap-1.5">
              {breadcrumbs.map((c, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  {c.to ? (
                    <Link to={c.to} className="hover:text-primary">{c.label}</Link>
                  ) : (
                    <span className="text-ink">{c.label}</span>
                  )}
                  {i < breadcrumbs.length - 1 && <span className="text-border">/</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className="flex items-start gap-5 sm:gap-8">
          <span aria-hidden className="mt-2 h-12 w-[3px] shrink-0 bg-primary sm:h-14" />
          <div className="min-w-0">
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              {eyebrow && (
                <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">
                  {eyebrow}
                </p>
              )}
              {index && (
                <span className="font-sans text-sm text-ink-muted/60">{index}</span>
              )}
            </div>
            <h1 className="mt-2 font-sans text-4xl leading-[1.1] text-ink sm:text-5xl lg:text-[3.25rem]">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-4 max-w-2xl text-base text-ink-muted sm:text-lg">{subtitle}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
