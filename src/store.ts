import { create } from "zustand";

interface PlanetStore {
  planet: string;
  tab: string;
  isOpen: boolean;
  setPlanet: (planet: string) => void;
  setTab: (tab: string) => void;
  setOpen: () => void;
}

const usePlanetStore = create<PlanetStore>((set) => ({
  planet: "mercury",
  tab: "overview",
  isOpen: false,
  setPlanet: (planet) => set(() => ({ planet: planet })),
  setOpen: () => set((store) => ({ isOpen: !store.isOpen })),
  setTab: (tab) => set(() => ({ tab: tab })),
}));

export default usePlanetStore;
