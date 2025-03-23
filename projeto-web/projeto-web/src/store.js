import { create } from "zustand";

export const useItemsStore = create((set) => ({
  items: [
    { id: 1, name: "Notebook Gamer", price: 5000 },
    { id: 2, name: "Teclado Mecânico", price: 350 },
    { id: 3, name: "Monitor 144Hz", price: 1200 },
  ],
}));
