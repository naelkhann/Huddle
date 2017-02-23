# == Schema Information
#
# Table name: groups
#
#  id           :integer          not null, primary key
#  name         :string           not null
#  description  :text             not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  moderator_id :integer
#

class Group < ApplicationRecord
  validates :name, :description, presence: true
  validates :name, uniqueness: true

  has_many :categories_groups, inverse_of: :group
  has_many :categories, through: :categories_groups

  has_many :groups_users
  has_many :members,
    through: :groups_users,
    source: :user

  has_many :huddles, -> { distinct }, dependent: :destroy

  belongs_to :moderator,
    class_name: "User",
    foreign_key: :moderator_id,
    primary_key: :id
end
