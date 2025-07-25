import { create } from "zustand"

export const useAuthModal = create((set) => ({
 isOpen: false,
 openModal: () => set({ isOpen: true }),
 closeModal: () => set({ isOpen: false }),
}))