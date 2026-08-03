import { useLanguage } from "../i18n/LanguageContext";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
} from "./Icons";

const EMAIL = "pleng.parnfa@gmail.com";
const GITHUB = "https://github.com/pparnfaa";
const LINKEDIN =
  "https://www.linkedin.com/in/parnfa-phathabannaporn-270192339/";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="grid gap-8 rounded-3xl border border-border bg-secondary p-8 md:grid-cols-12 md:p-10">
        <div className="md:col-span-7">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-light text-sky-deep">
              <MailIcon className="h-5 w-5" />
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">
              {t.contact.title}
            </h2>
          </div>
          <p className="mt-4 max-w-lg text-lg text-muted-foreground">
            {t.contact.description}
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-sky-deep px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary"
          >
            {t.contact.emailCta}
          </a>
        </div>

        <div className="md:col-span-5">
          <div className="space-y-4">
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 transition-colors hover:bg-background"
            >
              <MailIcon className="h-5 w-5 text-sky-deep" />
              <span className="text-sm font-medium text-foreground">
                {EMAIL}
              </span>
            </a>

            <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
              <MapPinIcon className="h-5 w-5 text-sky-deep" />
              <span className="text-sm font-medium text-foreground">
                {t.contact.location}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl border border-border bg-card p-3 text-sm font-medium text-foreground transition-colors hover:bg-sky-deep hover:text-white"
              >
                <GithubIcon className="h-4 w-4" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl border border-border bg-card p-3 text-sm font-medium text-foreground transition-colors hover:bg-sky-deep hover:text-white"
              >
                <LinkedinIcon className="h-4 w-4" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
