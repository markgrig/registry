import { read, utils } from 'xlsx'

export default async function getItemsXLSX (url) {
  try {

    const response = await fetch(url)

    if (!response.ok) {
      throw new Error('It is bad Response!')
    }


    const blob = await response.arrayBuffer()
    const res =  read(blob)
    const data = utils.sheet_to_json(res.Sheets[res.SheetNames[0]]);

    return data

  } catch {
    throw new Error(`Error in GET: ${url}`)
  }
}


