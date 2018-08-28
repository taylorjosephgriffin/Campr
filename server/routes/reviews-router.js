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
      .findOne({ id: req.params.id })
      .then(reviews => res.json(reviews))
      .catch(err => next(err))
  })

  router.put('/:id', (req, res, next) => {
    collection
      .findOneAndInsert({id: req.params.id}, req.body)
      .then(() => res.status(201).json())
      .catch(err => next(err))
  })
  return router
}
