class Api::MatchupsController < ApplicationController

  def update
    @week = Week.find_by(id: params["week_id"]) if params["week_id"]
    @matchups = @week.matchups.find_all {|matchup| matchup["game_date_time"] == params["game_date_time"]}
    @matchups.each {|matchup| matchup.update(locked: true)}
    render status: 202
  end

end
