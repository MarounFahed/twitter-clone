const URL = 'http://localhost:3000/tweets'

/** Retrieve Twitter Data from API */
const getTwitterData = () => {
  const url = 'http://localhost:3000/tweets?q=coding&count=10'
  fetch(url)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log(data)
    })
}

/** Save the next page data */
const saveNextPage = (metadata) => {}

/** Handle when a user click on a trend */
const selectTrend = (e) => {}

/**Set the visibility of next page based on if there is data on next page */
const nextPageButtonVisbility = (metadata) => {}

/** Build HTML for Tweets Images */
const buildImages = (mediaList) => {}

/** Build HTML for Tweets Video */
const buildVideo = (mediaList) => {}
