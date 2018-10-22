class LeagueSeasonSerializer < ActiveModel::Serializer
  attributes :id, :season_id
  belongs_to :season
end
