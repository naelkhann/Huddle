class CategoriesGroup < ApplicationRecord
  validates: :group_id, :category_id, presence: true

  belongs_to :group
  belongs_to :category
end
