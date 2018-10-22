class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :leagues, through: :user_leagues
end
