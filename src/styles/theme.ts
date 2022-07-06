import { PaletteMode, PaletteOptions, ThemeOptions } from '@mui/material'

export const lightPalette: PaletteOptions = {
  mode: 'light',
  primary: {
    main: '#4C56DD'
  },
  secondary: {
    main: '#DD4C4C'
  },
  error: {
    main: '#DA3E3E'
  },
  info: {
    main: '#2170E6'
  }
}

export const darkPalette: PaletteOptions = {
  mode: 'dark'
}

export const getTheme = (mode: PaletteMode): ThemeOptions => {
  return {
    palette:
      mode === 'light'
        ? lightPalette
        : mode === 'dark'
        ? darkPalette
        : undefined,
    components: {
      MuiTooltip: {
        defaultProps: {
          arrow: true
        }
      }
    }
  }
}
