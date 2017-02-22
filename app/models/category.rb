# == Schema Information
#
# Table name: categories
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  thumb      :string
#  cover      :string
#

CATEGORIES = ["Movements", "Outdoors & Adventure", "Tech", "Family",
  "Health & Wellness", "Sports & Fitness", "Learning", "Photography",
  "Food & Drink", "Writing", "Language & Culture", "Music", "LGBTQ",
  "Film", "Sci-Fi & Games", "Beliefs", "Arts", "Book Clubs", "Dance",
  "Pets", "Hobbies & Crafts", "Fashion & Beauty", "Social",
  "Career & Business"]

class Category < ApplicationRecord
  validates :name, presence: true, uniqueness: true, inclusion: {in: CATEGORIES}

  has_many :categories_groups
  has_many :groups, through: :categories_groups
end
