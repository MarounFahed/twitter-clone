# Profit with JavaScript - Module 10: Twitter Clone

In this Module I worked on a Twitter Clone with JavaScript and NodeJS. What I learned:
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
- Pages
-       Home Page
100. First list item
     - First nested list item
3. Home Page
	a. Allow a user to type in an search for tweets based on what they type
	b. Show the list of tweets based on search
		i. Show text
		ii. Show images if available
		iii. Show video if available
		iv. Show gif if available
		v. Show how long ago this tweet was created
		vi. Show the user who created the tweet full name
		vii. Show the profile of the user who created the tweet
		viii. Show the twitter handle of the user who created the tweet
	c. Show 10 tweets only at the start
	d. Allow a user to get the next 10 tweets or the next page of the tweets
	e. Show trending hashtags in a list
	f. Allow a user to click on the trending hashtag and search for it
	g. Show the profile photo of the person using the app

## Techincal Requirements
- Create a Developer Account for Twitter
- Make sure to only show the next page link when there are results for next page
	- Use the attribute "mext_results"
- Use moment.js for showing the date of the tweet from the current date
- Use the documentation for getting Search Tweets
- API Endpoints: 
