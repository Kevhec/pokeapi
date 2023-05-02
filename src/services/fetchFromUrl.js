export async function fetchFromUrl ({ url }) {
  if (!url) return
  const res = await fetch(url)
  const json = await res.json()
  return (json)
}
