const { Router } = require('express')

module.exports = function orderRouter(collection) {
  const router = new Router()

  router.post('/', (req, res, next) => {
    collection
      .insertOne(req.body)
      .then(({ ops: [created] }) => {
        res.status(201).json(created)
      })
      .catch(err => next(err))
  })

  router.get('/', (req, res, next) => {
    collection
      .find()
      .toArray()
      .then(orders => res.json(orders))
      .catch(err => next(err))
  })

  router.get('/:orderId', (req, res, next) => {
    collection
      .findOne({ orderId: req.params.orderId })
      .then(order => res.json(order))
      .catch(err => next(err))
  })
  return router
}
