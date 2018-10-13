class CreateLeagues < ActiveRecord::Migration[5.2]
  def change
    create_table :leagues do |t|
      t.string :name
      t.integer :current_season
      t.integer :owner_id
      t.timestamps
    end
  end
end
