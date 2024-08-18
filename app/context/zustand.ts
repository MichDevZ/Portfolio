import { create } from 'zustand'





interface ILanguage {
    isChecked: boolean;
    changeChecked: (isChecked: boolean) => void
}



export const useBearStore = create<ILanguage>((set) => ({
  isChecked: false,
  changeChecked: (isChecked) => set((state) => ({ isChecked: !isChecked})),
}))