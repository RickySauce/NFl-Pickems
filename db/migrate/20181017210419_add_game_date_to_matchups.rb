class AddGameDateToMatchups < ActiveRecord::Migration[5.2]
  def change
    add_column :matchups, :game_date, :date
  end
end
