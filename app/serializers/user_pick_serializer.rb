class UserPickSerializer < ActiveModel::Serializer
  attributes :id, :matchup_id, :week_id, :team_id, :locked, :correct
end
