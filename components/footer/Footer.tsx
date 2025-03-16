import Link from "next/link";
import Copyright from "./Copyright";

const Footer = () => {
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
              <ul className="space-y-2">
                {[
                  ["Home", "/"],
                  ["About", "/about"],
                  ["Projects", "/projects"],
                  ["Gallery", "/gallery"],
                  ["Blog", "/blog"],
                  ["Contact", "/contact"],
                ].map(([title, path]) => (
                  <li key={title}>
                    <Link href={path} className="hover:underline">
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <ul className="space-y-2">
                {[
                  ["GitHub", "https://github.com/AdityaZxxx"],
                  ["Twitter", "https://x.com/adxxya30"],
                  ["Instagram", "https://instagram.com/adxxya30"],
                ].map(([title, url]) => (
                  <li key={title}>
                    <Link
                      href={url}
                      target="_blank"
                      className="hover:underline"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
