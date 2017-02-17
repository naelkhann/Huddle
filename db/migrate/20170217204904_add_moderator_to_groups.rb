class AddModeratorToGroups < ActiveRecord::Migration[5.0]
  def change
    add_column :groups, :moderator_id, :integer
  end
end
