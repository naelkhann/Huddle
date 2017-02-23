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
  validates :group, :category, presence: true

  belongs_to :group, inverse_of: :categories_groups
  belongs_to :category
end
