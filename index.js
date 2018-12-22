const express = require('express')
const fs = require('fs')

const config = {
  port: 3000
}

module.exports = express()
  .use(express.static('static'))
  .get('/', index)
  .get('/:id', sendPage)
  .use(notFound)
  .listen(config.port, () => console.log(`[Server] listening on port ${config.port}...`))

function index (req, res) {
  res.sendFile(`${__dirname}/templates/index.html`)
}

function sendPage (req, res) {
  let id = req.params.id
  if (fs.existsSync(`${__dirname}/templates/${id}`)) {
    res.sendFile(`${__dirname}/templates/${id}`)
  } else {
    res.status(404).sendFile(`${__dirname}/templates/error.html`)
  }
}

function notFound (req, res) {
  res.status(404).send('error 404')
}
