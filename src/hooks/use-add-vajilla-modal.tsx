import { create } from 'zustand';

interface AddVajillaModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useAddVajillaModal = create<AddVajillaModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useAddVajillaModal;
