import { create } from "zustand";

interface PlanetStore {
  planet: string;
  isOpen: boolean;
  setPlanet: (planet: string) => void;
  setOpen: () => void;
}

const usePlanetStore = create<PlanetStore>((set) => ({
  planet: "mercury",
  isOpen: false,
  setPlanet: (planet) => set(() => ({ planet: planet })),
  setOpen: () => set((store) => ({ isOpen: !store.isOpen })),
}));

export default usePlanetStore;
