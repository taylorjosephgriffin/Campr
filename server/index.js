require('dotenv/config')
const { MongoClient } = require('mongodb')
const express = require('express')
const bodyParser = require('body-parser')
const campgroundRouter = require('./routes/campground-router.js')

const app = express()

app.use(bodyParser.json())

MongoClient
  .connect(process.env.MONGODB_URI, {useNewUrlParser: true})
  .catch(err => {
    console.err(err)
    process.exit(1)
  })
  .then(client => {
    const collection1 = client.db().collection('campgrounds')
    const collection2 = client.db().collection('campsites')

    app
      .use((err, req, res, next) => {
        console.error(err)
        res.sendState(500)
      })
      .use('/campgrounds', campgroundRouter(collection1))

    app.listen(process.env.PORT, () => {
      console.log(`listening on port ${process.env.PORT}`)
    })
  })
