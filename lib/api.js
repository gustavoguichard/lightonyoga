import find from 'lodash/find'
import map from 'lodash/map'
import intersection from 'lodash/intersection'
import kebabCase from 'lodash/kebabCase'
import reduce from 'lodash/reduce'

import staticApi from 'lib/static-api'

import movements from 'data/movements.js'
import tags from 'data/tags.js'

const fetchApi = async (path) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${path}.json`)
  const json = await response.json()
  console.log(json)
  return json
}

const listGlossary = async () => fetchApi('words')
const listFamilies = async () => fetchApi('families')
const getFamilyBySlug = async (slug) => fetchApi(`families/${slug}`)
const getWordBySlug = async (slug) => fetchApi(`words/${slug}`)

const asanas = require('data/asanas').default.map((asana) => ({
  ...asana,
  image: `/asanas/${asana.slug}.png`,
  link: `/asana/${asana.slug}`,
  family: {},
  sanscritWords: [],
  movements: asana.movements?.map(staticApi.findMovement),
  krama: {
    preparations: asana.krama?.preparations?.map(staticApi.findAsana),
    connectedAsanas: asana.krama?.connectedAsanas?.map(staticApi.findAsana),
    compensations: asana.krama?.compensations?.map(staticApi.findAsana),
  },
}))
const variations = require('data/variations').default.map((item) => {
  const asana = staticApi.findAsana(item.asana)
  return {
    ...item,
    asana,
    image: `/variations/${item.id}.png`,
    link: `/asana/${asana?.slug}/${item.slug}`,

    tags: item.tags?.map(staticApi.findTag),
  }
})
const sequences = require('data/sequences').default.map((item) => ({
  ...item,
  tags: item.tags?.map(staticApi.findTag),
  asanas: item.asanas?.map(staticApi.findPosture),
}))

const getById = (arr) => (id) => find(arr, (curr) => curr.id === Number(id))
const getBySlug = (arr) => (slug) => find(arr, (curr) => curr.slug === slug)
const listFromIds = (arr) => (ids) =>
  ids ? ids.map((id) => arr.find((item) => item.id === Number(id))) : arr

const getMovementBySlug = (slug) =>
  movements.find(({ name }) => kebabCase(name) === slug)

const listAsanas = ({ family, movement, word } = {}) => {
  return reduce(
    asanas,
    (result, curr) => {
      const belongsToFamily = !family || curr.family?.id === Number(family)
      const belongsToMovement =
        !movement || map(curr.movements, 'id').includes(movement)
      const belongsToWord =
        !word || map(curr.sanscritWords, 'id').includes(word)
      const shouldReturn = belongsToFamily && belongsToMovement && belongsToWord
      return shouldReturn ? [...result, curr] : result
    },
    [],
  )
}

const listVariations = ({ asanaId, tags } = {}) => {
  return reduce(
    variations,
    (result, curr) => {
      const normalizedTags = tags?.map((tag) => Number(tag))
      const currTags = curr.tags.map((tag) => tag.id)
      const belongsToAsana = !asanaId || curr.asana?.id === Number(asanaId)
      const belongsToTags = !!tags?.length
        ? intersection(normalizedTags, currTags).length > 0
        : true
      const shouldReturn = belongsToAsana && belongsToTags
      return shouldReturn ? [...result, curr] : result
    },
    [],
  )
}

const getVariationBySlug = (slug, asanaId) => {
  return variations
    .filter((item) => !asanaId || asanaId === item.asana?.id)
    .find((item) => item.slug === slug)
}

export default {
  getAsana: getById(asanas),
  getAsanaBySlug: getBySlug(asanas),
  getFamilyBySlug,
  getMovementBySlug,
  getSequenceBySlug: getBySlug(sequences),
  getTagBySlug: getBySlug(tags),
  getVariationBySlug,
  getWordBySlug,
  listAsanas,
  listAsanasFromIds: listFromIds(asanas),
  listFamilies,
  listGlossary,
  listMovements: listFromIds(movements),
  listSequences: listFromIds(sequences),
  listTags: listFromIds(tags),
  listVariations,
}
