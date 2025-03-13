"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface GalleryItemProps {
  item: {
    thumbnail: string;
    title: string;
    fullImage?: string;
    description: string;
    tags?: string[];
  };
  index: number;
}

const GalleryItem = ({ item, index }: GalleryItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <motion.div
        className="neo-box overflow-hidden cursor-pointer"
        onClick={() => setIsOpen(true)}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ y: -10 }}
      >
        <div className="relative aspect-square overflow-hidden border-4 border-black">
          <Image
            src={item.thumbnail}
            alt={item.title}
            width={100}
            height={100}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            onError={(e) => {
              (
                e.target as HTMLImageElement
              ).src = `https://placehold.co/600x600/${
                index % 3 === 0
                  ? "FF90E8"
                  : index % 3 === 1
                  ? "7DF9FF"
                  : "00FF66"
              }/000000?text=Gallery+${index + 1}`;
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 p-2 bg-yellow-400 dark:bg-dark-bg border-t-4 border-black">
            <h3 className="font-bold truncate text-black text-ellipsis">
              {item.title}
            </h3>
          </div>
        </div>
      </motion.div>

      {/* Modal for full image view */}
      {isOpen && (
        <motion.div
          className="fixed max-w-screen inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            className="max-w-4xl w-full neo-box bg-blue-400 dark:bg-dark-bg p-4 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="neo-button bg-neo-pink dark:bg-neo-blue p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="border-4 border-black mb-4">
              <Image
                width={50}
                height={50}
                src={item.fullImage || item.thumbnail}
                alt={item.title}
                className="w-full h-auto"
              />
            </div>
            <p className="mb-4 dark:text-white">{item.description}</p>
            {item.tags && (
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`px-2 py-1 text-sm border-2 border-black
                      bg-black text-white dark:bg-white dark:text-black font-bold rounded-none transform hover:translate-x-2 transition-transform
                      ${
                        i % 3 === 0
                          ? "shadow-[8px_8px_0px_0px_rgba(245,211,39,1)]"
                          : i % 3 === 1
                          ? "shadow-[8px_8px_0px_0px_rgba(241,82,255,1)]"
                          : "shadow-[8px_8px_0px_0px_rgba(93,255,82,1)]"
                      }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default GalleryItem;
