class UserPicksController < ApplicationController

  def create
    @user_picks = params["user_picks"].each do |user_pick|
      UserPick.create(
        team_id: user_pick["team_id"],
        matchup_id: user_pick["matchup_id"],
        week_id: user_pick["week_id"],
        league_season_id: user_pick["league_season_id"],
        user_id: user_pick["user_id"]
      )
    end
    render json: @user_picks, status: 201
  end


end
