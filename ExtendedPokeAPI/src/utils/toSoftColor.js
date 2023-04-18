export function toSoftColor (color) {
  let softColor
  switch (color) {
    case 'red':
      softColor = '#FF5733'
      break
    case 'blue':
      softColor = '#0489b6'
      break
    case 'green':
      softColor = '#7CB342'
      break
    case 'brown':
      softColor = '#7B5B3F'
      break
    case 'purple':
      softColor = '#8E44AD'
      break
    case 'yellow':
      softColor = '#FDD835'
      break
    default:
      softColor = color
  }

  return softColor
}
