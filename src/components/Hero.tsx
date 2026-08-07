import { useLanguage } from "../i18n/LanguageContext";
import { ArrowRightIcon } from "./Icons";

export function Hero() {
  const { t } = useLanguage();
  const introParts = t.hero.intro.split("{name}");

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="grid gap-8 md:grid-cols-12 md:gap-10">
        <div className="animate-fade-up md:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-light px-4 py-1.5 text-sm font-medium text-sky-deep">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {t.hero.available}
          </span>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            {t.hero.greeting}
            <br />
            <span className="text-sky-deep">{t.hero.nameHighlight}</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {introParts[0]}
            <span className="font-medium text-foreground">{t.hero.introName}</span>
            {introParts[1]}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="btn-cta inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors"
            >
              {t.hero.viewWork}
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              {t.hero.contactMe}
            </a>
          </div>
        </div>

        <div
          className="animate-fade-up md:col-span-5"
          style={{ animationDelay: "120ms" }}
        >
          <div className="animate-float overflow-hidden rounded-3xl border border-border bg-card shadow-card-soft">
            <img
              src="/avatar.png"
              alt="Parnfa Phathabannaporn"
              className="aspect-square w-full object-cover object-[center_38%]"
            />
            <div className="border-t border-border bg-secondary p-5">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent font-display text-sm font-bold text-accent-foreground">
                  P
                </span>
                <span className="font-display text-lg font-semibold text-foreground">
                  {t.hero.cardName}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                {t.hero.cardRole}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
