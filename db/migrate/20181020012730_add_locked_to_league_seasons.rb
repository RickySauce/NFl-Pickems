class AddLockedToLeagueSeasons < ActiveRecord::Migration[5.2]
  def change
    add_column :league_seasons, :locked, :boolean, :default => false
  end
end
