import { ArrowDown } from "lucide-react";
import { useTranslation } from "react-i18next";

export const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center"
    >
      <div className="text-center z-10">
        <div className="flex flex-col gap-10">
          <h1 className="text-4xl 768:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">{t('hero.greeting')}</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Saprîchin
            </span>
            <span className="text-gradient opacity-0 animate-fade-in-delay-2">
              {" "}
              Sergiu
            </span>
          </h1>
          <p className="text-lg 768:text-xl text-muted-foreground mx-auto opacity-0 max-w-200 animate-fade-in-delay-3">
            {t('hero.description')}
          </p>
          <div className="opacity-0 animate-fade-in-delay-4 ">
            <a href="#projects" className="cosmic-button">
              {t('hero.view_work')}
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">{t("hero.scroll")} </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
