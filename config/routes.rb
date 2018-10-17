Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

post '/api/login', to: 'sessions#login'
post '/api/register', to: 'users#create'
get '/api/users/:id', to: 'users#show'
post '/api/leagues/new', to: 'leagues#create'
get '/api/leagues/:id', to: 'leagues#show'
post '/api/seasons/new', to: 'seasons#create'
post '/api/weeks/new', to: 'weeks#create'
post '/api/matchups/new', to: 'matchups#create'

end
