const URL = 'http://localhost:3000/tweets'

/** On Enter for the Search Input */
const onEnter = (e) => {
  //keyCode = 13 --> key = 'Enter'
  if (e.keyCode === 13) getTwitterData()
}

/** Retrieve Twitter Data from API */
const getTwitterData = () => {
  const query = document.getElementById('user-search-input').value
  if (!query) return
  const encodedQuery = encodeURIComponent(query)
  const fullURL = `${URL}?q=${encodedQuery}&count=10`
  fetch(fullURL)
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
