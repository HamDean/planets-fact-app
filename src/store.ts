import { create } from "zustand";

interface PlanetStore {
  planet: string;
  tab: string;
  isOpen: boolean;
  selectedIndex: number;
  setPlanet: (planet: string) => void;
  setTab: (tab: string) => void;
  setOpen: () => void;
  setSelectedIndex: (index: number) => void;
}

const usePlanetStore = create<PlanetStore>((set) => ({
  planet: "mercury",
  tab: "overview",
  isOpen: false,
  selectedIndex: 1,
  setPlanet: (planet) => set(() => ({ planet: planet })),
  setOpen: () => set((store) => ({ isOpen: !store.isOpen })),
  setTab: (tab) => set(() => ({ tab: tab })),
  setSelectedIndex: (index) => set(() => ({ selectedIndex: index })),
}));

export default usePlanetStore;
