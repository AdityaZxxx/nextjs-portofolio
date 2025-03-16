// GreetingContext.tsx
"use client";

import { createContext, useContext, useState } from "react";

type GreetingContextType = {
  showGreeting: boolean;
  setShowGreeting: (value: boolean) => void;
};

const GreetingContext = createContext<GreetingContextType>({
  showGreeting: true,
  setShowGreeting: () => {},
});

export const useGreeting = () => useContext(GreetingContext);

export function GreetingProvider({ children }: { children: React.ReactNode }) {
  const [showGreeting, setShowGreeting] = useState(true);

  return (
    <GreetingContext.Provider value={{ showGreeting, setShowGreeting }}>
      {children}
    </GreetingContext.Provider>
  );
}
