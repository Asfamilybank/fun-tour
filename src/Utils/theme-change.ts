const themeChange = () => {
  const media = window.matchMedia('(prefers-color-scheme: dark)')
  const callback: (this: MediaQueryList, ev: MediaQueryListEvent) => any = (e) => {
    const prefersDarkMode = e.matches
    if (prefersDarkMode) {
      //  ''
    }
  }
  if (typeof media.addEventListener === 'function') {
    media.addEventListener('change', callback)
  } else if (typeof media.addListener === 'function') {
    media.addListener(callback)
  }
}

export default themeChange
