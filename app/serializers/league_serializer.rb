class LeagueSerializer < ActiveModel::Serializer
  attributes :id, :name, :owner_id
  has_many :users, through: :user_leagues
end
