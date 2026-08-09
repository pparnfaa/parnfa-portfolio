import { useLanguage } from "../i18n/LanguageContext";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  ShareIcon,
} from "./Icons";

const GITHUB = "https://github.com/pparnfaa";
const LINKEDIN =
  "https://www.linkedin.com/in/parnfa-phathabannaporn-270192339/";
const INSTAGRAM = "https://www.instagram.com/pparnfaa/";

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

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <a
          href={GITHUB}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 rounded-3xl border border-border bg-card p-6 text-foreground transition-colors hover:bg-secondary"
        >
          <div className="icon-chip flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
            <GithubIcon className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold tracking-tight">
              GitHub
            </h3>
            <p className="mt-0.5 text-sm text-muted-foreground">
              github.com/pparnfaa
            </p>
          </div>
        </a>

        <a
          href={LINKEDIN}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 rounded-3xl border border-border bg-card p-6 text-foreground transition-colors hover:bg-secondary"
        >
          <div className="icon-chip flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
            <LinkedinIcon className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold tracking-tight">
              LinkedIn
            </h3>
            <p className="mt-0.5 text-sm text-muted-foreground">
              Parnfa Phathabannaporn
            </p>
          </div>
        </a>

        <a
          href={INSTAGRAM}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 rounded-3xl border border-border bg-card p-6 text-foreground transition-colors hover:bg-secondary"
        >
          <div className="icon-chip flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
            <InstagramIcon className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold tracking-tight">
              Instagram
            </h3>
            <p className="mt-0.5 text-sm text-muted-foreground">
              @pparnfaa
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}
