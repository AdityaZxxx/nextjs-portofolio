"use client";
import blogPosts from "@/data/blog";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Blog: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-8 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl font-bold mb-6 inline-block neo-brutalist-box py-2 px-4"
        >
          Blog
        </motion.h2>
        <div className="space-y-10">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
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
              <div className="md:flex">
                <div className="md:w-1/3">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={32}
                    height={32}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <span className="text-sm" style={{ color: "var(--primary)" }}>
                    {post.date}
                  </span>
                  <h3 className="text-xl font-bold mb-2 mt-1">{post.title}</h3>
                  <p className="mb-4">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.id}`}
                    className="neo-button px-4 py-2"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Blog;
