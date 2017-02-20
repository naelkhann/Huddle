class CreateHuddlesTable < ActiveRecord::Migration[5.0]
  def change
    create_table :huddles do |t|
      t.string :title, null:false
      t.integer :group_id, null:false
      t.text :description, null:false
      t.datetime :date, null:false
      t.string :location, null:false
      t.date :founded_on, null:false
      t.integer :moderator_id, null:false
      t.timestamps
    end
    add_index :huddles, :group_id
    add_index :huddles, :moderator_id
  end
end
