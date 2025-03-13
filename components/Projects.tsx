"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with payment integration and admin dashboard.",
      tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      image: "/api/placeholder/500/300",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management tool with real-time updates and team features.",
      tech: ["React", "Firebase", "Tailwind CSS"],
      image: "/api/placeholder/500/300",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A modern portfolio website with neo-brutalist design elements.",
      tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
      image: "/api/placeholder/500/300",
    },
    {
      id: 4,
      title: "Blog Website",
      description:
        "A blog website with neo-brutalist design elements and content management.",
      tech: ["Next.js", "Sanity.io", "Tailwind CSS"],
      image: "/api/placeholder/500/300",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl font-bold mb-12 inline-block neo-brutalist-box py-2 px-4"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className={`neo-brutalist-box overflow-hidden ${
                index % 3 === 0
                  ? "neo-brutalist-box-secondary"
                  : index % 3 === 1
                  ? "neo-brutalist-box-accent2"
                  : "neo-brutalist-box-accent1"
              }`}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={100}
                height={100}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`text-sm font-bold px-2 py-1overflow-hidden`}
                      style={
                        index % 3 === 0
                          ? {
                              backgroundColor: "var(--accent2)",
                              color: "white",
                            }
                          : index % 3 === 1
                          ? {
                              backgroundColor: "var(--accent1)",
                              color: "black",
                            }
                          : {
                              backgroundColor: "var(--secondary)",
                              color: "white",
                            }
                      }
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  className="neo-button px-4 py-2"
                  style={{ backgroundColor: "var(--accent4)" }}
                >
                  View Project
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
