class League < ApplicationRecord
  has_many :user_leagues
  has_many :leagues, through: :user_leagues
end
