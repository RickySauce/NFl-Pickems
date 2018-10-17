class CreateMatchups < ActiveRecord::Migration[5.2]
  def change
    create_table :matchups do |t|
      t.integer :week_id
      t.integer :home_id
      t.integer :away_id
      t.integer :winning_id
      t.datetime :game_date_time
      t.timestamps
    end
  end
end
