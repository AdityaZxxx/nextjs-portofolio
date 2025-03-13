"use client";

import GalleryItem from "@/components/ui/GalleryItem";
import gallery from "@/data/gallery";
import { motion } from "framer-motion";

export const Gallery: React.FC = () => {
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
          Gallery
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((item, index) => (
            <GalleryItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Gallery;
