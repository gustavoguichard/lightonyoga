import { useRef, useState } from 'react'
import matchSorter from 'match-sorter'
import { useRouter } from 'next/router'
import map from 'lodash/map'
import pickBy from 'lodash/pickBy'
import pullAt from 'lodash/pullAt'
import uniq from 'lodash/uniq'
import ReactTags from 'react-tag-autocomplete'

export default function MainSearch({ asanas, tags }) {
  const router = useRouter()

  const reactTags = useRef()
  const [selectedTags, setSelectedTags] = useState([])
  const [suggestions] = useState([...asanas, ...tags])

  async function handleSubmit(ev) {
    ev.preventDefault()
    const results = selectedTags.reduce(
      (result, tag) => {
        if (tag.actions) {
          result.poses = [...result.poses, tag]
        } else {
          result.filters = [...result.filters, tag]
        }
        return result
      },
      { poses: [], filters: [] },
    )
    const { poses, filters } = results
    if (poses.length === 0 && filters.length === 0) {
      return null
    }
    if (poses.length === 1 && filters.length === 0) {
      router.push('/asana/[slug]', `/asana/${poses[0].slug}`)
    } else {
      const queryObj = {
        asanas: map(poses, 'id'),
        tags: map(filters, 'id'),
      }
      const query = new URLSearchParams(
        pickBy(queryObj, (val) => val && val.length),
      )
      router.push(`/search?${query.toString()}`)
    }
  }

  const onDelete = (idx) => {
    if (idx < 0) return null

    const newSelected = [...selectedTags]
    pullAt(newSelected, idx)
    setSelectedTags(newSelected)
  }

  const onAddition = (tag) => {
    setSelectedTags(uniq([...selectedTags, tag]))
  }

  const suggestionsFilter = (query, suggestions) => {
    return matchSorter(suggestions, query, { keys: ['name'] })
  }

  return (
    <div className="flex flex-col w-full sm:w-2/3 md:w-1/2 py-6 px-8 mb-12 bg-gray-200 border-2 border-gray-300 rounded-lg">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <h2 className="mb-1 text-xl text-center leading-snug">
          Comece buscando um <em>Asana</em> ou <mb-1 em>Pranayama</mb-1>
        </h2>
        <ReactTags
          ref={reactTags}
          tags={selectedTags}
          suggestions={suggestions}
          autoresize={false}
          onDelete={onDelete}
          onAddition={onAddition}
          suggestionsTransform={suggestionsFilter}
          placeholderText="Busque um asana, prop, condição, etc..."
          classNames={{
            root: 'w-full flex flex-col',
            selectedTag: 'bg-red-700 rounded m-1',
            search: 'relative order-first',
            searchWrapper: 'w-full ',
            searchInput: 'w-full p-6 text-lg mb-0',
            suggestions:
              'absolute bg-white z-10 py-3 left-0 right-0 rounded shadow-xl',
            suggestionActive: 'bg-gray-200 -ml-2 is-active',
          }}
        />
        <button
          disabled={!selectedTags.length}
          className="self-stretch p-4 text-xl mt-6 mx-2 text-center bg-blue-600"
        >
          Buscar
        </button>
      </form>
    </div>
  )
}
