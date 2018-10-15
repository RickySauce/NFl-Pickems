class RemoveLockedFromWeeks < ActiveRecord::Migration[5.2]
  def change
    remove_column :weeks, :locked
  end
end
