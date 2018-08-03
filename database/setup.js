require('dotenv/config')
const { MongoClient } = require('mongodb')
const campgroundsDB = require('./campgroundsDB')
const campsitesDB = require('./campsitesDB')

MongoClient
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(client => {
    const db = client.db()
    const collection = db.collection('campgrounds')
    return collection
      .deleteMany()
      .then(() => collection.insertMany(campgroundsDB))
      .then(() => client.close())
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })

MongoClient
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(client => {
    const db = client.db()
    const collection = db.collection('campsites')
    return collection
      .deleteMany()
      .then(() => collection.insertMany(campsitesDB))
      .then(() => client.close())
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
