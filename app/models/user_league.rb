class UserLeague < ApplicationRecord
  belongs_to :league
  belongs_to :user

  def self.find_user_league(league_id,user_id)
    self.where("league_id = ? AND user_id = ?", league_id, user_id).first
  end

end
