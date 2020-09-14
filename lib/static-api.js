import isObject from 'lodash/isObject'
import pick from 'lodash/pick'

import asanas from 'data/asanas.js'
import movements from 'data/movements.js'
import families from 'data/families.js'
import glossary from 'data/glossary.js'
import sequences from 'data/sequences.js'
import variations from 'data/variations.js'
import tags from 'data/tags.js'

const findById = (collection, ...fields) => (iteratee) => {
  const id = isObject(iteratee) ? iteratee.id : iteratee
  const item = collection.find((item) => item.id === id)
  const result = pick(item, ['id', ...fields])
  return isObject(result) ? { ...iteratee, ...result } : result
}

export const findAsana = findById(asanas, 'name', 'slug', 'meaning')
export const findVariation = findById(variations, 'name', 'slug', 'tagline')
export const findFamily = findById(families, 'name', 'slug', 'meaning')
export const findWord = findById(glossary, 'word', 'translation')
export const findMovement = findById(movements, 'name')
export const findSequence = findById(sequences, 'name', 'slug')
export const findTag = findById(tags, 'name', 'slug', 'type')

export const findPosture = ({ id, variation, ...fields }) => {
  const asana = findById(asanas, 'name', 'slug', 'meaning')(id)
  const asanaVariation = findById(
    variations,
    'name',
    'slug',
    'tagline',
  )(variation)
  return variation
    ? { ...fields, asana, variation: asanaVariation }
    : { ...fields, asana }
}

export default {
  findAsana,
  findFamily,
  findWord,
  findMovement,
  findTag,
  findSequence,
  findPosture,
  findVariation,
}
