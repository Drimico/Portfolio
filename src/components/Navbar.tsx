import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18n from "../utils/i18n";
import { LanguageSelection } from "./LanguageSelection";
import { ThemeToggle } from "./ThemToggle";
import { Link } from "react-scroll";

export const Navbar = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { name: t("navigation.home"), href: "hero" },
    { name: t("navigation.about"), href: "about" },
    { name: t("navigation.skills"), href: "skills" },
    { name: t("navigation.projects"), href: "projects" },
    { name: t("navigation.contact"), href: "contact" },
  ];
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav className={cn("fixed w-full z-40 transition-all duration-300", isScrolled ? "py-5 bg-background/80 backdrop-blur-sm shadow-xs" : "py-5")}>
        <div className="flex justify-between items-center 1024:px-30 640:px-10 px-2">
          <a className="text-xl font-bold text-primary flex items-center">
            <span className="relative z-10 ">
              <span className={`text-glow ${i18n.language === "en" ? "text-foreground" : ""}`}>{t("navigation.my")} </span>
              <span className={`text-glow ${i18n.language === "ro" ? "text-foreground" : ""}`}>{t("navigation.portofolio")}</span>
            </span>
          </a>

          <div className="hidden 768:flex gap-5">
            {navItems.map((item, key) => (
              <Link to={item.href} key={key} offset={-68} className="text-foreground/80 hover:text-primary transition-colors duration-300 cursor-pointer">
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center">
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="768:hidden text-foreground z-50"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <LanguageSelection />
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <div
        className={cn(
          "fixed w-screen h-screen inset-0 bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center z-30",
          "transition-all duration-300 768:hidden",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
      >
        <div className="flex flex-col text-xl gap-8">
          {navItems.map((item, key) => (
            <Link
              key={key}
              to={item.href}
              offset={-68}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
