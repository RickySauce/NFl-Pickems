class UserPicksController < ApplicationController

  def create
    params["user_picks"].each do |user_pick|
      binding.pry
      @user_pick = UserPick.new(user_picks_params)
      pry
    end
    render status: 200
  end


  private

  def user_picks_params
     params.require("user_pick").permit(
       :user_id,
       :team_id,
       :matchup_id,
       :league_season_id,
       :week_id
     )
   end

end
