class Api::UserPicksController < ApplicationController

  def submit
    @new_picks = []
    @updated_picks =[]
    params["user_picks"].each do |user_pick|
      @pick = UserPick.find_user_matchup(user_pick["user_id"], user_pick["matchup_id"], user_pick["league_season_id"])
      if @pick
        @pick.update(team_id: user_pick["team_id"])
        @updated_picks.push(@pick)
      else
        @new_picks.push(UserPick.create(
          team_id: user_pick["team_id"],
          matchup_id: user_pick["matchup_id"],
          week_id: user_pick["week_id"],
          league_season_id: user_pick["league_season_id"],
          user_id: user_pick["user_id"]
        ))
      end
    end
    render :json => {new_picks: @new_picks, updated_picks: @updated_picks}, status: 201
  end

  def weekly
    @user_picks = UserPick.find_user_weekly_picks(params["user_id"], params["week_id"], params["league_season_id"])
    render :json => @user_picks, status: 200
  end


end
