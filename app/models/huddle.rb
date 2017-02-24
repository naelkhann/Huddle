# == Schema Information
#
# Table name: huddles
#
#  id           :integer          not null, primary key
#  title        :string           not null
#  group_id     :integer          not null
#  description  :text             not null
#  date         :datetime         not null
#  location     :string           not null
#  founded_on   :date             not null
#  moderator_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Huddle < ApplicationRecord
  validates :title, :group_id, :description,
            :date, :location, :founded_on, :moderator_id, presence: true

  belongs_to :group

  has_many :huddles_users
  has_many :members,
    through: :huddles_users,
    source: :user

  belongs_to :moderator,
    class_name: "User",
    foreign_key: :moderator_id,
    primary_key: :id

end
