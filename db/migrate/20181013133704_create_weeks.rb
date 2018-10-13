class CreateWeeks < ActiveRecord::Migration[5.2]
  def change
    create_table :weeks do |t|
      t.date :start_date
      t.date :end_date
      t.integer :season_id
      t.boolean :locked
      t.timestamps
    end
  end
end
