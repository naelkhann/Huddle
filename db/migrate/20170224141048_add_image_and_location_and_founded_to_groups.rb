class AddImageAndLocationAndFoundedToGroups < ActiveRecord::Migration[5.0]
  def change
    add_column :groups, :image, :string, :default => "group.png"
    add_column :groups, :location, :string, {:default => "New York, NY", :null => false}
    add_column :groups, :founded_on, :datetime, {:default => DateTime.now, :null => false}
  end
end
