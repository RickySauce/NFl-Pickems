class AddLockedToMatchups < ActiveRecord::Migration[5.2]
  def change
    add_column :matchups, :locked, :boolean, :default => false
  end
end
