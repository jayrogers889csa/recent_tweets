get '/' do

  erb :index
end

get '/tweet' do
  erb :tweet
end



#POST ==================================

post '/tweet' do
  # content_type :json
  input = params[:tweet]
  # binding.pry

  if $client.update(input)
    erb :success, :layout => false
  else
    erb :failed, :layout => false
  end
end


post '/:username' do

  username = "@" + params[:username].gsub(/^@/, '')

  @user = TwitterUser.find_or_create_by(username: username)

  @filtered_user = @user.tweets_stale?

  if @filtered_user && request.xhr?
    erb :display_tweets, :layout => false
  else
    erb :no_user, :layout => false
  end
end




