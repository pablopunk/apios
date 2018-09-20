const { MongoClient } = require('mongodb')
let db

const getDatabaseNameFromUrl = (url) => {
  const parts = url.split('/')

  return parts[parts.length - 1]
}

const getAuthenticatedMongoUrl = (url, { user, pass }) => {
  const protocol = 'mongodb://'
  const urlWithoutProtocol = url.replace(protocol, '')

  return `${protocol}${user}:${pass}@${urlWithoutProtocol}`
}

const getAllCollectionsFromDb = async (db) => db.listCollections().toArray()

const getClient = async (_url, creds) => {
  if (db) {
    return db
  }

  const url = getAuthenticatedMongoUrl(_url, creds)
  const client = await MongoClient.connect(url)

  const dbName = getDatabaseNameFromUrl(_url)
  db = client.db(dbName)

  return db
}

const getResourceFromDb = async (resource, db) => {
  const collection = await db.collection(resource)
  const results = await collection.find({}).toArray()

  return results || []
}

module.exports = {
  getClient,
  getResourceFromDb,
  getAllCollectionsFromDb
}
