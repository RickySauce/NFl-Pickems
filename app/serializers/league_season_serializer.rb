class LeagueSeasonSerializer < ActiveModel::Serializer
  attributes :id, :season_id, :year
  belongs_to :season

  def year
    object.season.year
  end

end
