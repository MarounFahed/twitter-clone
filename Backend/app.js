const express = require('express')
const app = express()
const Twitter = require('./api/helpers/twitter')
const twitter = new Twitter()
const port = 3000
require('dotenv').config()

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  next()
})

app.get('/tweets', (req, res) => {
  const query = req.query.q
  const max_results = req.query.count
  const maxId = req.query.max_id

  twitter
    .get(query, max_results, maxId)
    .then((response) => {
      res.status(200).send(response.data)
    })
    .catch((error) => {
      res.status(400).send(error)
    })
})

app.listen(port, () => console.log('Twitter API listening on port 3000'))
