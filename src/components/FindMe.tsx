import { useLanguage } from "../i18n/LanguageContext";
import { GithubIcon, LinkedinIcon, ShareIcon } from "./Icons";

const GITHUB = "https://github.com/pparnfaa";
const LINKEDIN =
  "https://www.linkedin.com/in/parnfa-phathabannaporn-270192339/";

export function FindMe() {
  const { t } = useLanguage();

  return (
    <section id="find-me" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="mb-8 flex items-center gap-3">
        <div className="icon-chip flex h-10 w-10 items-center justify-center rounded-xl">
          <ShareIcon className="h-5 w-5" />
        </div>
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">
          {t.findMe.title}
        </h2>
      </div>

      <p className="mb-8 max-w-lg text-lg text-muted-foreground">
        {t.findMe.description}
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <a
          href={GITHUB}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-4 rounded-3xl border border-border bg-card p-6 transition-colors hover:border-sky-deep hover:bg-sky-deep hover:text-white"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-light text-sky-deep transition-colors group-hover:bg-white/15 group-hover:text-white">
            <GithubIcon className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold tracking-tight">
              GitHub
            </h3>
            <p className="mt-0.5 text-sm text-muted-foreground transition-colors group-hover:text-white/80">
              github.com/pparnfaa
            </p>
          </div>
        </a>

        <a
          href={LINKEDIN}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-4 rounded-3xl border border-border bg-card p-6 transition-colors hover:border-sky-deep hover:bg-sky-deep hover:text-white"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-light text-sky-deep transition-colors group-hover:bg-white/15 group-hover:text-white">
            <LinkedinIcon className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold tracking-tight">
              LinkedIn
            </h3>
            <p className="mt-0.5 text-sm text-muted-foreground transition-colors group-hover:text-white/80">
              Parnfa Phathabannaporn
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}
