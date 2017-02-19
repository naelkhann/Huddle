# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Group.destroy_all
Category.destroy_all
# Users
chim4ira312 = User.create(username: "chim4ira312", password: "split312")
mega0319 = User.create(username: "mega0319", password: "password")
guest = User.create(username: "Guest", password: "password")

# Groups
vegetarians = Group.create(name: "NYC Vegetarians", description: "Come together and meet with New York City Vegetarians for restaurant trips, cooking sessions, and more!", moderator_id: guest.id)

overwatchers = Group.create(name: "Overwatchers", description: "All Overwatch players welcome! Learn strategies, make friends, and just have a good time", moderator_id: guest.id)

watchers = Group.create(name: "Movie Buffs", description: "Meet other movie buffs for viewings, discussions, and more!", moderator_id: chim4ira312.id)

fake_watchers = Group.create(name: "Movie Buffs", description: "We are fake movie buffs!", moderator_id: guest.id)

#Categories
outdoors_cat = Category.create(name: "Outdoors & Adventure")
tech_cat = Category.create(name: "Tech")
fam_cat = Category.create(name: "Family")
health_cat = Category.create(name: "Health & Wellness")
sports_cat = Category.create(name: "Sports & Fitness")
learn_cat = Category.create(name: "Learning")
photo_cat = Category.create(name: "Photography")
food_cat = Category.create(name: "Food & Drink")

#categories_groups
veg_food = CategoryGroup.create(group_id: vegetarians.id, category_id: food_cat.id)
watchers_fam = CategoryGroup.create(group_id: watchers.id, category_id: fam_cat.id)
veg_health = CategoryGroup.create(group_id: vegetarians.id, category_id: health_cat.id)
