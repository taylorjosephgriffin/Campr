require('dotenv/config')
const { MongoClient } = require('mongodb')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

MongoClient
  .connect(process.env.MONGODB_URI, {useNewUrlParser: true})
  .catch(err => {
    console.err(err)
    process.exit(1)
  })
  .then(client => {
    const collection = client.db().collection('campgrounds')

    app.use((err, req, res, next) => {
      console.error(err)
      res.sendState(500)
    })

    app.listen(process.env.PORT, () => {
      console.log(`listening on port ${process.env.PORT}`)
    })
  })
