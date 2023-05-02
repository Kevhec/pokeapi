const colorMap = {
  red: '#F57D31',
  blue: '#0489b6',
  green: '#7CB342',
  brown: '#7B5B3F',
  purple: '#8E44AD',
  yellow: '#FDD835',
  pink: '#FFC0CB',
  white: '#AFAFAF',
  black: '#1B1B1B',
  gray: '#808080'
}

export function toSoftColor (color) {
  return colorMap[color] || color
}
