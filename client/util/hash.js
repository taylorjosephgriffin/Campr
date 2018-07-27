import queryString from './query-string'

export default {
  parse(hash = '') {
    const [ path, query ] = hash.replace(/^#/, '').split('?')
    return {
      path,
      params: queryString.parse(query)
    }
  },
  stringify({ path, params }) {
    return '#' + path + queryString.stringify(params)
  }
}
