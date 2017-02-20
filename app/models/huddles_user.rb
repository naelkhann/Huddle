# == Schema Information
#
# Table name: huddles_users
#
#  id         :integer          not null, primary key
#  huddle_id  :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class HuddlesUser < ApplicationRecord
  validates :user, :huddle, presence: true

  belongs_to :user
  belongs_to :huddle
end
