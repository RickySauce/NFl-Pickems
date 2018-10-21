class Season < ApplicationRecord
  has_many :weeks

  def current_week
    self.weeks.find{|week| week.id == self.current_week_id}
  end

end
