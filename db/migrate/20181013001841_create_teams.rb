class CreateTeams < ActiveRecord::Migration[5.2]
  def change
    create_table :teams do |t|
      t.string :name
      t.string :city 
      t.string :abrv
      t.timestamps
    end
  end
end
