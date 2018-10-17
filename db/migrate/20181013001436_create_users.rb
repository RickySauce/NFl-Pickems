class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :password_digest
      t.boolean :admin, default: false
      t.string :time_zone, default: 'Eastern Time (US & Canada)'
      t.timestamps
    end
  end
end
