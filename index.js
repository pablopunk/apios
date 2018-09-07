const { MongoClient } = require('mongodb')
require('dotenv').config()

// Globals
const { env } = process
let db

// Utils
const getAuthenticatedMongoUrl = (url, { user, pass }) => {
  const protocol = 'mongodb://'
  const urlWithoutProtocol = url.replace(protocol, '')

  return `${protocol}${user}:${pass}@${urlWithoutProtocol}`
}

const getResourceFromUrl = path => path.split('/')[1]
const getResourceFromDb = async (resource, db) => {
  const collection = await db.collection(resource)
  const results = await collection.find({}).toArray()

  return results || []
}
const getAllCollectionsFromDb = async (db) => db.listCollections().toArray()

module.exports = async (req, res) => {
  if (!db) {
    const url = getAuthenticatedMongoUrl(env.DB_URL, { user: env.DB_USER, pass: env.DB_PASS })
    console.log(url)
    const client = await MongoClient.connect(url)
    db = client.db(env.DB_NAME)
  }

  const { url } = req
  const resource = getResourceFromUrl(url)
  let results

  if (!resource) {
    results = await getAllCollectionsFromDb(db)
  } else {
    results = await getResourceFromDb(resource, db)
  }

  res.end(JSON.stringify(results))
}
