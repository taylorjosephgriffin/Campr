const { Router } = require('express')

module.exports = function campgroundRouter(collection) {
  const router = new Router()

  router.get('/', (req, res, next) => {
    let amenities = Object.keys(req.query)
    let filterQuery = { amenities: { $all: amenities } }

    if (amenities.length === 0) filterQuery = {}

    collection
      .find(filterQuery)
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
