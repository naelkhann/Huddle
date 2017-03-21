class RemoveFoundedOnFromHuddles < ActiveRecord::Migration[5.0]
  def change
    remove_column :huddles, :founded_on, :date
  end
end
