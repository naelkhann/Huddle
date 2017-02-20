class CreateHuddlesUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :huddles_users do |t|
      t.integer :huddle_id, null:false
      t.integer :user_id, null:false
      t.timestamps
    end
    add_index :huddles_users, :huddle_id
    add_index :huddles_users, :user_id
  end
end
