import { atom } from "recoil"

export const modalState = atom<string | null>({
  key: 'modalState',
  default: null
})