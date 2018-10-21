class WeekSerializer < ActiveModel::Serializer
  attributes :id, :start_date_time, :end_date_time, :locked, :week_number
  has_many :matchups

end
