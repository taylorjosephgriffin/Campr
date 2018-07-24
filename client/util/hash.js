import queryString from './query-string.js'

export default {
  parse(hash = '') {
    const [ path, query ] = hash.replace(/^#/, '').split('?')
    return {
      path,
      params: queryString.parse(query)
    }
  }
}
