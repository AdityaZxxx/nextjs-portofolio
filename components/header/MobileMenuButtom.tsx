"use client";

import { Menu, X } from "lucide-react";

interface MobileMenuButtonProps {
  menuOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenuButton = ({ menuOpen, toggleMenu }: MobileMenuButtonProps) => {
  return (
    <button
      onClick={toggleMenu}
      className="p-2 bg-red-500 text-white rounded-none transform -rotate-3 hover:rotate-3 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)]"
    >
      {menuOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  );
};

export default MobileMenuButton;
