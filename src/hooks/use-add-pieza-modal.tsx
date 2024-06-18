import { create } from 'zustand';

interface AddPiezaModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useAddPiezaModal = create<AddPiezaModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useAddPiezaModal;
