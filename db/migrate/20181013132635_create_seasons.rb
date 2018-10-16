class CreateSeasons < ActiveRecord::Migration[5.2]
  def change
    create_table :seasons do |t|
      t.integer :current_week
      t.integer :year
      t.boolean :locked, default: false
      t.timestamps
    end
  end
end
