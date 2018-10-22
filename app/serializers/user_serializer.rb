class UserSerializer < ActiveModel::Serializer
  attributes :id
  has_many :leagues, through: :user_leagues

end
