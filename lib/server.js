const setResponseHeaders = (headers, res) => {
  for (const h in headers) {
    if (Object.prototype.hasOwnProperty.call(headers, h)) {
      res.setHeader(h, headers[h])
    }
  }
  return res
}

module.exports = {
  setResponseHeaders
}
