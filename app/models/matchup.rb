class Matchup < ApplicationRecord
  belongs_to :week
  has_many :user_picks
end
