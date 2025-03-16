"use client";

import { useState } from "react";
import DesktopNav from "./DesktopNav";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import MobileMenuButton from "./MobileMenuButtom";

interface HeaderProps {
  currentSection: string;
  navigateTo: (section: string) => void;
}

const Header = ({ currentSection, navigateTo }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="p-6 flex justify-between items-center border-b-8 transition-colors">
        <Logo />
        <DesktopNav currentSection={currentSection} navigateTo={navigateTo} />
        <div className="flex items-center md:hidden gap-4">
          <MobileMenuButton menuOpen={menuOpen} toggleMenu={toggleMenu} />
        </div>
      </nav>

      <MobileMenu
        currentSection={currentSection}
        navigateTo={navigateTo}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
    </>
  );
};

export default Header;
