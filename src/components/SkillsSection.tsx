import { useState } from "react";
import { cn } from "../lib/utils";
import { useTranslation } from "react-i18next";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: "80", category: "Frontend" },
  { name: "TypeScript", level: "70", category: "Frontend" },
  { name: "JavaScript", level: "90", category: "Frontend" },
  { name: "React", level: "70", category: "Frontend" },
  { name: "Next.js", level: "50", category: "Frontend" },
  { name: "Tailwind CSS", level: "50", category: "Frontend" },
  // Tools
  { name: "Figma", level: "50", category: "Tools" },
  { name: "Git/Github", level: "80", category: "Tools" },
  { name: "Docker", level: "10", category: "Tools" },
  { name: "VsCode", level: "70", category: "Tools" },
  { name: "Zustand", level: "50", category: "Tools" },
  { name: "i18next", level: "80", category: "Tools" },
];

export const SkillsSection = () => {
  const { t } = useTranslation();
  const categories = [
    { key: "all", label: t("skills.all") },
    { key: "Frontend", label: t("skills.frontend") },
    { key: "Tools", label: t("skills.tools") },
  ];

  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t("skills.title")}
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category.key)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category.key
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4 ">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
