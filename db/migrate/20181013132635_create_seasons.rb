class CreateSeasons < ActiveRecord::Migration[5.2]
  def change
    create_table :seasons do |t|
      t.integer :league_id
      t.integer :current_week
      t.boolean :locked, default: false
      t.timestamps
    end
  end
end
