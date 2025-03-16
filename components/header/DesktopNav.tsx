"use client";

import { NAV_ITEMS } from "@/components/header/NavItems";

interface DesktopNavProps {
  currentSection: string;
  navigateTo: (section: string) => void;
}

const DesktopNav = ({ currentSection, navigateTo }: DesktopNavProps) => {
  return (
    <div className="hidden md:flex items-center gap-8">
      {NAV_ITEMS.map((item) => (
        <button
          key={item.name}
          onClick={() => navigateTo(item.name)}
          className={`text-lg font-bold uppercase transition-all duration-200 transform hover:scale-110 ${
            currentSection === item.name
              ? "bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-none rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)]"
              : "text-black dark:text-white"
          }`}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default DesktopNav;
