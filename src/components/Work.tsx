import type { ReactNode } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { BriefcaseIcon } from "./Icons";

function VisualShell({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) {
  return (
    <div
      className="relative flex aspect-4/3 items-center justify-center overflow-hidden rounded-2xl border border-border bg-sky-light"
      aria-hidden
    >
      <div className="pointer-events-none absolute -right-8 -top-10 h-36 w-36 rounded-full bg-primary/15" />
      <div className="pointer-events-none absolute -bottom-10 -left-6 h-28 w-28 rounded-full bg-accent/25" />
      <div className="relative z-10 w-[82%]">{children}</div>
      <span className="absolute bottom-3 right-3 rounded-full border border-border/50 bg-card/70 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-sky-deep/70 backdrop-blur-sm">
        {label}
      </span>
    </div>
  );
}

function OdtVisual() {
  return (
    <VisualShell label="Web platform">
      <div className="overflow-hidden rounded-xl border border-sky-deep/15 bg-card shadow-sm">
        <div className="flex items-center gap-1.5 border-b border-border/60 bg-sky-light/40 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-primary/50" />
          <span className="h-2 w-2 rounded-full bg-accent/70" />
          <span className="h-2 w-2 rounded-full bg-sky-deep/30" />
          <span className="ml-2 h-2 flex-1 rounded-full bg-sky-deep/10" />
        </div>
        <div className="space-y-2.5 p-3">
          <div className="h-2.5 w-2/5 rounded-full bg-sky-deep/20" />
          <div className="grid grid-cols-2 gap-2">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-lg border border-border/70 bg-sky-light/30 p-2"
              >
                <div className="mb-2 h-8 rounded-md bg-primary/20" />
                <div className="h-1.5 w-3/4 rounded-full bg-sky-deep/20" />
                <div className="mt-1 h-1.5 w-1/2 rounded-full bg-sky-deep/10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </VisualShell>
  );
}

function SxExpoVisual() {
  return (
    <VisualShell label="Backoffice · App">
      <div className="relative flex items-end justify-center gap-3">
        <div className="w-[62%] overflow-hidden rounded-lg border border-sky-deep/15 bg-card shadow-sm">
          <div className="flex items-center gap-1 border-b border-border/60 bg-sky-light/40 px-2 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
            <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
            <span className="ml-1 h-1.5 flex-1 rounded-full bg-sky-deep/10" />
          </div>
          <div className="flex gap-2 p-2.5">
            <div className="w-1/4 space-y-1.5">
              <div className="h-1.5 rounded-full bg-sky-deep/20" />
              <div className="h-1.5 rounded-full bg-sky-deep/10" />
              <div className="h-1.5 rounded-full bg-sky-deep/10" />
              <div className="h-1.5 rounded-full bg-primary/30" />
            </div>
            <div className="flex-1 space-y-1.5">
              <div className="h-8 rounded-md bg-primary/15" />
              <div className="grid grid-cols-3 gap-1">
                <div className="h-5 rounded bg-sky-light/60" />
                <div className="h-5 rounded bg-accent/35" />
                <div className="h-5 rounded bg-sky-light/60" />
              </div>
              <div className="h-1.5 w-4/5 rounded-full bg-sky-deep/15" />
            </div>
          </div>
        </div>
        <div className="w-[28%] overflow-hidden rounded-[1.1rem] border-2 border-sky-deep/20 bg-card shadow-sm">
          <div className="mx-auto mt-1.5 h-1 w-6 rounded-full bg-sky-deep/20" />
          <div className="space-y-1.5 p-2 pt-2.5">
            <div className="h-10 rounded-lg bg-primary/20" />
            <div className="h-1.5 rounded-full bg-sky-deep/20" />
            <div className="h-1.5 w-2/3 rounded-full bg-sky-deep/10" />
            <div className="mt-1 grid grid-cols-2 gap-1">
              <div className="h-4 rounded bg-sky-light/70" />
              <div className="h-4 rounded bg-accent/40" />
            </div>
          </div>
          <div className="mx-auto mb-1.5 mt-1 h-1 w-8 rounded-full bg-sky-deep/15" />
        </div>
      </div>
    </VisualShell>
  );
}

function CarbonMiceVisual() {
  const bars = [38, 62, 45, 78, 55, 70];
  return (
    <VisualShell label="Dashboard">
      <div className="overflow-hidden rounded-xl border border-sky-deep/15 bg-card shadow-sm">
        <div className="flex items-center justify-between border-b border-border/60 px-3 py-2">
          <div className="h-2 w-16 rounded-full bg-sky-deep/20" />
          <div className="flex gap-1">
            <span className="h-4 w-8 rounded bg-primary/20" />
            <span className="h-4 w-8 rounded bg-accent/35" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 p-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="rounded-lg border border-border/60 bg-sky-light/25 p-2"
            >
              <div className="h-1.5 w-1/2 rounded-full bg-sky-deep/15" />
              <div className="mt-2 h-3 w-3/4 rounded-md bg-sky-deep/25" />
            </div>
          ))}
        </div>
        <div className="flex items-end gap-1.5 px-3 pb-3">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-md bg-primary/35"
              style={{ height: `${h * 0.45}px` }}
            />
          ))}
        </div>
      </div>
    </VisualShell>
  );
}

function KtcVisual() {
  return (
    <VisualShell label="Mobile app">
      <div className="mx-auto w-[42%] overflow-hidden rounded-[1.35rem] border-[2.5px] border-sky-deep/20 bg-card shadow-sm">
        <div className="mx-auto mt-2 h-1.5 w-10 rounded-full bg-sky-deep/20" />
        <div className="space-y-2 p-3 pt-3">
          <div className="h-2 w-1/2 rounded-full bg-sky-deep/20" />
          <div className="rounded-xl bg-linear-to-br from-primary/30 to-sky-deep/20 p-3">
            <div className="h-1.5 w-1/3 rounded-full bg-card/70" />
            <div className="mt-3 h-3 w-2/3 rounded-md bg-card/80" />
            <div className="mt-1.5 h-1.5 w-1/2 rounded-full bg-card/50" />
          </div>
          <div className="space-y-1.5">
            <div className="h-7 rounded-lg border border-border/70 bg-sky-light/30" />
            <div className="h-7 rounded-lg border border-border/70 bg-sky-light/30" />
            <div className="h-7 rounded-lg bg-primary/25" />
          </div>
        </div>
        <div className="mx-auto mb-2 mt-1 h-1 w-10 rounded-full bg-sky-deep/15" />
      </div>
    </VisualShell>
  );
}

const projectVisuals: Record<string, () => ReactNode> = {
  odt: OdtVisual,
  "sx-expo": SxExpoVisual,
  carbonmice: CarbonMiceVisual,
  ktc: KtcVisual,
};

function ProjectVisual({ id, index }: { id: string; index: number }) {
  const Visual = projectVisuals[id];
  if (Visual) return <Visual />;

  return (
    <div className="relative flex aspect-4/3 items-center justify-center overflow-hidden rounded-2xl border border-border bg-sky-light">
      <span className="font-display text-5xl font-bold text-primary/35">
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
            className="hover:shadow-card-soft grid gap-8 rounded-3xl border border-border bg-card p-6 transition-shadow md:grid-cols-12 md:p-8"
          >
            <div className="md:col-span-5">
              <ProjectVisual id={project.id} index={index} />
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
                    <p className="mt-1 whitespace-pre-line leading-relaxed text-muted-foreground">
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
                      className="rounded-full border border-border/60 bg-sky-light/35 px-4 py-1.5 text-sm font-medium text-sky-deep/80"
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
