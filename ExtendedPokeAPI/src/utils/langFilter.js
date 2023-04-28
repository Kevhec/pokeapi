export default function langFilter (array, lang) {
  if (!Array.isArray(array)) return undefined
  return array?.filter(data => data?.language?.name === lang)
}
