"use client";

import {
  Code,
  File,
  Home,
  Image as ImageIcon,
  Menu,
  MessageSquare,
  User,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface NavbarProps {
  currentSection: string;
  navigateTo: (section: string) => void;
}

const Header: React.FC<NavbarProps> = ({ currentSection, navigateTo }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  // const themeContext = useTheme();
  // const toggleTheme = themeContext?.toggleTheme;
  return (
    <>
      {/* Navigation Bar */}
      <nav className="p-6 flex justify-between items-center border-b-8  transition-colors ">
        <div className="flex items-center">
          <Link
            href="/"
            className="text-3xl font-black tracking-wider  transition-colors duration-300 transform hover:scale-105"
          >
            DEV<span className="text-red-600">.ADITYA</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {["home", "about", "projects", "blog", "gallery", "contact"].map(
            (item) => (
              <button
                key={item}
                onClick={() => navigateTo(item)}
                className={`text-lg font-bold uppercase transition-all duration-200 transform hover:scale-110
                ${
                  currentSection === item
                    ? "bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-none rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)]"
                    : "text-black dark:text-white"
                }`}
              >
                {item}
              </button>
            )
          )}
          {/* Theme Toggle Button */}
          {/* <button onClick={toggleTheme} className="neo-button px-3 py-1 ml-4">
            {themeContext?.theme ? "☀️" : "🌙"}
          </button>*/}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden gap-4">
          <button
            onClick={toggleMenu}
            className="p-2 bg-red-500 text-white rounded-none transform -rotate-3 hover:rotate-3 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)]"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col pt-24 px-6 gap-6 bg-white dark:bg-black border-8 border-black dark:border-white md:hidden animate-slideIn">
          {[
            { name: "home", icon: <Home size={24} /> },
            { name: "about", icon: <User size={24} /> },
            { name: "projects", icon: <Code size={24} /> },
            { name: "blog", icon: <File size={24} /> },
            { name: "gallery", icon: <ImageIcon size={24} /> },
            { name: "contact", icon: <MessageSquare size={24} /> },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => {
                navigateTo(item.name);
                setMenuOpen(false); // Close the menu after navigation
              }}
              className={`flex items-center gap-4 text-2xl font-bold uppercase py-4 px-6 transition-all duration-200
                ${
                  currentSection === item.name
                    ? "bg-black text-white dark:bg-white dark:text-black rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.8)]"
                    : "text-black dark:text-white"
                }`}
            >
              {item.icon} {item.name}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;
