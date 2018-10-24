class AddWeekIdToUserPicks < ActiveRecord::Migration[5.2]
  def change
    add_column :user_picks, :week_id, :integer
  end
end
