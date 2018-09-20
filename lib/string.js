
const convertAllCollectionsToNamesArray = (collections) => {
  collections.shift()

  return collections.map(c => c.name)
}

const getResourceFromUrl = path => path.split('/')[1]

module.exports = {
  convertAllCollectionsToNamesArray,
  getResourceFromUrl
}
