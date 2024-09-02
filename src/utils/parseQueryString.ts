interface QueryParams {
  [key: string]: string
}

function parseQueryString(queryString: string): QueryParams {
  const params = new URLSearchParams(queryString)
  const result: QueryParams = {}

  for (const [key, value] of params.entries()) {
    result[key] = value
  }

  return result
}

export default parseQueryString
