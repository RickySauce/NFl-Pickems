Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

namespace :api do
  post '/login', to: 'sessions#login'
  post '/register', to: 'users#create'

  scope '/users' do
    get '/:id', to: 'users#show'
    get '/picks/weekly', to: 'user_picks#weekly'
    post '/picks/submit', to: 'user_picks#submit'
  end

  scope 'leagues' do
    get '/seasons/:id', to: 'league_seasons#show'
    get '/:id', to: 'leagues#show'
    post '/new', to: 'leagues#create'
    post '/:league_id/users/add/:username', to: 'user_leagues#new'
    post '/users/new', to: 'user_leagues#create'
    delete '/:league_id/users/remove/:user_id', to: 'user_leagues#destroy'
  end

  scope 'seasons' do
    get '/new', to: 'seasons#create'
    # get '/find', to: 'seasons#show'
  end

end


# get '/api/weeks/new', to: 'weeks#create'
# get '/api/matchups/new', to: 'matchups#create'

end
