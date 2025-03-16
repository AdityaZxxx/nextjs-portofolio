// components/GreetingPage.tsx
"use client";

import { useGreetingStore } from "@/lib/greetingStore"; // Sesuaikan path
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const greetings = [
  "Selamat Datang! 👋", // Indonesia
  "Welcome! 👋", // English
  "환영합니다! 👋", // Korea
  "ようこそ! 👋", // Jepang
  "欢迎! 👋", // China
  "مرحبًا! 👋", // Arab
];

export default function GreetingPage() {
  const { showGreeting, setShowGreeting } = useGreetingStore();
  const [index, setIndex] = useState(0);
  const [startScroll, setStartScroll] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (index < greetings.length - 1) {
      const interval = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 1000);
      return () => clearTimeout(interval);
    } else {
      setTimeout(() => setStartScroll(true), 1500); // Mulai scroll setelah delay
      setTimeout(() => {
        setShowGreeting(false); // Sembunyikan greeting setelah selesai
      }, 2500); // Sembunyikan setelah scroll selesai
    }
  }, [index, setShowGreeting]);

  if (!showGreeting) return null;

  return (
    <motion.div
      ref={containerRef}
      className="fixed inset-0 flex items-center justify-center text-black z-50 w-full h-screen neo-brutalist-container-greeting"
      animate={startScroll ? { y: "-100vh" } : { y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <motion.div className="neo-brutalist-box-greeting p-8">
        <motion.p
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-center"
        >
          {greetings[index]}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
