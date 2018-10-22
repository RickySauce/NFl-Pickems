class LeagueSeason < ApplicationRecord
  belongs_to :league
  belongs_to :season
  has_many :user_picks

  def self.find_league_season(league_id,season_id)
    self.where("league_id = ? AND season_id = ?", league_id, season_id).first
  end

end
