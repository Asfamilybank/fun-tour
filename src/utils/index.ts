/**
 * sleep
 * @param duration to sleep time
 */
export const sleep = (duration: number) => {
  return new Promise<void>((resolve) => setTimeout(resolve, duration))
}

export const hexToRgb = (hex: string) => {
  if (hex.charAt && hex.charAt(0) === '#') {
    hex = hex.slice(1)
  }

  if (hex.length === 3) {
    hex = hex.split('').reduce((pre, cur) => pre + cur + cur, '')
  }

  const bigint = parseInt(hex, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255

  return [r, g, b]
}

export const isLightOrDark = (hex: string) => {
  const [r, g, b] = hexToRgb(hex)
  const o = Math.round((r * 299 + g * 587 + b * 114) / 1000)

  return o <= 180 ? 'dark' : 'light'
}
