import { useLanguage } from "../i18n/LanguageContext";
import { BriefcaseIcon } from "./Icons";

function ProjectVisual({ index }: { index: number }) {
  const layouts = [
    "absolute h-24 w-24 rounded-full top-4 right-4 bg-primary/10",
    "absolute h-16 w-16 rounded-full bottom-8 left-6 bg-primary/15",
    "absolute h-20 w-20 rounded-full top-6 left-8 bg-primary/10",
    "absolute h-28 w-28 rounded-full bottom-4 right-6 bg-primary/15",
    "absolute h-24 w-24 rounded-full top-8 left-1/2 -translate-x-1/2 bg-primary/10",
    "absolute h-16 w-16 rounded-full bottom-8 right-10 bg-primary/15",
    "absolute h-20 w-20 rounded-full top-5 right-10 bg-primary/10",
    "absolute h-24 w-24 rounded-full bottom-6 left-8 bg-primary/15",
  ] as const;

  const a = layouts[(index * 2) % layouts.length];
  const b = layouts[(index * 2 + 1) % layouts.length];

  return (
    <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-border bg-sky-light">
      <div className={a} />
      <div className={b} />
      <span className="relative z-10 font-display text-5xl font-bold text-primary/35">
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
  );
}

export function Work() {
  const { t } = useLanguage();

  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="mb-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-light text-sky-deep">
            <BriefcaseIcon className="h-5 w-5" />
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">
            {t.work.title}
          </h2>
        </div>
        <span className="hidden text-sm text-muted-foreground sm:inline">
          {t.work.subtitle}
        </span>
      </div>

      <div className="space-y-16">
        {t.work.projects.map((project, index) => (
          <article
            key={project.id}
            className="grid gap-8 rounded-3xl border border-border bg-card p-6 transition-shadow hover:shadow-[0_20px_50px_-28px_#07689f66] md:grid-cols-12 md:p-8"
          >
            <div className="md:col-span-5">
              <ProjectVisual index={index} />
            </div>

            <div className="md:col-span-7">
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="font-medium text-sky-deep">{project.role}</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">{project.period}</span>
              </div>

              <h3 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl">
                {project.title}
              </h3>
              <p className="mt-1 text-lg text-muted-foreground">
                {project.summary}
              </p>

              <div className="mt-6 space-y-4">
                {(
                  [
                    ["context", t.work.context, project.context],
                    ["whatIDid", t.work.whatIDid, project.whatIDid],
                    ["outcome", t.work.outcome, project.outcome],
                  ] as const
                ).map(([key, label, value]) => (
                  <div key={key}>
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                      {label}
                    </h4>
                    <p className="mt-1 leading-relaxed text-muted-foreground">
                      {value || t.work.comingSoon}
                    </p>
                  </div>
                ))}
              </div>

              {project.tags.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
