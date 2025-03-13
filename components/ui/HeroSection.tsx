import { motion } from "framer-motion";

const HomePage = () => {
  // const Tech = [
  //   {
  //     name: "React",
  //     icon: "",
  //   },
  //   {
  //     name: "Next.js",
  //     icon: "",
  //   },
  //   {
  //     name: "Node.js",
  //     icon: "",
  //   },
  //   {
  //     name: "Docker",
  //     icon: "",
  //   },
  //   {
  //     name: "PostgresSQL",
  //     icon: "",
  //   },
  //   {
  //     name: "ChatGPT",
  //     icon: "",
  //   },
  //   {
  //     name: "TailwindCSS",
  //     icon: "",
  //   },
  //   {
  //     name: "GitHub",
  //     icon: "",
  //   },
  // ];
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12"
    >
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="neo-brutalist-box p-8 md:p-12 mb-8"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-5xl md:text-7xl block">Hello!</span>
            I&apos;m <span style={{ color: "var(--primary)" }}>John Doe</span>
          </h1>
          <h2 className="text-xl md:text-2xl mb-6">
            Software Developer & Problem Solver
          </h2>
          <p className="mb-8 text-lg">
            Building robust applications with modern technologies. Focused on
            creating efficient, scalable, and user-friendly solutions.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="neo-button px-6 py-3 text-lg"
            >
              View Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="neo-button px-6 py-3 text-lg"
              style={{ backgroundColor: "var(--secondary)", color: "black" }}
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="neo-brutalist-box p-6"
        >
          <h3 className="text-xl font-bold mb-4">Tech Stack</h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Node.js",
              "Tailwind CSS",
              "MongoDB",
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="neo-brutalist-box px-3 py-1 text-sm"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HomePage;
