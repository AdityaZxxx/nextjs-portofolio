"use client";

import { NAV_ITEMS } from "@/components/header/NavItems";

interface MobileMenuProps {
  currentSection: string;
  navigateTo: (section: string) => void;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

const MobileMenu = ({
  currentSection,
  navigateTo,
  menuOpen,
  setMenuOpen,
}: MobileMenuProps) => {
  return (
    menuOpen && (
      <div className="fixed inset-0 z-50 flex flex-col pt-24 px-6 gap-6 bg-white dark:bg-black border-8 border-black dark:border-white md:hidden animate-slideIn">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.name}
            onClick={() => {
              navigateTo(item.name);

              setMenuOpen(false);
            }}
            className={`flex items-center gap-4 text-2xl font-bold uppercase py-4 px-6 transition-all duration-200 ${
              currentSection === item.name
                ? "bg-black text-white dark:bg-white dark:text-black rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.8)]"
                : "text-black dark:text-white"
            }`}
          >
            {item.icon} {item.name}
          </button>
        ))}
      </div>
    )
  );
};

export default MobileMenu;
