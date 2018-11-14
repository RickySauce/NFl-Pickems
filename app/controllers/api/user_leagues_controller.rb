class Api::UserLeaguesController < ApplicationController

  def destroy
    @user_league = UserLeague.find_user_league(params["league_id"],params["user_id"])
    @user_league.destroy
  end

  def create
    @user_league = UserLeague.new()
  end

  def new
    user = User.find_by(username: params[:username])
    if user && !UserLeague.find_user_league(params["league_id"], user.id)
    @user_league = UserLeague.create(user_id: user.id, league_id: params[:league_id])
    render json: {user: user}, status: 201
    elsif user && UserLeague.find_user_league(params["league_id"], user.id)
    render json: {message: "User Already In League"}
    else
    render json: {message: "Cannot Find User"}
    end
  end


end
