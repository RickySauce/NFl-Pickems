class MatchupSerializer < ActiveModel::Serializer
  attributes :id, :winning_id, :game_date_time, :locked
  belongs_to :home_team
  belongs_to :away_team

end
