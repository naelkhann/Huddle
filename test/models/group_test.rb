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
#  image        :string           default("group.png")
#  location     :string           default("New York, NY"), not null
#  founded_on   :datetime         default("2017-02-27 15:49:06.332389"), not null
#

require 'test_helper'

class GroupTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
