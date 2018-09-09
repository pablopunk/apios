const { MongoClient } = require('mongodb')
require('dotenv').config()

// Globals
const { env } = process
let db

// DB Utils
const convertAllCollectionsToNamesArray = (collections) => {
  collections.shift()

  return collections.map(c => c.name)
}
const getDatabaseNameFromUrl = (url) => {
  const parts = url.split('/')

  return parts[parts.length - 1]
}
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

// Server utils
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Accept-Laguage, User-Agent'
}
const setResponseHeaders = (headers, res) => {
  for (const h in headers) {
    if (Object.prototype.hasOwnProperty.call(headers, h)) {
      res.setHeader(h, headers[h])
    }
  }
  return res
}

module.exports = async (req, res) => {
  if (!db) {
    const url = getAuthenticatedMongoUrl(env.DB_URL, { user: env.DB_USER, pass: env.DB_PASS })
    const client = await MongoClient.connect(url)
    const dbName = getDatabaseNameFromUrl(url)

    db = client.db(dbName)
  }

  res = setResponseHeaders(headers, res)
  const { url } = req
  const resource = getResourceFromUrl(url)
  let results

  if (!resource) {
    const collections = await getAllCollectionsFromDb(db)
    results = convertAllCollectionsToNamesArray(collections)
  } else {
    results = await getResourceFromDb(resource, db)
  }

  res.end(JSON.stringify(results))
}
