import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import map from 'lodash/map'
import groupBy from 'lodash/groupBy'
import values from 'lodash/values'

import api from 'lib/api'

import Layout from 'components/layout'
import Tag from 'components/tag'
import VariationsList from 'components/variations-list'

const changedSearch = (setLoading, setList, setSearch) => async (query) => {
  setLoading(true)
  const { asana, ...rest } = query
  const asanaObj = await api.getAsana(query.asana)
  const tagsIds = values(rest)
  const tags = await api.listTags(tagsIds)
  setSearch({ asana: asanaObj, tags })
  const result = await api.listVariations({ asanaId: asana, tags: tagsIds })
  const list = groupBy(result, 'asana.name')
  setList(list)
  setLoading(false)
}

const Subtitle = ({ search }) => {
  const { asana, tags } = search
  return (
    <>
      {asana && `${asana.name} - `}
      {tags?.map((tag) => (
        <Tag key={tag.id} tag={tag} />
      ))}
    </>
  )
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
    <Layout title="Busca" subtitle={<Subtitle search={search} />}>
      {loading ? (
        'Carregando...'
      ) : (
        <div className="md:flex">
          {values(list).length
            ? map(list, (variations, name) => (
                <div key={name}>
                  {!!search.asana || <h3>{name}</h3>}
                  <VariationsList variations={variations} />
                </div>
              ))
            : 'Nada encontrado'}
        </div>
      )}
    </Layout>
  )
}
