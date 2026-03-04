import { Briefcase, Code, User } from "lucide-react";
import { useTranslation } from "react-i18next";

export const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center items-center">
      <div className="w-full flex flex-col gap-5">
        <h2 className="text-3xl 768:text-4xl font-bold text-center">
          {t("about.about")} <span className="text-primary">{t("about.me")}</span>
        </h2>
        <div className="flex 1024:flex-row flex-col gap-12 items-center ">
          <div className="flex flex-col gap-10 w-full">
            <h3 className="text-2xl font-semibold">{t("about.subtitle")}</h3>
            <p className="text-muted-foreground">{t("about.paragraph_1")}</p>
            <p className="text-muted-foreground">{t("about.paragraph_2")}</p>

            <div className="flex flex-col 768:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="cosmic-button w-50">
                {t("about.get_in_touch_button")}
              </a>
              <a
                href="#contact"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 duration-300 transition-colors w-50"
              >
                {t("about.download_cv")}
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-6 w-full max-w-120">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">{t("about.sections.web_dev.title")}</h4>
                  <p className="text-muted-foreground">{t("about.sections.web_dev.description")}</p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">{t("about.sections.ui_ux.title")}</h4>
                  <p className="text-muted-foreground">{t("about.sections.ui_ux.description")}</p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">{t("about.sections.project_growth.title")}</h4>
                  <p className="text-muted-foreground">{t("about.sections.project_growth.description")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
