import { useRef, useState, useEffect } from 'react'
import { matchSorter } from 'match-sorter'
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
        if (tag.url?.includes('asanas')) {
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

  useEffect(() => {
    reactTags.current?.input.current.input.current?.focus()
  }, [])

  return (
    <div className="flex flex-col w-full sm:w-2/3 md:w-1/2 pt-2 pb-4 px-8 mb-8 bg-gray-50 border border-gray-200 rounded-lg">
      <form className="flex flex-col reset-list" onSubmit={handleSubmit}>
        <h2 className="mb-2 text-xl text-center leading-snug text-gray-600 text-semibold">
          Busque um <em>Asana</em>, prop, condição...
        </h2>
        <ReactTags
          ref={reactTags}
          tags={selectedTags}
          suggestions={suggestions}
          autoresize={false}
          onDelete={onDelete}
          onAddition={onAddition}
          suggestionsTransform={suggestionsFilter}
          placeholderText="Comece a digitar..."
          classNames={{
            root: 'w-full flex flex-col',
            selectedTag:
              'bg-yellow-200 border-yellow-800 text-yellow-900 hover:bg-yellow-400 border-2 rounded m-1',
            search: 'relative order-first',
            searchWrapper: 'w-full ',
            searchInput: 'w-full p-6 text-lg mb-0',
            suggestions:
              'absolute bg-white z-10 p-3 left-0 right-0 rounded shadow-xl',
            suggestionActive: 'bg-gray-200 pl-2 is-active',
          }}
        />
        <button
          disabled={!selectedTags.length}
          className="self-stretch p-4 text-xl mt-2 text-center bg-blue-600"
        >
          Ver resultados
        </button>
      </form>
    </div>
  )
}
