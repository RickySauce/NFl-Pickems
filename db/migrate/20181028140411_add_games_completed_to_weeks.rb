class AddGamesCompletedToWeeks < ActiveRecord::Migration[5.2]
  def change
    add_column :weeks, :games_completed, :boolean, :default => false 
  end
end
