const { default: axios } = require('axios')
const express = require('express')
const app = express()
const port = 3000

app.get('/tweets', (req, res) => {
  console.log(req.query)
  const query = req.query.q
  const max_results = req.query.count

  const url = 'https://api.twitter.com/2/tweets/search/recent'
  axios
    .get(url, {
      params: {
        query: query,
        max_results: max_results,
      },
      headers: {
        Authorization:
          'Bearer AAAAAAAAAAAAAAAAAAAAAFHoZgEAAAAAPMQwWuJE8cC%2Fb898lgmo9vg3SOk%3DtxRejBUmfrlEfeYRAsbPhyMYgsxzo9vsoykNOMFA7jMEgv3Kbk',
      },
    })
    .then((response) => {
      res.status(200).send(response.data)
    })
    .catch((error) => {
      res.status(400).send(error)
    })
})

app.listen(port, () => console.log('Twitter API listening on port 3000'))
