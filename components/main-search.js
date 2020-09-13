import { useRouter } from 'next/router'
import Link from 'next/link'
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

  async function handleSubmit(ev) {
    ev.preventDefault()
    const { asana, ...chosenTags } = formState.values
    const hasTags = some(chosenTags)
    if (asana && !hasTags) {
      const chosenAsana = await api.getAsana(asana)
      router.push('/asana/[slug]', `/asana/${chosenAsana.slug}`)
    } else {
      const values = pickBy(formState.values)
      const query = new URLSearchParams(values)
      router.push(`/search?${query.toString()}`)
    }
  }

  return (
    <div className="flex flex-col py-6 px-8 mb-12 bg-gray-200 border-2 border-gray-300 rounded-lg">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <h2 className="mb-1 text-xl text-center leading-snug">
          Comece buscando um <em>Asana</em> ou <mb-1 em>Pranayama</mb-1>
        </h2>
        <select {...select('asana')} className="w-full p-4 text-lg mt-2">
          <SelectOptions options={asanas} prefix="asana" />
        </select>
        <span className="text-xs text-right">
          <Link href="/lista-de-asanas">Ver lista de todos Asanas</Link>
        </span>
        <div className="flex flex-wrap justify-center mt-6">
          <div className="flex flex-col items-center">
            <span className="text-md">Condição</span>
            <select {...select('health')} className="p-4 text-lg my-1 mx-2">
              <SelectOptions options={health} prefix="health" />
            </select>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-md">Nível</span>
            <select {...select('level')} className="p-4 text-lg my-1 mx-2">
              <SelectOptions options={level} prefix="level" />
            </select>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-md">Prop</span>
            <select {...select('props')} className="p-4 text-lg my-1 mx-2">
              <SelectOptions options={props} prefix="props" />
            </select>
          </div>
        </div>
        <button className="self-stretch p-4 text-xl mt-6 mx-2 text-center bg-blue-600">
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
