class Group < ApplicationRecord
  validates :name, :description, presence: true
  valdiates :name, uniquenes: true

  # has_many :user_groups
  # has_many :group_categories
end
