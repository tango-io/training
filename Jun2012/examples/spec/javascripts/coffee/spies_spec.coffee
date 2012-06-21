class Twitter
  constructor: (options) ->
    @username = options.username
    @pass = options.pass

  tweets: () ->
    connection = @connection()
    connection.tweets


class TwitterAccount
  constructor: (options) ->

  tweets: () ->
    tweets = (new Twitter(username: 'daniel', pass: 'not-your-business')).tweets()
    formated_tweets = []
    for tweet in tweets
      formated_tweets.push(
        {
          body: tweet.message,
          photo: tweet.photo_url
        }
      )
    formated_tweets

describe 'TwitterAccount', ->
  it 'should get all tweets', ->
    sample_tweets = [{
      message: 'What I need',
      photo_url: 'http://my-url.com/photo.jpg'
    }]
    spyOn(Twitter.prototype, 'tweets').andReturn(sample_tweets)

    @account = new TwitterAccount
    expect(@account.tweets()).toEqual([{
      body: 'What I need',
      photo: 'http://my-url.com/photo.jpg'
    }])
