export default function translateGrowthRate (growthRateName) {
  switch (growthRateName) {
    case 'slow': return 'Lenta'
    case 'medium': return 'Media'
    case 'fast': return 'Rápida'
    case 'medium-slow': return 'Medianamente lenta'
    case 'slow-then-very-fast': return 'Lenta, luego muy rápida'
    case 'fast-then-very-slow': return 'Rápida, luego muy lenta'
  }
}
