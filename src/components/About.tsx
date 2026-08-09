import { useLanguage } from "../i18n/LanguageContext";
import type { Skill } from "../i18n/translations";
import {
  CloudIcon,
  CodeIcon,
  GraduationCapIcon,
  LayersIcon,
  PhoneIcon,
  UserIcon,
} from "./Icons";

const skillIcons: Record<Skill["icon"], typeof CodeIcon> = {
  code: CodeIcon,
  layers: LayersIcon,
  phone: PhoneIcon,
  cloud: CloudIcon,
};

export function About() {
  const { t } = useLanguage();
  const { school, degree, period, honors, label } = t.about.education;

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="mb-8 flex items-center gap-3">
        <div className="icon-chip flex h-10 w-10 items-center justify-center rounded-xl">
          <UserIcon className="h-5 w-5" />
        </div>
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">
          {t.about.title}
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-12">
        <div className="rounded-3xl border border-border bg-card p-7 md:col-span-7">
          <div className="mb-6 border-b border-border pb-6">
            <div className="mb-3 flex items-center gap-2">
              <GraduationCapIcon className="h-4 w-4 text-sky-deep" />
              <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                {label}
              </h3>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="font-display text-lg font-semibold tracking-tight text-foreground">
                  {school}
                </p>
                <p className="mt-0.5 text-sm text-muted-foreground">{degree}</p>
                <p className="mt-2 text-sm font-medium text-sky-deep">{honors}</p>
              </div>
              <span className="shrink-0 text-sm text-muted-foreground sm:pt-0.5">
                {period}
              </span>
            </div>
          </div>

          <p className="text-lg leading-relaxed text-foreground">{t.about.p1}</p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            {t.about.p2}
          </p>
        </div>

        <div className="grid gap-5 md:col-span-5">
          {t.about.skills.map((skill) => {
            const Icon = skillIcons[skill.icon];
            return (
              <div key={skill.title} className="flex items-start gap-3">
                <div className="icon-chip flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">
                    {skill.title}
                  </h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
