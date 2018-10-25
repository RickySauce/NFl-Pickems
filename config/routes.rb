Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

post '/api/login', to: 'sessions#login'
post '/api/register', to: 'users#create'
get '/api/users/:id', to: 'users#show'
post '/api/users/picks/submit', to: 'user_picks#submit'
get '/api/users/picks/weekly', to: 'user_picks#weekly'
post '/api/leagues/new', to: 'leagues#create'
get '/api/leagues/:id', to: 'leagues#show'
get '/api/seasons/new', to: 'seasons#create'
delete '/api/leagues/:league_id/users/remove/:user_id', to: 'user_leagues#destroy'
post '/api/leagues/:league_id/users/add/:username', to: 'user_leagues#new'
post '/api/leagues/users/new', to: 'user_leagues#create'
get '/api/leagues/seasons/:id', to: 'league_seasons#show'
get '/api/seasons/find', to: 'seasons#show'

# get '/api/weeks/new', to: 'weeks#create'
# get '/api/matchups/new', to: 'matchups#create'

end
