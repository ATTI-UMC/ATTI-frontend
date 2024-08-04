import { create } from "zustand";

export const useOnboardingStore = create((set) => ({
  address: "",
  disable: true,
  setNav: (page) => set({ address: page }),
  setDisable: (disable) => set({ disable }),
}));
