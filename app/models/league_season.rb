class LeagueSeason < ApplicationRecord
  belongs_to :league
  belongs_to :season
  has_many :user_picks
end
