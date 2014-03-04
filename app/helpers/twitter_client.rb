def fetch_tweets(username)
  user = TwitterUser.find_by_username(username)
  $client.user_timeline(username, count: 10).each do |tweet|
    user.tweets << Tweet.create(content: tweet.text)
  end
  user
end
