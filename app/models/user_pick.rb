class UserPick < ApplicationRecord
  belongs_to :user
  belongs_to :matchup
  belongs_to :week
  belongs_to :team
  belongs_to :league_season
end
