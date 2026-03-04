import { useTranslation } from "react-i18next";
import { cn } from "../lib/utils";

export const LanguageSelection = () => {
  const { i18n } = useTranslation();
  return (
    <div className={cn("z-50 px-2 rounded-full transition-colors duration-300 ")}>
      <div className="flex gap-2">
        <span
          onClick={() => i18n.changeLanguage("en")}
          className="cursor-pointer text-foreground/80 hover:text-primary transition-colors duration-300"
        >
          EN
        </span>
        <span
          onClick={() => i18n.changeLanguage("ro")}
          className="cursor-pointer text-foreground/80 hover:text-primary transition-colors duration-300"
        >
          RO
        </span>
      </div>
    </div>
  );
};
