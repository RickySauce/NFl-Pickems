class Api::MatchupsController < ApplicationController

  def update
    @week = Week.find_by(id: params["week_id"]) if params["week_id"]
    @matchups = @week.matchups.find_all {|matchup| matchup["game_time"] == params["game_time"]}
    @matchups.each {|matchup| matchup.update(locked: true)}
  end

end
