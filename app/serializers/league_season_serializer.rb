class LeagueSeasonSerializer < ActiveModel::Serializer
  attributes :id, :year
  belongs_to :season

  def year
    object.season.year
  end

end
