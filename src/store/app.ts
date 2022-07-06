import { PaletteMode } from '@mui/material'
import { atom } from 'recoil'

export const darkMode = atom<PaletteMode>({
  key: 'app/darkMode',
  default: 'light'
})
