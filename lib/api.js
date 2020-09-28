const fetchApi = async (path) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${path}.json`)
  const json = await response.json()
  console.log(json)
  return json
}

const listAsanas = async () => fetchApi('asanas')
const listVariations = async () => fetchApi('variations')
const listGlossary = async () => fetchApi('words')
const listFamilies = async () => fetchApi('families')
const listMovements = async () => fetchApi('movements')
const listTags = async () => fetchApi('tags')
const getAsanaBySlug = async (slug) => fetchApi(`asanas/${slug}`)
const getFamilyBySlug = async (slug) => fetchApi(`families/${slug}`)
const getWordBySlug = async (slug) => fetchApi(`words/${slug}`)
const getMovementBySlug = async (slug) => fetchApi(`movements/${slug}`)
const getVariationBySlug = async (slug) => fetchApi(`variations/${slug}`)
const getTagBySlug = async (slug) => fetchApi(`tags/${slug}`)

const listAsanasFromIds = async (ids) => {
  const asanas = listAsanas()
  return ids ? asanas.filter(asana => ids.includes(asana.id)) : asanas
}
// const sequences = require('data/sequences').default.map((item) => ({
//   ...item,
//   tags: [],
//   asanas: item.asanas?.map(staticApi.findPosture),
// }))

export default {
  getAsanaBySlug,
  getFamilyBySlug,
  getMovementBySlug,
  // getSequenceBySlug: getBySlug(sequences),
  getTagBySlug,
  getVariationBySlug,
  getWordBySlug,
  listAsanas,
  listAsanasFromIds,
  listFamilies,
  listGlossary,
  listMovements,
  // listSequences: listFromIds(sequences),
  listTags,
  listVariations,
}
