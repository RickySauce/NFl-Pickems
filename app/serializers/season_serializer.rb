class SeasonSerializer < ActiveModel::Serializer
  attributes :id, :year, :locked, :current_week
  has_many :weeks

  def current_week
     object.weeks.find{|week| week.locked == false}
  end
  
end
