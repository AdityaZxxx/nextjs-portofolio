"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    const path = window.location.pathname;
    const section = path === "/" ? "home" : path.substring(1);
    setCurrentSection(section);
  }, [router.prefetch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router]);

  const navigateTo = (section: string) => {
    setCurrentSection(section);
    router.push(section === "home" ? "/" : `/${section}`);
  };

  return (
    <div>
      <Header currentSection={currentSection} navigateTo={navigateTo} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default ClientLayout;
