class Api::LeagueSeasonsController < ApplicationController

  def show
    @league_season = LeagueSeason.find_by(id: params["id"])
    if @league_season
      render :json => @league_season, include: [
        'season', 'season.weeks', 'season.weeks.matchups'
        ], status: 200
    else
      render status: 404
    end
  end

end
