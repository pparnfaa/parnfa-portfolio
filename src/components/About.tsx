import { useLanguage } from "../i18n/LanguageContext";
import type { Skill } from "../i18n/translations";
import {
  CloudIcon,
  CodeIcon,
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

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-light text-sky-deep">
          <UserIcon className="h-5 w-5" />
        </div>
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">
          {t.about.title}
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-12">
        <div className="rounded-3xl border border-border bg-card p-7 md:col-span-7">
          <p className="text-lg leading-relaxed text-foreground">{t.about.p1}</p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            {t.about.p2}
          </p>
        </div>

        <div className="grid gap-4 md:col-span-5">
          {t.about.skills.map((skill) => {
            const Icon = skillIcons[skill.icon];
            return (
              <div
                key={skill.title}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 transition-colors hover:bg-sky-light/35"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-light text-sky-deep">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display font-semibold text-foreground">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
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
