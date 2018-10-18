class CreateWeeks < ActiveRecord::Migration[5.2]
  def change
    create_table :weeks do |t|
      t.datetime :start_date_time
      t.datetime :end_date_time
      t.integer :season_id
      t.boolean :locked, :default => false
      t.integer :week_number
      t.timestamps
    end
  end
end
