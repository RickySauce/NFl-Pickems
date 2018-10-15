class AddYearToSeasons < ActiveRecord::Migration[5.2]
  def change
    add_column :seasons, :year, :integer
  end
end
