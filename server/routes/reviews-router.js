const { Router } = require('express')

module.exports = function reviewsRouter(collection) {
  const router = new Router()

  router.get('/', (req, res, next) => {
    collection
      .find()
      .toArray()
      .then(reviews => res.json(reviews))
      .catch(err => next(err))
  })

  router.get('/:id', (req, res, next) => {
    collection
      .findOne({ campgroundId: req.params.id })
      .then(reviews => res.json(reviews))
      .catch(err => next(err))
  })

  router.put('/:id', (req, res, next) => {
    collection
      .update({ campgroundId: req.params.id }, { $push: { reviews: req.body } }, { upsert: true })
      .then(review => res.json(review))
      .catch(err => next(err))
  })
  return router
}
