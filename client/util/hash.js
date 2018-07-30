import * as qs from 'qs'

export default {
  parse(hash = '') {
    const [ path, query ] = hash.replace(/^#/, '').split('?')
    return {
      path,
      params: qs.parse(query)
    }
  },
  stringify({ path, params }) {
    return '#' + path + qs.stringify(params)
  }
}
