class LeagueSerializer < ActiveModel::Serializer
  attributes :id, :name, :owner_id, :current_season
  has_many :users, through: :user_leagues
  has_many :league_seasons

  def current_season
     object.league_seasons.find{|league_seasons| league_seasons.locked == false}
  end

end
