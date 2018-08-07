const { Router } = require('express')

module.exports = function reservationRouter(collection) {
  const router = new Router()

  router.post('/', (req, res, next) => {
    collection
      .insertOne(req.body)
      .then(({ ops: [created] }) => {
        res.status(201).json(created)
      })
      .catch(err => next(err))
  })

  router.put('/:reservationId', (req, res, next) => {
    const { body, params: { id } } = req
    collection
      .findOneAndUpdate(
        { id },
        { $set: { reservation: body } },
        { returnOriginal: false }
      )
      .then(({ value }) => {
        value
          ? res.json(value)
          : res.sendState(404)
      })
      .catch(err => next(err))
  })

  router.delete('/:reservationId', (req, res, next) => {
    collection
      .findOneAndDelete({reservationId: req.params.reservationId})
      .then(reservation => res.json())
      .catch(err => next(err))
  })

  router.get('/', (req, res, next) => {
    collection
      .find()
      .toArray()
      .then(reservations => res.json(reservations))
      .catch(err => next(err))
  })

  router.get('/:reservationId', (req, res, next) => {
    collection
      .findOne({ reservationId: req.params.reservationId })
      .then(reservation => res.json(reservation))
      .catch(err => next(err))
  })
  return router
}
