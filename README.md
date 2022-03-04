# Twitter Clone

In this repo I worked on a Twitter Clone with JavaScript and NodeJS. What I learned:

- Build a Twitter Clone
- Advance CSS with FlexBox
- Work with External APIs (Twitter API)
- Use mockup files as on a job
- Requirements Documents/Wireframes
- Build a REST API with NodeJS

# Twitter Clone Software Requirements Document

## Goals

- Create a twitter clone to let users search for tweets and view them

## User Stories

1. As a user, I want to be able to input my search so that I can search for tweets.
2. As a user, I want to be able to see the tweets I searched for so that I can view them.
3. As a user, I want to be able to view the text, photo, gifs, or video of the tweet so that I can view all of the contents of the tweet.
4. As a user, I want to see the trending hashtags currently on twitter so that I can later use them to search for tweets.
5. As a user, I want to click on the tredning hashtag so that I can see the tweets for that hashtag.
6. As a user, I want to click next page so that I can see the next page of the tweets.

## Flow Diagram

![Flow Diagram Image](https://raw.githubusercontent.com/MarounFahed/twitter-clone-pwj-module-10/main/Flow-Diagram.png)

## Business Requirements

1. Pages
   - Home Page
2. Home Page
   - Allow a user to type in an search for tweets based on what they type
   - Show the list of tweets based on search
     - Show text
     - Show images if available
     - Show video if available
     - Show gif if available
     - Show how long ago this tweet was created
     - Show the user who created the tweet full name
     - Show the profile of the user who created the tweet
     - Show the twitter handle of the user who created the tweet
   - Show 10 tweets only at the start
   - Allow a user to get the next 10 tweets or the next page of the tweets
   - Show trending hashtags in a list
   - Allow a user to click on the trending hashtag and search for it
   - Show the profile photo of the person using the app

## Techincal Requirements

- Create a Developer Account for Twitter
- Make sure to only show the next page link when there are results for next page
  - Use the attribute "mext_results"
- Use moment.js for showing the date of the tweet from the current date
- Use the documentation for getting Search Tweets
- API Endpoints:

## Wireframe

Drawn on **[draw.io](https://www.draw.io/)**

![Twitter Wireframe Image](https://raw.githubusercontent.com/MarounFahed/twitter-clone-pwj-module-10/main/Wireframe.drawio.png)


# General TODOS
1. Create the home page structure for index.html
2. Create HTML and Style for navigation
3. Create HTML and Style for Input Box
4. Create HTML and Style for Individual Tweet
5. Complete User Info HTML and Styling
6. Create HTML and Style for Trending Box
7. Set up NodeJS Server
8. Create API endpoint /tweeets to return a list of tweets based on query
9. Create Twitter get() helper function to move the Twitter API logic
10. Move the API Token to .env file and import it
11. Complete getTwitterData() function to retrieve data from our API
12. Get search input and use it to build a url like the one above
13. Get twitter data when a user hits enter
14. Complete buildTweets() function to show the Tweets List(only text)
15. Add abiliy to show images in the tweets
16. Add ability to show videos in the tweets
17. Add ability to show gifs in the tweets
18. Show user info in the tweets
19. Use moment.js to show the date of tweet
20. Complete selectTrend() function to allow a user to click on the trend and search for it
21. Create HTML and Style for Next Page Button
22. Showing Next Page of Tweets
    - Save Next Page URL
    - Load tweets when selecting the next page button
    - Fix logic to replace tweets when searching, but append tweets when going to next page
    - Show next page button only when there is a next page
23. Clean Up