import { useLanguage } from "../i18n/LanguageContext";
import { useTheme } from "../theme/ThemeContext";
import { MoonIcon, SunIcon } from "./Icons";

export function Navbar() {
  const { t, locale, toggleLocale } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-display text-2xl font-bold tracking-tight text-sky-deep transition-opacity hover:opacity-80"
        >
          Pleng
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a
            href="#about"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            {t.nav.about}
          </a>
          <a
            href="#work"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            {t.nav.work}
          </a>
          <a
            href="#contact"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            {t.nav.contact}
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "light" ? "Switch to dark mode" : "Switch to light mode"
            }
            className="inline-flex items-center justify-center rounded-full border border-border bg-card p-2 text-foreground transition-colors hover:bg-secondary"
          >
            {theme === "light" ? (
              <MoonIcon className="h-4 w-4" />
            ) : (
              <SunIcon className="h-4 w-4" />
            )}
          </button>
          <button
            type="button"
            onClick={toggleLocale}
            aria-label={locale === "en" ? "Switch to Thai" : "เปลี่ยนเป็นภาษาอังกฤษ"}
            className="rounded-full border border-border bg-card px-3 py-2 text-xs font-semibold tracking-wide text-foreground transition-colors hover:bg-secondary"
          >
            {locale === "en" ? "TH" : "EN"}
          </button>
          <a
            href="#contact"
            className="rounded-full border-2 border-sky-deep px-5 py-2 text-sm font-semibold text-sky-deep transition-colors hover:bg-sky-deep hover:text-white"
          >
            {t.nav.sayHi}
          </a>
        </div>
      </div>
    </header>
  );
}
