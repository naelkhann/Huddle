# == Schema Information
#
# Table name: categories_groups
#
#  id          :integer          not null, primary key
#  group_id    :integer
#  category_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class CategoriesGroup < ApplicationRecord
  validates :group_id, :category_id, presence: true

  belongs_to :group
  belongs_to :category
end
