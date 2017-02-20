class DropHuddles < ActiveRecord::Migration[5.0]
  def change
    drop_table :huddles
  end
end
