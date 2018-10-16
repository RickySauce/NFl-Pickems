class CreateLeagueSeasons < ActiveRecord::Migration[5.2]
  def change
    create_table :league_seasons do |t|
      t.integer :league_id
      t.integer :season_id
      t.timestamps
    end
  end
end
