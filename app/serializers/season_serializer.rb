class SeasonSerializer < ActiveModel::Serializer
  attributes :id, :year, :locked
  has_many :weeks
end
