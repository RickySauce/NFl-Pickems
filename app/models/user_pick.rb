class UserPick < ApplicationRecord
  belongs_to :user
  belongs_to :matchup
  belongs_to :week
  belongs_to :team
  belongs_to :league_season

  def self.find_user_weekly_picks(user_id, week_id, league_season_id)
    self.where("user_id = ? AND week_id = ? AND league_season_id = ?", user_id, week_id, league_season_id)
  end

end
