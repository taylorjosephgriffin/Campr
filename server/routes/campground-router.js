const { Router } = require('express')

module.exports = function campgroundRouter(collection) {
  const router = new Router()

  router.get('/', (req, res) => {
    collection
      .find()
      .toArray()
      .then(campgrounds => res.json(campgrounds))
      .catch(err => console.error(err))
  })

  router.get('/:id', (req, res) => {
    collection
      .findOne({ id: req.params.id })
      .then(campground => res.json(campground))
      .catch(err => console.error(err))
  })
  return router
}
