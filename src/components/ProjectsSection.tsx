import { ExternalLink, Github, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const projects = [
  {
    id: 1,
    titleKey: "projects.burger_craft.title",
    descriptionKey: "projects.burger_craft.description",
    image: "/projects/project1.jpg",
    fullImage: "/projects/project1-full.jpg",
    tags: ["State Management"],
    demoUrl: "https://69a17d80e7d1b00008a7887d--burgercraftbyme.netlify.app/",
    githubUrl: "https://github.com/Drimico/burger-craft",
  },
  {
    id: 2,
    titleKey: "projects.weather_app.title",
    descriptionKey: "projects.weather_app.description",
    image: "/projects/project2.png",
    fullImage: "/projects/project2-full.jpg",
    tags: ["API"],
    demoUrl: "https://69b6732165e26f00080b8a80--drimico-weather-app.netlify.app/",
    githubUrl: "https://github.com/Drimico/Weather-app",
  },
  {
    id: 3,
    titleKey: "projects.product-dashboard.title",
    descriptionKey: "projects.product-dashboard.description",
    image: "/projects/project3.png",
    fullImage: "/projects/project3-full.png",
    tags: ["RESTful API"],
    demoUrl: "https://product-dashboard-nine-weld.vercel.app/",
    githubUrl: "https://github.com/Drimico/product-dashboard",
  },
  {
    id: 4,
    titleKey: "projects.coll-doc-editor.title",
    descriptionKey: "projects.coll-doc-editor.description",
    image: "/projects/project4.png",
    fullImage: "/projects/project4-full.png",
    tags: ["Websockets"],
    demoUrl: "https://6a5cd2d8af59a00008de9125--coll-docs-editor.netlify.app/",
    githubUrl: "https://github.com/Drimico/collaborative-document-editor",
  },
];

export const ProjectsSection = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);

  useEffect(() => {
    if (!selectedProject) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col justify-center items-center"
    >
      <div className=" flex flex-col gap-5">
        <h2 className="text-3xl 768:text-4xl font-bold text-center">{t("projects.title")}</h2>
        <p className="text-center text-muted-foreground w-full">{t("projects.placeholder_text")}</p>

        <div className="flex flex-col 950:flex-row w-full justify-center items-center gap-5">
          {projects.map((project, key) => (
            <div
              key={key}
              className="bg-card rounded-lg shadow-xs 400:max-w-80 w-full min-h-[420px] flex flex-col"
            >
              <div className="w-full h-48 flex-shrink-0 overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={t(project.titleKey)}
                  onClick={() => setSelectedProject(project)}
                  className="object-cover h-full w-full cursor-pointer transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="flex flex-col justify-between flex-grow p-4">
                <div className="flex mb-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 border text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold ">{t(project.titleKey)}</h3>
                  <p className="text-muted-foreground text-sm ">{t(project.descriptionKey)}</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex gap-3">
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
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedProject.fullImage}
              alt={t(selectedProject.titleKey)}
              className="max-w-[90vw] max-h-[85vh] rounded-lg shadow-2xl"
            />
            <button
              onClick={() => setSelectedProject(null)}
              aria-label="Close"
              className="absolute -top-4 -right-4 p-2 rounded-full bg-card text-foreground shadow-lg cursor-pointer hover:text-primary transition-colors duration-300"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
