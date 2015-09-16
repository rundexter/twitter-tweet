# Twitter Trends 

This [Dexter](http://rundexter.com) module will update the configured
user's status in [Twitter](https://dev.twitter.com/rest/reference/post/statuses/update).

# Configuring the Step

## Input parameters

Parameter|Required|Multiple?|Details
---------|--------|---------|-------
message | No | No | The message to set as your status. 

## Private keys

Parameter|Required|Details
---------|--------|-------
twitter_consumer_key | Yes | Your application's key
twitter_consumer_secret | Yes | Your application's "password"
twitter_access_token | Yes | Your *user's* key
twitter_access_token_secret | Yes | Your *user's* "password"

# Getting Twitter credentials

To use this module, you'll have to create an app and authenticate yourself with it.  There's currently no way to have other
users sign up for your twitter app.

1. Log into https://apps.twitter.com/ and create a project
1. Choose a name - right now no one else will see it, so have fun! 
1. Go to Keys and Access tokens, and generate a token for yourself

You should now have the following:
* **Consumer key**: add to your App's private variables as twitter_consumer_key
* **Consumer secret**: add to your App's private variables as twitter_consumer_secret
* **Access token**: add to your App's private variables as twitter_access_token
* **Access token secret**: add to your App's private variables as twitter_access_token_secret

