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

require 'test_helper'

class CategoriesGroupTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
