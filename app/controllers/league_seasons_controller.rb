class LeagueSeasonsController < ApplicationController

  def show
    @league_season = LeagueSeason.find_by(id: params["id"])
    render :json => @league_season, include: [
      'season.current_week.matchups', 'season.current_week.matchups.home_team', 'season.current_week.matchups.away_team',
      'season.weeks', 'season.weeks.matchups', 'season.weeks.matchups.home_team', 'season.weeks.matchups.away_team',
      'season'
      ], status: 200
  end

end
