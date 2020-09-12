import { useRouter } from 'next/router'
import pickBy from 'lodash/pickBy'
import some from 'lodash/some'
import { useFormState } from 'react-use-form-state'

import api from 'lib/api'

export default function MainSearch({ asanas, tags }) {
  const router = useRouter()

  const props = tags.filter((tag) => tag.type === 'prop')
  const level = tags.filter((tag) => tag.type === 'level')
  const health = tags.filter((tag) => tag.type === 'health')

  const [formState, { select }] = useFormState()

  function handleSubmit(ev) {
    ev.preventDefault()
    const { asana, ...chosenTags } = formState.values
    const hasTags = some(chosenTags)
    if (asana && !hasTags) {
      const chosenAsana = api.getAsana(asana)
      router.push('/asana/[slug]', `/asana/${chosenAsana.slug}`)
    } else {
      const values = pickBy(formState.values)
      const query = new URLSearchParams(values)
      router.push(`/search?${query.toString()}`)
    }
  }

  return (
    <div className="flex flex-col py-6 px-8 mb-12 bg-gray-200 rounded-lg">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <h3 className="text-center">Asana</h3>
        <select {...select('asana')} className="w-full p-4 text-lg mt-2">
          <SelectOptions options={asanas} prefix="asana" />
        </select>
        <div className="flex flex-wrap mt-6">
          <div className="flex flex-col items-center">
            <span>Condição</span>
            <select {...select('health')} className="p-4 text-lg my-1 mx-2">
              <SelectOptions options={health} prefix="health" />
            </select>
          </div>
          <div className="flex flex-col items-center">
            <span>Nível</span>
            <select {...select('level')} className="p-4 text-lg my-1 mx-2">
              <SelectOptions options={level} prefix="level" />
            </select>
          </div>
          <div className="flex flex-col items-center">
            <span>Prop</span>
            <select {...select('props')} className="p-4 text-lg my-1 mx-2">
              <SelectOptions options={props} prefix="props" />
            </select>
          </div>
        </div>
        <button className="self-strech p-4 text-xl mt-6 mx-8 text-center bg-blue-600">
          Buscar
        </button>
      </form>
    </div>
  )
}

const SelectOptions = ({ options, prefix }) => [
  <option key={prefix}></option>,
  options.map((tag) => (
    <option key={`${prefix}-${tag.id}`} value={tag.id}>
      {tag.name}
    </option>
  )),
]
