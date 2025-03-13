"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Footer: React.FC = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-8 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="neo-brutalist-box p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Aditya</h3>
              <p className="mb-4">
                Software Developer specializing in modern web technologies.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Navigation</h3>
              <ul className="space-y-2 ">
                <li>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:underline">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:underline">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:underline">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://github.com/AdityaZxxx"
                    target="_blank"
                    className="hover:underline"
                  >
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://x.com/adxxya30"
                    target="_blank"
                    className="hover:underline"
                  >
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://instagram.com/adxxya30"
                    target="_blank"
                    className="hover:underline"
                  >
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>{`© ${year}. All Rights Reserved.`}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
