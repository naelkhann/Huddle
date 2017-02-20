class CreateCategoriesGroups < ActiveRecord::Migration[5.0]
  def change
    create_table :categories_groups do |t|
      t.integer :group_id
      t.integer :category_id

      t.timestamps
    end
    add_index :categories_groups, :group_id
    add_index :categories_groups, :category_id
  end
end
