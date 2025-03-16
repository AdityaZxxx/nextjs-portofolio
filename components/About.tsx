"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-8 px-6 md:px-12"
    >
      <div className="max-w-4xl mx-auto ">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl font-bold mb-6 inline-block neo-brutalist-box py-2 px-4"
        >
          About Me
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="neo-brutalist-box-accent1 p-6"
          >
            <Image
              src="/profile.png"
              alt="Developer"
              width={100}
              height={100}
              className="w-full h-auto neo-brutalist-box-accent1"
            />
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="neo-brutalist-box-accent2 p-6"
          >
            <h3 className="text-2xl font-bold mb-4">Aditya Rahmad</h3>
            <p className="mb-4">
              I&apos;m a passionate software developer with 5+ years of
              experience in building web applications. My journey in technology
              started when I was 12, tinkering with HTML and CSS to create
              simple websites.
            </p>
            <p className="mb-4">
              Today, I specialize in full-stack development with a focus on
              React, Next.js, and Node.js. I&apos;m dedicated to writing clean,
              maintainable code and creating intuitive user experiences.
            </p>
            <button className="neo-button neo-button-accent4 text-lg px-4 py-2 mt-4">
              Download CV
            </button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
