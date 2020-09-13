import find from 'lodash/find'
import intersection from 'lodash/intersection'
import kebabCase from 'lodash/kebabCase'
import reduce from 'lodash/reduce'

import asanas from 'data/asanas.js'
import allVariations from 'data/variations.js'
import movements from 'data/movements.js'
import families from 'data/families.js'
import glossary from 'data/glossary.js'
import tags from 'data/tags.js'

const getById = (arr) => (id) => find(arr, (curr) => curr.id === Number(id))
const getBySlug = (arr) => (slug) => find(arr, (curr) => curr.slug === slug)
const listFromIds = (arr) => (ids) =>
  ids ? ids.map((id) => arr.find((item) => item.id === Number(id))) : arr

const getAsana = getById(asanas)
const getTag = getById(tags)
const getWordBySlug = (slug) =>
  glossary.find(({ word }) => kebabCase(word) === slug)

const variations = allVariations.map((variation) => ({
  ...variation,
  asana: getAsana(variation.asanaId),
  tags: variation.tags.map((tag) => getTag(tag)),
}))

const listAsanas = ({ familyId, movement, word } = {}) => {
  return reduce(
    asanas,
    (result, curr) => {
      const belongsToFamily = !familyId || curr.family === Number(familyId)
      const belongsToMovement = !movement || curr.movements.includes(movement)
      const belongsToWord = !word || curr.sanscritWords.includes(word)
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
      const belongsToAsana = !asanaId || curr.asanaId === Number(asanaId)
      const belongsToTags = !!tags?.length
        ? intersection(normalizedTags, currTags).length === tags.length
        : true
      const shouldReturn = belongsToAsana && belongsToTags
      return shouldReturn ? [...result, curr] : result
    },
    [],
  )
}

export default {
  getAsana,
  getAsanaBySlug: getBySlug(asanas),
  getFamily: getById(families),
  getFamilyBySlug: getBySlug(families),
  getMovement: getById(movements),
  getTag,
  getTagBySlug: getBySlug(tags),
  getVariationBySlug: getBySlug(variations),
  getWord: getById(glossary),
  getWordBySlug,
  listAsanas,
  listFamilies: listFromIds(families),
  listGlossary: listFromIds(glossary),
  listMovements: listFromIds(movements),
  listTags: listFromIds(tags),
  listVariations,
}
