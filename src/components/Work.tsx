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
      className="relative aspect-4/3 overflow-hidden rounded-2xl border border-border bg-sky-light"
      aria-hidden
    >
      <div className="pointer-events-none absolute -right-8 -top-10 h-36 w-36 rounded-full bg-primary/15" />
      <div className="pointer-events-none absolute -bottom-10 -left-6 h-28 w-28 rounded-full bg-accent/25" />

      {/* mockup — เว้นที่ด้านล่างให้ badge */}
      <div className="absolute inset-0 z-0 flex items-center justify-center p-4 pb-10 sm:p-5 sm:pb-11">
        <div className="flex max-h-full w-full max-w-[86%] items-center justify-center overflow-hidden">
          {children}
        </div>
      </div>

      {/* badge อยู่ในกรอบ และอยู่ชั้นบนสุด */}
      <span className="absolute bottom-2.5 right-2.5 z-20 rounded-full border border-border/50 bg-card px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-sky-deep shadow-sm sm:bottom-3 sm:right-3">
        {label}
      </span>
    </div>
  );
}

function OdtVisual() {
  return (
    <VisualShell label="Web platform">
      <div className="w-full overflow-hidden rounded-lg border border-sky-deep/15 bg-card shadow-sm sm:rounded-xl">
        <div className="flex items-center gap-1 border-b border-border/60 bg-sky-light/40 px-2 py-1.5 sm:gap-1.5 sm:px-3 sm:py-2">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary/50 sm:h-2 sm:w-2" />
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70 sm:h-2 sm:w-2" />
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sky-deep/30 sm:h-2 sm:w-2" />
          <span className="ml-1.5 h-1.5 flex-1 rounded-full bg-sky-deep/10 sm:ml-2 sm:h-2" />
        </div>
        <div className="space-y-1.5 p-2 sm:space-y-2.5 sm:p-3">
          <div className="h-1.5 w-2/5 rounded-full bg-sky-deep/20 sm:h-2.5" />
          <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-md border border-border/70 bg-sky-light/30 p-1.5 sm:rounded-lg sm:p-2"
              >
                <div className="mb-1 h-4 rounded-md bg-primary/20 sm:mb-2 sm:h-7" />
                <div className="h-1 w-3/4 rounded-full bg-sky-deep/20 sm:h-1.5" />
                <div className="mt-0.5 h-1 w-1/2 rounded-full bg-sky-deep/10 sm:mt-1 sm:h-1.5" />
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
      <div className="flex w-full items-end justify-center gap-2 sm:gap-3">
        <div className="w-[58%] overflow-hidden rounded-md border border-sky-deep/15 bg-card shadow-sm sm:w-[62%] sm:rounded-lg">
          <div className="flex items-center gap-1 border-b border-border/60 bg-sky-light/40 px-1.5 py-1 sm:px-2 sm:py-1.5">
            <span className="h-1 w-1 rounded-full bg-primary/50 sm:h-1.5 sm:w-1.5" />
            <span className="h-1 w-1 rounded-full bg-accent/70 sm:h-1.5 sm:w-1.5" />
            <span className="ml-1 h-1 flex-1 rounded-full bg-sky-deep/10 sm:h-1.5" />
          </div>
          <div className="flex gap-1.5 p-1.5 sm:gap-2 sm:p-2.5">
            <div className="hidden w-1/4 space-y-1 sm:block sm:space-y-1.5">
              <div className="h-1.5 rounded-full bg-sky-deep/20" />
              <div className="h-1.5 rounded-full bg-sky-deep/10" />
              <div className="h-1.5 rounded-full bg-sky-deep/10" />
              <div className="h-1.5 rounded-full bg-primary/30" />
            </div>
            <div className="min-w-0 flex-1 space-y-1 sm:space-y-1.5">
              <div className="h-5 rounded-md bg-primary/15 sm:h-8" />
              <div className="grid grid-cols-3 gap-1">
                <div className="h-3.5 rounded bg-sky-light/60 sm:h-5" />
                <div className="h-3.5 rounded bg-accent/35 sm:h-5" />
                <div className="h-3.5 rounded bg-sky-light/60 sm:h-5" />
              </div>
              <div className="h-1 w-4/5 rounded-full bg-sky-deep/15 sm:h-1.5" />
            </div>
          </div>
        </div>
        <div className="w-[30%] max-w-[5.25rem] overflow-hidden rounded-[0.85rem] border-2 border-sky-deep/20 bg-card shadow-sm sm:w-[28%] sm:max-w-none sm:rounded-[1.1rem]">
          <div className="mx-auto mt-1 h-0.5 w-4 rounded-full bg-sky-deep/20 sm:mt-1.5 sm:h-1 sm:w-6" />
          <div className="space-y-1 p-1.5 pt-2 sm:space-y-1.5 sm:p-2 sm:pt-2.5">
            <div className="h-6 rounded-md bg-primary/20 sm:h-10 sm:rounded-lg" />
            <div className="h-1 rounded-full bg-sky-deep/20 sm:h-1.5" />
            <div className="h-1 w-2/3 rounded-full bg-sky-deep/10 sm:h-1.5" />
            <div className="mt-0.5 grid grid-cols-2 gap-1 sm:mt-1">
              <div className="h-3 rounded bg-sky-light/70 sm:h-4" />
              <div className="h-3 rounded bg-accent/40 sm:h-4" />
            </div>
          </div>
          <div className="mx-auto mb-1 mt-0.5 h-0.5 w-6 rounded-full bg-sky-deep/15 sm:mb-1.5 sm:mt-1 sm:h-1 sm:w-8" />
        </div>
      </div>
    </VisualShell>
  );
}

