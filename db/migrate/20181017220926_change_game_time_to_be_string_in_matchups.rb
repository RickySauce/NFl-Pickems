class ChangeGameTimeToBeStringInMatchups < ActiveRecord::Migration[5.2]
  def change
    change_column :matchups, :game_time, :string
  end
end
