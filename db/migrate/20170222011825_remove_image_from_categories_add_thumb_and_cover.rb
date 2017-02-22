class RemoveImageFromCategoriesAddThumbAndCover < ActiveRecord::Migration[5.0]
  def change
    remove_column :categories, :image, :string
    add_column :categories, :thumb, :string
    add_column :categories, :cover, :string
  end
end
