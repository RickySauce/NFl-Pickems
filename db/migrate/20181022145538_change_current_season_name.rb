class ChangeCurrentSeasonName < ActiveRecord::Migration[5.2]
  def change
    rename_column :leagues, :current_season, :current_season_id
  end
end
