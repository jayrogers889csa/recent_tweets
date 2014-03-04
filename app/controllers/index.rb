get '/' do

  erb :index
end

post '/:username' do

  @user = TwitterUser.find_or_create_by(username: params[:username])

  @user = @user.tweets_stale?

  if request.xhr?
    erb :display_tweets, :layout => false
  else
    redirect '/'
  end
end
