const { getClient, getAllCollectionsFromDb, getResourceFromDb } = require('./lib/mongo')
const { getResourceFromUrl, convertAllCollectionsToNamesArray } = require('./lib/string')
const { setResponseHeaders } = require('./lib/server')

require('dotenv').config()

const { env } = process
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Accept-Laguage, User-Agent'
}

module.exports = async (req, res) => {
  const db = await getClient(env.DB_URL,
    { user: env.DB_USER, pass: env.DB_PASS })

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
