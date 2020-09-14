import find from 'lodash/find'
import map from 'lodash/map'
import intersection from 'lodash/intersection'
import kebabCase from 'lodash/kebabCase'
import reduce from 'lodash/reduce'

import staticApi from 'lib/static-api'

import movements from 'data/movements.js'
import families from 'data/families.js'
import glossary from 'data/glossary.js'
import tags from 'data/tags.js'

const asanas = require('data/asanas').default.map((asana) => ({
  ...asana,
  family: staticApi.findFamily(asana.family),
  sanscritWords: asana.sanscritWords?.map(staticApi.findWord),
  movements: asana.movements?.map(staticApi.findMovement),
  krama: {
    preparations: asana.krama?.preparations?.map(staticApi.findAsana),
    connectedAsanas: asana.krama?.connectedAsanas?.map(staticApi.findAsana),
    compensations: asana.krama?.compensations?.map(staticApi.findAsana),
  },
}))
const variations = require('data/variations').default.map((item) => ({
  ...item,
  asana: staticApi.findAsana(item.asana),
  tags: item.tags?.map(staticApi.findTag),
}))
const sequences = require('data/sequences').default.map((item) => ({
  ...item,
  tags: item.tags?.map(staticApi.findTag),
  asanas: item.asanas?.map(staticApi.findPosture),
}))

const getById = (arr) => (id) => find(arr, (curr) => curr.id === Number(id))
const getBySlug = (arr) => (slug) => find(arr, (curr) => curr.slug === slug)
const listFromIds = (arr) => (ids) =>
  ids ? ids.map((id) => arr.find((item) => item.id === Number(id))) : arr

const getWordBySlug = (slug) =>
  glossary.find(({ word }) => kebabCase(word) === slug)

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
        ? intersection(normalizedTags, currTags).length === tags.length
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
  getFamilyBySlug: getBySlug(families),
  getMovementBySlug: getBySlug(movements),
  getSequenceBySlug: getBySlug(sequences),
  getTagBySlug: getBySlug(tags),
  getVariationBySlug,
  getWordBySlug,
  listAsanas,
  listFamilies: listFromIds(families),
  listGlossary: listFromIds(glossary),
  listMovements: listFromIds(movements),
  listSequences: listFromIds(sequences),
  listTags: listFromIds(tags),
  listVariations,
}
