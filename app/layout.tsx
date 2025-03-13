import ClientLayout from "@/components/ClientLayout";
import MotionFrammerWrapper from "@/components/ui/MotionFrammerWrapper";
import { ThemeProvider } from "@/lib/ThemeContext";
import { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Developer Portfolio - Neo Brutalism",
  description: "A portfolio showcasing my work as a software developer.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body id="root">
        <ThemeProvider>
          <MotionFrammerWrapper>
            <ClientLayout>{children}</ClientLayout>
          </MotionFrammerWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
