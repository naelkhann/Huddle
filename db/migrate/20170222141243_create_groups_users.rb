class CreateGroupsUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :groups_users do |t|
      t.integer :group_id, null:false
      t.integer :user_id, null:false
    end
    add_index :groups_users, :group_id
    add_index :groups_users, :user_id
  end
end
