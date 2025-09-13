import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useTranslation } from "react-i18next";

const projects = [
  {
    id: 1,
    titleKey: "projects.burger_craft.title",
    descriptionKey: "projects.burger_craft.description",
    image: "/projects/project1.png",
    tags: ["React", "Tailwind", "TypeScript"],
    demoUrl:
      "https://68a4648117cd57000895462b--burger-craft-by-me.netlify.app/",
    githubUrl: "https://github.com/Drimico/burger-craft",
  },
  {
    id: 2,
    titleKey: "projects.weather_app.title",
    descriptionKey: "projects.weather_app.description",
    image: "/projects/project2.png",
    tags: ["React", "Tailwind", "TypeScript", "API"],
    demoUrl:
      "https://68c445f2e04082d20e336047--drimico-weather-app.netlify.app/",
    githubUrl: "https://github.com/Drimico/Weather-app",
  },
];

export const ProjectsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t("projects.title")}
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t("projects.placeholder_text")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={t(project.titleKey)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 border text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">
                  {t(project.titleKey)}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {t(project.descriptionKey)}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Drimico"
          >
            {t("projects.check_github")} <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
