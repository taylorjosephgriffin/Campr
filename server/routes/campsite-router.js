const { Router } = require('express')

module.exports = function campsiteRouter(collection) {
  const router = new Router()

  router.get('/', (req, res, next) => {
    collection
      .find()
      .toArray()
      .then(campsites => res.json(campsites))
      .catch(err => next(err))
  })

  router.get('/:id', (req, res, next) => {
    collection
      .findOne({ id: req.params.id })
      .then(campsites => res.json(campsites))
      .catch(err => next(err))
  })
  return router
}
