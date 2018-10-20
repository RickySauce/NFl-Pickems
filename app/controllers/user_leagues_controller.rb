class UserLeaguesController < ApplicationController

  def destroy
    @user_league = UserLeague.find_user_league(params["league_id"],params["user_id"])
  end

  def create
    @user_league = UserLeague.new()
  end

end
