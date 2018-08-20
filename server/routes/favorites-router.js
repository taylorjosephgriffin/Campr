const { Router } = require('express')

module.exports = function favoritesRouter(collection) {
  const router = new Router()

  router.get('/', (req, res, next) => {
    collection
      .find()
      .toArray
      .then(favorites => res.json(favorites))
      .catch(err => next(err))
  })

  router.put('/:id', (req, res, next) => {
    collection
      .insertOne(req.body)
      .then(({ ops: [created] }) => {
        res.status(201).json(created)
      })
      .catch(err => next(err))
  })

  router.delete('/:id', (req, res, next) => {
    collection
      .findOneAndDelete({id: req.params.id})
      .then(() => res.json())
      .catch(err => next(err))
  })
}
