class SeasonSerializer < ActiveModel::Serializer
  attributes :id, :year, :locked, :current_week
  has_many :weeks
end
