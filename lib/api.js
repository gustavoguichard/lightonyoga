import compact from 'lodash/compact'

const fetchApi = async (path, id, params = {}) => {
  const emptyResponse = id ? {} : []
  try {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...params?.headers,
      },
      ...params,
    }

    const fullPath = compact([process.env.NEXT_PUBLIC_API_URL, path, id])
    const response = await fetch(fullPath.join('/') + '.json', options)
    if (response.status < 400) {
      const json = await response.json()
      return json
    }
    return emptyResponse
  } catch (error) {
    console.log(error)
    return emptyResponse
  }
}

export default { fetch: fetchApi }
