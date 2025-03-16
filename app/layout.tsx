import ClientLayout from "@/components/ui/ClientLayout";
import MotionFrammerWrapper from "@/components/ui/MotionFrammerWrapper";
import { ThemeProvider } from "@/lib/ThemeContext";
import { ReactNode } from "react";
import GreetingPage from "../components/ui/Greetings";
import { GreetingProvider } from "../lib/GreetingContect";
import "./globals.css";

export { metadata } from "@/data/metadata";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <GreetingProvider>
      <html lang="en" suppressHydrationWarning>
        <body id="root">
          <GreetingPage />
          <ThemeProvider>
            <MotionFrammerWrapper>
              <ClientLayout>{children}</ClientLayout>
            </MotionFrammerWrapper>
          </ThemeProvider>
        </body>
      </html>
    </GreetingProvider>
  );
}
