# == Schema Information
#
# Table name: groups_users
#
#  id       :integer          not null, primary key
#  group_id :integer          not null
#  user_id  :integer          not null
#

class GroupsUser < ApplicationRecord
  validates :group, :user, presence: true

  belongs_to :group
  belongs_to :user
end
