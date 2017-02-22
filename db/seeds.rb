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
CategoriesGroup.destroy_all
Huddle.destroy_all
HuddlesUser.destroy_all

# Users
chim4ira312 = User.create(username: "chim4ira312", password: "split312", name: "Nael Khan")
mega0319 = User.create(username: "mega0319", password: "password", name: "Naz Khan")
guest = User.create(username: "Guest", password: "password", name: "Guest User")

# Groups
vegetarians = Group.create(name: "NYC Vegetarians", description: "Come together and meet with New York City Vegetarians for restaurant trips, cooking sessions, and more!", moderator_id: guest.id)

overwatchers = Group.create(name: "Overwatchers", description: "All Overwatch players welcome! Learn strategies, make friends, and just have a good time", moderator_id: guest.id)

watchers = Group.create(name: "Movie Buffs", description: "Meet other movie buffs for viewings, discussions, and more!", moderator_id: chim4ira312.id)

smashbros = Group.create(name: "Huddle Up Smash Bros!", description: "All things Super Smash Bros. related! Join tournaments and socialize with other players. Monthly tournaments happening! We embrace players of all skill levels", moderator_id: guest.id)

gourmet = Group.create(name: "The Gourmet Gathering", description: "Are you a foodie? Join our group and meet others who love trying new restaurants and recipes, and love all things food!", moderator_id: chim4ira312.id)

android = Group.create(name: "Androids", description: "A group for everything Android, the mobile operating system by Google", moderator_id: mega0319.id)

rockclimb = Group.create(name: "Rock Climbers Anonymous", description: "Interested in rock climbing? Join this group to see huddles based on rock climbing events, competitions, lessons, and more. Anyone welcome, of all ages and all skill levels", moderator_id: chim4ira312.id)

#Categories
outdoors_cat = Category.create(
  name: "Outdoors & Adventure",
  thumb: "https://s3.amazonaws.com/huddle-application-dev/static_images/outdoors.jpeg",
  cover: "https://s3.amazonaws.com/huddle-application-dev/static_images/outdoors_cover.jpg"
  )
tech_cat = Category.create(
  name: "Tech",
  thumb: "https://s3.amazonaws.com/huddle-application-dev/static_images/tech.jpeg",
  cover: "https://s3.amazonaws.com/huddle-application-dev/static_images/tech_cover.jpeg"
  )
fam_cat = Category.create(
  name: "Family",
  thumb: "https://s3.amazonaws.com/huddle-application-dev/static_images/family.jpeg",
  cover: "https://s3.amazonaws.com/huddle-application-dev/static_images/family_cover.jpg"
  )
health_cat = Category.create(
  name: "Health & Wellness",
  thumb: "https://s3.amazonaws.com/huddle-application-dev/static_images/health.jpeg",
  cover: "https://s3.amazonaws.com/huddle-application-dev/static_images/health_cover.jpeg"
  )
sports_cat = Category.create(
  name: "Sports & Fitness",
  thumb: "https://s3.amazonaws.com/huddle-application-dev/static_images/sports.jpeg",
  cover: "https://s3.amazonaws.com/huddle-application-dev/static_images/sports_cover.jpeg"
  )
learn_cat = Category.create(
  name: "Learning",
  thumb: "https://s3.amazonaws.com/huddle-application-dev/static_images/learning.jpeg",
  cover: "https://s3.amazonaws.com/huddle-application-dev/static_images/learning_cover.jpg"
  )
photo_cat = Category.create(
  name: "Photography",
  thumb: "https://s3.amazonaws.com/huddle-application-dev/static_images/photo.jpeg",
  cover: "https://s3.amazonaws.com/huddle-application-dev/static_images/photo_cover.jpeg"
  )
food_cat = Category.create(
  name: "Food & Drink",
  thumb: "https://s3.amazonaws.com/huddle-application-dev/static_images/food.jpeg",
  cover: "https://s3.amazonaws.com/huddle-application-dev/static_images/food_cover.jpg"
  )

#categories_groups
veg_food = CategoriesGroup.create(group_id: vegetarians.id, category_id: food_cat.id)
watchers_fam = CategoriesGroup.create(group_id: watchers.id, category_id: fam_cat.id)
veg_health = CategoriesGroup.create(group_id: vegetarians.id, category_id: health_cat.id)
android_tech = CategoriesGroup.create(group_id: android.id, category_id: tech_cat.id)
gourmet_food = CategoriesGroup.create(group_id: gourmet.id, category_id: food_cat.id)
smashbros_tech = CategoriesGroup.create(group_id: smashbros.id, category_id: tech_cat.id)
smashbros_fam = CategoriesGroup.create(group_id: smashbros.id, category_id: fam_cat.id)
rockclimb_fam = CategoriesGroup.create(group_id: rockclimb.id, category_id: fam_cat.id)
rockclimb_health = CategoriesGroup.create(group_id: rockclimb.id, category_id: health_cat.id)
rockclimb_outdoors = CategoriesGroup.create(group_id: rockclimb.id, category_id: outdoors_cat.id)

#huddles
smash1 = Huddle.create(title: "Pro Smash Players", group_id: smashbros.id, description: "Calling all Pro level Smash Players. Let's meet up and have a few local multiplayer brawls in NY. Location to be announced. Bring your own gear if you want. Wii U consoles will be provided.", date: DateTime.parse('4 March 2017 20:30:00'), location: "54 W 21st St, New York, NY 10010", founded_on: Date.new(2017, 02, 20), moderator_id: guest.id)
smash2 = Huddle.create(
  title: "Smash Classes",
  group_id: smashbros.id,
  description: "Hey Super Smash Bros player, are you interested in getting better at your favorite game? We hold classes every month to go over player strategies, focus on moves and tactics on a professional level, and help you master your facvorite character! Join now - we have free pizza and drinks at every huddle meeting",
  date: DateTime.parse('15 Mar 2017 17:30:00'),
  location: "10 Rockefeller Plaza, New York, NY 10020",
  founded_on: Date.new(2017, 2, 12),
  moderator_id: mega0319.id
)

#huddles_users
smash_guest = HuddlesUser.create(huddle_id: smash1.id, user_id: guest.id)
smash_guest2 = HuddlesUser.create(huddle_id: smash1.id, user_id: chim4ira312.id)
smash_guest3 = HuddlesUser.create(huddle_id: smash1.id, user_id: mega0319.id)
