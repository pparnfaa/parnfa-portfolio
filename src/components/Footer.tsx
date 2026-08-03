import { useLanguage } from "../i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="mt-8 border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-muted-foreground md:flex-row">
        <p>{t.footer.rights}</p>
        <p className="flex items-center gap-1">{t.footer.tagline}</p>
      </div>
    </footer>
  );
}
