class LeagueSeasonsController < ApplicationController

  def show
    @league_season = LeagueSeason.find_by(id: params["id"])
    if @league_season
      render :json => @league_season, include: [
        'season.current_week.matchups', 'season.current_week.matchups.home_team', 'season.current_week.matchups.away_team',
        'season.weeks', 'season.weeks.matchups', 'season.weeks.matchups.home_team', 'season.weeks.matchups.away_team',
        'season', 'season.current_week.matchups.locked', 'season.weeks.matchups.locked'
        ], status: 200
    else
      render status: 404
    end
  end

end
