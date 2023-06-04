export default async function getItemsJSON (url , header) {
  try {
    const response = await fetch(url, header)

    if (!response.ok) {
      throw new Error('It is bad Response!')
    }

    const res = await response.json()

    return res.data
  } catch {
    throw new Error(`Error in GET: ${url}`)
  }
}
