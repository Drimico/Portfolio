import { useState } from "react";
import { cn } from "../lib/utils";
import { useTranslation } from "react-i18next";

const skills = [
  // Frontend
  { name: "HTML", icon: "/skills/html.webp", category: "Frontend" },
  { name: "CSS", icon: "/skills/css.webp", category: "Frontend" },
  { name: "TypeScript", icon: "/skills/typescript.webp", category: "Frontend" },
  { name: "React", icon: "/skills/react.webp", category: "Frontend" },
  { name: "Next.js", icon: "/skills/nextJs.webp", category: "Frontend" },
  { name: "Tailwind", icon: "/skills/tailwind.webp", category: "Frontend" },
  // Tools
  { name: "Figma", icon: "/skills/figma.webp", category: "Tools" },
  { name: "Git", icon: "/skills/git.webp", category: "Tools" },
  { name: "GitHub", icon: "/skills/github.webp", category: "Tools" },
  { name: "Zustand", icon: "/skills/zustand.webp", category: "Tools" },
  {name: "Redux", icon: "/skills/redux.webp", category: "Tools"},
  { name: "i18next", icon: "/skills/i18next.webp", category: "Tools" },
];

export const SkillsSection = () => {
  const { t } = useTranslation();
  const categories = [
    { key: "all", label: t("skills.all") },
    { key: "Frontend", label: t("skills.frontend") },
    { key: "Tools", label: t("skills.tools") },
  ];

  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t("skills.title")}</h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category.key)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category.key ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary",
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 850:grid-cols-3">
          {filteredSkills.map((skill, key) => (
            <div key={key} className="bg-card p-2 rounded-full shadow-xs card-hover flex items-center justify-between w-60 ">
              <div className="w-18 h-18 bg-white rounded-full flex items-center justify-center shadow-[0_0_10px_2px_rgba(255,255,255,0.4)]" >
                <img className="w-13 h-13 object-contain" src={skill.icon} alt={skill.name} />
              </div>
              <div className="text-2xl w-[65%] font-bold">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
