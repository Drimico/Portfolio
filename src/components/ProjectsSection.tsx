import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useTranslation } from "react-i18next";

const projects = [
  {
    id: 1,
    titleKey: "projects.burger_craft.title",
    descriptionKey: "projects.burger_craft.description",
    image: "/projects/project1.png",
    tags: ["State Management"],
    demoUrl: "https://68a4648117cd57000895462b--burger-craft-by-me.netlify.app/",
    githubUrl: "https://github.com/Drimico/burger-craft",
  },
  {
    id: 2,
    titleKey: "projects.weather_app.title",
    descriptionKey: "projects.weather_app.description",
    image: "/projects/project2.png",
    tags: ["API"],
    demoUrl: "https://68c445f2e04082d20e336047--drimico-weather-app.netlify.app/",
    githubUrl: "https://github.com/Drimico/Weather-app",
  },
  {
    id: 3,
    titleKey: "projects.product-dashboard.title",
    descriptionKey: "projects.product-dashboard.description",
    image: "/projects/project3.png",
    tags: ["RESTful API"],
    demoUrl: "https://product-dashboard-nine-weld.vercel.app/",
    githubUrl: "https://github.com/Drimico/product-dashboard",
  },
];

export const ProjectsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold  text-center">{t("projects.title")}</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">{t("projects.placeholder_text")}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col justify-between h-100 w-80">
              <div className="h-full overflow-hidden ">
                <img
                  src={project.image}
                  alt={t(project.titleKey)}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="px-4 py-2 h-full flex flex-col justify-between">
                <div className="flex flex-wrap gap-2 ">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 border text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col h-1/2">
                  <h3 className="text-xl font-semibold ">{t(project.titleKey)}</h3>
                  <p className="text-muted-foreground text-sm ">{t(project.descriptionKey)}</p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                      <ExternalLink size={20} />
                    </a>
                    <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank" href="https://github.com/Drimico">
            {t("projects.check_github")} <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
