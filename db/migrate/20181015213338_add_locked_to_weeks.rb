class AddLockedToWeeks < ActiveRecord::Migration[5.2]
  def change
    add_column :weeks, :locked, :boolean, :default => false
  end
end
