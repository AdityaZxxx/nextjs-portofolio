import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Aditya Developer Portfolio",
    default: "Aditya Developer Portfolio - Neo Brutalism",
  },
  metadataBase: new URL("https://aditya-portfolio.vercel.app/"),
  description: "A portfolio showcasing my work as a software developer.",
  keywords: [
    "portfolio",
    "software developer",
    "web development",
    "neo brutalism",
  ],
  authors: [{ name: "Aditya" }],
  openGraph: {
    title: "Aditya Developer Portfolio - Neo Brutalism",
    description: "A portfolio showcasing my work as a software developer.",
    images: [
      {
        url: "/og-image.jpg",
        width: 800,
        height: 600,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Developer Portfolio - Neo Brutalism",
    description: "A portfolio showcasing my work as a software developer.",
    images: ["/og-image.jpg"],
  },
};
