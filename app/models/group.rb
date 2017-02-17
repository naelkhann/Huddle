# == Schema Information
#
# Table name: groups
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Group < ApplicationRecord
  validates :name, :description, presence: true
  validates :name, uniqueness: true

  # has_many :user_groups
  # has_many :group_categories
end
