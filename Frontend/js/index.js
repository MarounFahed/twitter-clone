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
      buildTweets(data.data)
    })
}

/** Save the next page data */
const saveNextPage = (metadata) => {}

/** Handle when a user click on a trend */
const selectTrend = (e) => {}

/**Set the visibility of next page based on if there is data on next page */
const nextPageButtonVisbility = (metadata) => {}

/**Build Tweets HTML based on Data from API */
const buildTweets = (tweets, nextPage) => {
  let twitterContent = ''
  tweets.map((tweet) => {
    console.log(tweet)
    twitterContent += `
        <!--INDIVIDUAL TWEET START-->
        <div class="tweet-container">
            <!--USER INFO START-->
            <div class="tweet-user-info">
                <div class="tweet-user-profile"></div>
                <div class="tweet-user-name-container">
                    <div class="tweet-user-fullname">Maroun Fahed</div>
                    <div class="tweet-user-username">@mfahed</div>
                </div>
            </div>
            <!--USER INFO END-->

            <!--TWEET IMAGES START-->
            <div class="tweet-images-container"></div>
            <!--TWEET IMAGES END-->

            <!--TWEET TEXT START-->
            <div class="tweet-text-container">
                ${tweet.text}
            </div>
            <!--TWEET TEXT END-->

            <div class="tweet-date-container">
                20 hours ago
            </div>
        </div>
        <!--INDIVIDUAL TWEET END-->

        `
  })
  document.querySelector('.tweets-list').innerHTML = twitterContent
}

/** Build HTML for Tweets Images */
const buildImages = (mediaList) => {}

/** Build HTML for Tweets Video */
const buildVideo = (mediaList) => {}
