class LeagueSeasonSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :season

end
