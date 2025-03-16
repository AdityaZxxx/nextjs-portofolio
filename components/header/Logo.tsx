import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="text-3xl font-black tracking-wider transition-colors duration-300 transform hover:scale-105"
    >
      DEV<span className="text-red-600">.ADITYA</span>
    </Link>
  );
};

export default Logo;
