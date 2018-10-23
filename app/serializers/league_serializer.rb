class LeagueSerializer < ActiveModel::Serializer
  attributes :id, :name, :owner_id, :current_season
  has_many :users, through: :user_leagues
  has_many :league_seasons
  has_one :current_season, class_name: "LeagueSeason"

  def league_seasons
    object.league_seasons.sort_by{|league_season| league_season.season.year}.reverse
  end

end
