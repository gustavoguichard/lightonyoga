import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import map from 'lodash/map'

import api from 'lib/api'

import Layout from 'components/layout'
import Tag from 'components/tag'
import AsanaList from 'components/asana-list'
import VariationsList from 'components/variations-list'

const changedSearch = (setLoading, setList, setSearch) => async (query) => {
  setLoading(true)
  const asanasIds = query.asanas?.split(',').map((n) => Number(n)) || []
  const tagsIds = query.tags?.split(',').map((n) => Number(n)) || []
  const asanas = await api.listAsanasFromIds(asanasIds)
  const tags = await api.listTags(tagsIds)
  setSearch({ asanas, tags })
  const list = asanas.length
    ? await asanas.reduce((obj, asana) => {
        obj[asana.name] = api.listVariations({
          asanaId: asana.id,
          tags: tagsIds,
        })
        return obj
      }, {})
    : { Variações: await api.listVariations({ tags: tagsIds }) }
  setList(list)
  setLoading(false)
}

export default function Search() {
  const [loading, setLoading] = useState(true)
  const [list, setList] = useState([])
  const [search, setSearch] = useState({})
  const handleChange = changedSearch(setLoading, setList, setSearch)

  const router = useRouter()

  useEffect(() => {
    handleChange(router.query)
  }, [router.query])

  return (
    <Layout title="Busca">
      {loading ? (
        'Carregando...'
      ) : (
        <div className="md:flex md:flex-col">
          <div>
            <h4>Resultados para:</h4>
            {search.tags?.map((tag) => (
              <Tag key={tag.name + tag.id} tag={tag} />
            ))}
            <AsanaList hideTitle asanas={search.asanas} />
          </div>
          {map(list, (variations, name) => (
            <div className="w-full" key={name}>
              <h3>{name}</h3>
              {variations.length ? (
                <VariationsList variations={variations} />
              ) : (
                'Nada encontrado'
              )}
            </div>
          ))}
        </div>
      )}
    </Layout>
  )
}
