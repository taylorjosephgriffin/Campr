export default {
  parse(query) {
    if (!query) return {}
    return query
      .replace(/^(.*?)\?/, '')
      .split('&')
      .map(pair => pair.split('='))
      .reduce((params, [ key, value ]) => ({
        ...params,
        [key]: value
      }), {})
  },
  stringify(params = {}) {
    const keys = Object.keys(params)
    if (!keys.length) return ''
    return '?' + keys
      .map(key => `${key}=${params[key]}`)
      .join('&')
  }
}
