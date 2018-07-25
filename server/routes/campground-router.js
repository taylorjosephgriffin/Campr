const { Router } = require('express')

module.exports = function campgroundRouter(collection) {
  const router = new Router()

  router.get('/', (req, res, next) => {
    collection
      .find()
      .toArray()
      .then(campgrounds => res.json(campgrounds))
      .catch(err => next(err))
  })

  router.get('/:id', (req, res, next) => {
    collection
      .findOne({ id: req.params.id })
      .then(campground => res.json(campground))
      .catch(err => next(err))
  })
  return router
}
