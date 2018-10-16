class League < ApplicationRecord
  has_many :user_leagues
  has_many :users, through: :user_leagues
  has_many :league_seasons
  has_many :seasons, through: :league_seasons
  validates :name, presence: true
  belongs_to :owner, :class_name => 'User', :foreign_key => 'owner_id'
end
