import { isLightOrDark } from 'utils'

const defaultColors = [
  '#e25f51', // A
  '#f26091', // B
  '#bb65ca', // C
  '#9572cf', // D
  '#7884cd', // E
  '#5b95f9', // F
  '#48c2f9', // G
  '#45d0e2', // H
  '#48b6ac', // I
  '#52bc89', // J
  '#9bce5f', // K
  '#d4e34a', // L
  '#feda10', // M
  '#f7c000', // N
  '#ffa800', // O
  '#ff8a60', // P
  '#c2c2c2', // Q
  '#8fa4af', // R
  '#a2887e', // S
  '#a3a3a3', // T
  '#afb5e2', // U
  '#b39bdd', // V
  '#c2c2c2', // W
  '#7cdeeb', // X
  '#bcaaa4', // Y
  '#add67d' // Z
]

export const Avatar = ({
  name = '',
  src,
  backgroundColor,
  backgroundColors
}: {
  name?: string
  src?: string
  backgroundColor?: string
  backgroundColors?: string[]
}) => {
  let initials = ''
  let defaultBackground = ''

  const sumChars = (str: string) => {
    let sum = 0
    for (let i = 0; i < str.length; i++) {
      sum += str.charCodeAt(i)
    }
    return sum
  }

  // GET AND SET INITIALS
  const names = name.split(' ')
  if (names.length === 1) {
    initials = names[0].substring(0, 1).toUpperCase()
  } else if (names.length > 1) {
    names.forEach((n, i) => {
      initials += names[i].substring(0, 1).toUpperCase()
    })
  }

  // SET BACKGROUND COLOR
  if (/[A-Z]/.test(initials)) {
    const index = initials.charCodeAt(0) - 65

    if (backgroundColor) {
      defaultBackground = backgroundColor
    } else if (backgroundColors && backgroundColors.length) {
      const i = sumChars(name) % backgroundColors.length
      defaultBackground = backgroundColors[i]
    } else {
      defaultBackground = defaultColors[index]
    }
  } else if (/[\d]/.test(initials)) {
    defaultBackground = defaultColors[parseInt(initials)]
  } else {
    defaultBackground = 'hsl(var(--p)/ var(--tw-text-opacity))'
  }

  return (
    <div
      className={`avatar h-12 rounded-full ${isLightOrDark(defaultBackground) === 'light' ? 'text-primary-content' : 'text-primary-content'}`}
      style={{
        backgroundColor: `${defaultBackground}`
      }}
      aria-label={name}
    >
      {src ? <img src={src} /> : <div className="whitespace-nowrap text-center text-xl leading-[3rem]">{initials}</div>}
    </div>
  )
}

export default Avatar
