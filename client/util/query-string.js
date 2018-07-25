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
  }
}
