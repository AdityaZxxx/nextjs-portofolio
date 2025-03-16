import { create } from "zustand";

type GreetingStore = {
  showGreeting: boolean;
  setShowGreeting: (value: boolean) => void;
};

export const useGreetingStore = create<GreetingStore>((set) => ({
  showGreeting: true, // Default value
  setShowGreeting: (value) => set({ showGreeting: value }),
}));
