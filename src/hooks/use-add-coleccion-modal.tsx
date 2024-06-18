import { create } from 'zustand';

interface AddColeccionModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useAddColeccionModal = create<AddColeccionModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useAddColeccionModal;
