class ChangeLeagueSeasonName < ActiveRecord::Migration[5.2]
  def change
    rename_column :user_picks, :league_season, :league_season_id
  end
end
