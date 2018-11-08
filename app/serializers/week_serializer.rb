class WeekSerializer < ActiveModel::Serializer
  attributes :id, :start_date_time, :end_date_time, :locked, :week_number, :games_completed
  has_many :matchups

  def matchups
    object.matchups.order(:game_date_time)
  end
end
