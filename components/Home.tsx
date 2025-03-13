"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export const HomePage: React.FC = () => {
  const techStack = [
    {
      id: 1,
      name: "React",
    },
    { id: 2, name: "Next.js" },
    { id: 3, name: "Node.js" },
    { id: 4, name: "TailwindCSS" },
    { id: 5, name: "PostgreSQL" },
    { id: 6, name: "Docker" },
    { id: 7, name: "Git" },
  ];
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <motion.div
        className="neo-circle"
        style={{ backgroundColor: "var(--accent1)", top: "15%", right: "5%" }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: isLoaded ? 1 : 0, opacity: isLoaded ? 1 : 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      />

      <motion.div
        className="neo-square "
        style={{
          backgroundColor: "var(--secondary)",
          bottom: "20%",
          left: "5%",
        }}
        initial={{ scale: 0, opacity: 0, rotate: 0 }}
        animate={{
          scale: isLoaded ? 1 : 0,
          opacity: isLoaded ? 1 : 0,
          rotate: 45,
        }}
        transition={{ delay: 1.2, duration: 0.5 }}
      />

      <motion.div
        className="neo-triangle "
        style={{ borderBottomColor: "var(--accent2)", top: "15%", left: "5%" }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: isLoaded ? 1 : 0, opacity: isLoaded ? 1 : 0 }}
        transition={{ delay: 1.0, duration: 0.5 }}
      />

      <div className="max-w-4xl w-full md:pt-0 md:pb-10 mt-5 md:mt-0">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="neo-brutalist-box p-8 md:p-12 mb-8"
        >
          <motion.h1
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            <span
              className="text-5xl md:text-7xl block"
              style={{ color: "var(--accent3)" }}
            >
              Hello!
            </span>
            I&apos;m <span className="highlight-primary">Aditya</span>
          </motion.h1>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-start items-center gap-2 mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white">
              <span
                className="bg-black text-white dark:bg-white dark:text-black px-2 py-1 transform rotate-1 inline-block neo-heading"
                style={{ backgroundColor: "var(--primary)" }}
              >
                SOFTWARE
              </span>
              <span className="text-2xl md:text-3xl font-bold">
                {" "}
                DEVELOPER{" "}
              </span>
            </h2>
            <span className="text-2xl md:text-3xl font-bold text-black dark:text-white">
              &
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white">
              <span
                className="bg-black text-white dark:bg-white dark:text-black px-2 py-1 transform rotate-1 inline-block neo-heading"
                style={{ backgroundColor: "var(--accent2)" }}
              >
                PROBLEM
              </span>
              <span className="text-2xl md:text-3xl font-bold"> SOLVER</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-8 text-lg text-black dark:text-white"
          >
            Building{" "}
            <span className="highlight-secondary">robust applications</span>{" "}
            with modern technologies. Focused on creating{" "}
            <span className="highlight-accent1">efficient</span>,
            <span className="highlight-accent2">scalable</span>, and
            <span className="highlight-primary">user-friendly</span> solutions.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col md:flex-row gap-4"
          >
            <Link href="/projects" className="neo-button px-6 py-3 text-lg">
              View Projects
            </Link>
            <Link
              href="/contact"
              className="neo-button neo-button-accent1 px-6 py-3 text-lg"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
        <motion.div>
          {techStack.map((tech, index) => (
            <span
              key={tech.id}
              className="neo-tag"
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
              {tech.name}
            </span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HomePage;
