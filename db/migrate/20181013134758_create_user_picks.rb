class CreateUserPicks < ActiveRecord::Migration[5.2]
  def change
    create_table :user_picks do |t|
      t.integer :user_id
      t.integer :team_id
      t.integer :matchup_id
      t.integer :league_season
      t.boolean :correct
      t.boolean :locked, default: false
      t.timestamps
    end
  end
end
