class ChangeCurrentWeekName < ActiveRecord::Migration[5.2]
  def change
    rename_column :seasons, :current_week, :current_week_id
  end
end
