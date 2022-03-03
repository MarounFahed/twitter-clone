const express = require('express')
const app = express()
const Twitter = require('./api/helpers/twitter')
const twitter = new Twitter()
const port = 3000

app.get('/tweets', (req, res) => {
  const query = req.query.q
  const max_results = req.query.count

  twitter
    .get(query, max_results)
    .then((response) => {
      res.status(200).send(response.data)
    })
    .catch((error) => {
      res.status(400).send(error)
    })
})

app.listen(port, () => console.log('Twitter API listening on port 3000'))
