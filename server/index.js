require('dotenv/config')
const { MongoClient } = require('mongodb')
const express = require('express')
const bodyParser = require('body-parser')
const campgroundRouter = require('./routes/campground-router.js')
const campsiteRouter = require('./routes/campsite-router.js')
const reservationRouter = require('./routes/reservation-router.js')
const orderRouter = require('./routes/order-router.js')
const favoritesRouter = require('./routes/favorites-router.js')
const path = require('path')
const sgMail = require('@sendgrid/mail')
const fetch = require('node-fetch')

const app = express()

app.use(bodyParser.json())

MongoClient
  .connect(process.env.MONGODB_URI, {useNewUrlParser: true})
  .catch(err => {
    console.err(err)
    process.exit(1)
  })
  .then(client => {
    const campgrounds = client.db().collection('campgrounds')
    const campsites = client.db().collection('campsites')
    const reservations = client.db().collection('reservations')
    const orders = client.db().collection('orders')
    const favorites = client.db().collection('favorites')
    const publicPath = path.join(__dirname, 'public/')

    app
      .use((err, req, res, next) => {
        console.error(err)
        res.sendState(500)
      })
      .use('/campgrounds', campgroundRouter(campgrounds))
      .use('/campsites', campsiteRouter(campsites))
      .use('/reservations', reservationRouter(reservations))
      .use('/orders', orderRouter(orders))
      .use('/favorites', favoritesRouter(favorites))
      .use(express.static(publicPath))

    app.listen(process.env.PORT, () => {
      console.log(`listening on port ${process.env.PORT}`)
    })
  })

app.get('/geocode', (req, res, next) => {
  fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${req.query.address}&key=${process.env.GEOCODING_API_KEY}`)
    .then(res => res.json())
    .then(data => res.send(data))
    .catch(err => console.error(err))
})

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

app.post('/send-mail', (req, res, next) => {
  const { to, from, subject, text, orderId, park, site, guests, vehicles, arriving, leaving, sitePhoto } = req.query

  const msg = {
    to: to,
    from: from,
    subject: subject,
    text: text,
    html: `
      <div style='border: 1px solid #F18B8F; width: 1000px; margin: 0 auto;' >
        <div style='text-align: center; background-color: #4CC593'>
          <span style='font-size: 100px; color: white;'>Campr</span>
        </div>
        <div style='margin-left: 10px'>
          <div>
            <h3>Please retain this order number for reference: ${orderId}</h3>
          </div>
          <div>
            <h4>Park: ${park}</h4>
          </div>
          <div>
            <h4>Site: ${site}</h4>
          </div>
          <div>
            <h4>Guests: ${guests}</h4>
          </div>
          <div>
            <h4>Vehicles: ${vehicles}</h4>
          </div>
          <div>
            <h4>Arriving: ${arriving}</h4>
          </div>
          <div>
            <h4>Leaving: ${leaving}</h4>
          </div>
        </div>
        <div>
          <img style='width: 1000px; height: 700px' src='${sitePhoto}' />
        </div>
      </div>
      `
  }

  sgMail.send(msg)
    .then(msg => console.log(text))
})
