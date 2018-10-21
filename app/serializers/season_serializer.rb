class SeasonSerializer < ActiveModel::Serializer
  attributes :id, :year, :locked
  has_many :weeks
  has_one :current_week, class_name: "Week"

end
