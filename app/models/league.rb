class League < ApplicationRecord
  has_many :user_leagues
  has_many :users, through: :user_leagues
  has_many :league_seasons
  has_many :seasons, through: :league_seasons
  validates :name, presence: true
  belongs_to :owner, :class_name => 'User', :foreign_key => 'owner_id'

  def current_season
    self.league_seasons.find{|league_season| league_season.id == self.current_season_id}
  end

  def current_season_id
    self.league_seasons.sort_by{|league_season| league_season.season.year}.reverse.first.id
  end

end
