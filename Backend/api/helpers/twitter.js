const axios = require('axios')

const URLv2 = 'https://api.twitter.com/2/tweets/search/recent'
const URLv1 = 'https://api.twitter.com/1.1/search/tweets.json'

/** IF URLv2 is being used --> switch the params to "query" and "max_results"
 * IF URLv1 is being used --> switch the params to "q" and "count" */

class Twitter {
  get(query, max_results) {
    return axios.get(URLv1, {
      params: {
        q: query,
        count: max_results,
      },
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_API_TOKEN}`,
      },
    })
  }
}

module.exports = Twitter
