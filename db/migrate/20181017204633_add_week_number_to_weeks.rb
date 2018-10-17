class AddWeekNumberToWeeks < ActiveRecord::Migration[5.2]
  def change
    add_column :weeks, :week_number, :integer
  end
end