function CarbonMiceVisual() {
  const bars = [38, 62, 45, 78, 55, 70];
  return (
    <VisualShell label="Dashboard">
      <div className="w-full overflow-hidden rounded-lg border border-sky-deep/15 bg-card shadow-sm sm:rounded-xl">
        <div className="flex items-center justify-between border-b border-border/60 px-2 py-1.5 sm:px-3 sm:py-2">
          <div className="h-1.5 w-12 rounded-full bg-sky-deep/20 sm:h-2 sm:w-16" />
          <div className="flex gap-1">
            <span className="h-3 w-6 rounded bg-primary/20 sm:h-4 sm:w-8" />
            <span className="h-3 w-6 rounded bg-accent/35 sm:h-4 sm:w-8" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1.5 p-2 sm:gap-2 sm:p-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="rounded-md border border-border/60 bg-sky-light/25 p-1.5 sm:rounded-lg sm:p-2"
            >
              <div className="h-1 w-1/2 rounded-full bg-sky-deep/15 sm:h-1.5" />
              <div className="mt-1.5 h-2 w-3/4 rounded-md bg-sky-deep/25 sm:mt-2 sm:h-3" />
            </div>
          ))}
        </div>
        <div className="flex h-9 items-end gap-1 px-2 pb-2 sm:h-12 sm:gap-1.5 sm:px-3 sm:pb-3">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-md bg-primary/35"
              style={{ height: `${h}%` }}
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
      <div className="mx-auto flex aspect-9/17 max-h-full w-[34%] max-w-[6.5rem] flex-col overflow-hidden rounded-[1rem] border-2 border-sky-deep/20 bg-card shadow-sm sm:w-[38%] sm:max-w-[8rem] sm:rounded-[1.35rem] sm:border-[2.5px]">
        <div className="mx-auto mt-1.5 h-1 w-7 shrink-0 rounded-full bg-sky-deep/20 sm:mt-2 sm:h-1.5 sm:w-10" />
        <div className="flex min-h-0 flex-1 flex-col gap-1.5 overflow-hidden p-2 pt-2 sm:gap-2 sm:p-3 sm:pt-3">
          <div className="h-1.5 w-1/2 shrink-0 rounded-full bg-sky-deep/20 sm:h-2" />
          <div className="shrink-0 rounded-lg bg-linear-to-br from-primary/30 to-sky-deep/20 p-2 sm:rounded-xl sm:p-3">
            <div className="h-1 w-1/3 rounded-full bg-card/70 sm:h-1.5" />
            <div className="mt-2 h-2 w-2/3 rounded-md bg-card/80 sm:mt-3 sm:h-3" />
            <div className="mt-1 h-1 w-1/2 rounded-full bg-card/50 sm:mt-1.5 sm:h-1.5" />
          </div>
          <div className="flex min-h-0 flex-1 flex-col justify-evenly gap-1">
            <div className="min-h-3 flex-1 rounded-md border border-border/70 bg-sky-light/30 sm:rounded-lg" />
            <div className="min-h-3 flex-1 rounded-md border border-border/70 bg-sky-light/30 sm:rounded-lg" />
            <div className="min-h-3 flex-1 rounded-md bg-primary/25 sm:rounded-lg" />
          </div>
        </div>
        <div className="mx-auto mb-1.5 mt-1 h-0.5 w-7 shrink-0 rounded-full bg-sky-deep/15 sm:mb-2 sm:h-1 sm:w-10" />
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
