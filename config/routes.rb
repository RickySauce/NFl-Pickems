Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

post '/api/login', to: 'sessions#login'
post '/api/register', to: 'users#create'
get '/api/users/:id', to: 'users#show'
post '/api/leagues/new', to: 'leagues#create'
get '/api/leagues/:id', to: 'leagues#show'
get '/api/seasons/new', to: 'seasons#create'
delete '/api/leagues/:league_id/users/remove/:user_id', to: 'user_leagues#destroy'
post '/api/leagues/users/new', to: 'user_leagues#create'
# get '/api/weeks/new', to: 'weeks#create'
# get '/api/matchups/new', to: 'matchups#create'

end
