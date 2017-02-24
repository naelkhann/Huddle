# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Group.destroy_all
GroupsUser.destroy_all
Category.destroy_all
CategoriesGroup.destroy_all
Huddle.destroy_all
HuddlesUser.destroy_all
# Users
chim4ira312 = User.create(username: "chim4ira312", password: "split312", name: "Nael Khan", email: "chim4ira312@gmail.com")
mega0319 = User.create(username: "mega0319", password: "password", name: "Nazmus Khan", email: "nazkhan@yahoo.com")
guest = User.create(username: "Guest", password: "password", name: "Guest User", email: "guest@huddle-app.io")
jamesbond = User.create(username: "jamesbond", password: "jamesbond", name: "James Bond", email: "james@007.com")
meag = User.create(username: "meag", password: "besttaever", name: "Meagan the Best TA", email: "meag@appacademy.io")

# Groups
vegetarians = Group.create(
  name: "NYC Vegetarians",
  description: "Come together and meet with New York City Vegetarians for restaurant trips, cooking sessions, and more!",
  location: "New York, NY",
  founded_on: DateTime.parse('03 Feb 2017'),
  moderator_id: guest.id)

overwatchers = Group.create(
  name: "Overwatchers",
  description: "All Overwatch players welcome! Learn strategies, make friends, and just have a good time",
  location: "Flushing, NY",
  founded_on: DateTime.parse('03 Feb 2017'),
  moderator_id: mega0319.id)

picnic = Group.create(
  name: "Picnic Baskets",
  description: "A family oriented group hosting picnic huddles every month where families can bring their own dishes and enjoy an outdoor and indoor (winter time) setting. This is a great group for families interested in just socializing, and getting together to have some fun family game days and plenty of food! Bring all your children if you like. We are currently taking board game donations to add to our list of games for each huddle.",
  location: "New York, NY",
  founded_on: DateTime.parse('21 Nov 2016'),
  moderator_id: mega0319.id)

calc_tutors = Group.create(
  name: "1-800-Calculus",
  description: "If you've ever taken a Calculus course, chances are you needed some help or tutoring. Instead of asking a classmate, friend, or your teacher (none of whom might be available), join our group for study sessions and huddles to meet tutors and other people who love and/or learn Calculus. This way you can surround yourself with a network of people who are all in the same boat as you. Once in a while, we host lectures from famous people to talk about Math too. Doesn't that sound super interesting",
  location: "New York, NY",
  founded_on: DateTime.parse('1 Dec 2016'),
  moderator_id: guest.id)

watchers = Group.create(
  name: "Movie Buffs",
  description: "Meet other movie buffs for viewings, discussions, and more!",
  location: "New York, NY",
  founded_on: DateTime.parse('03 Feb 2017'),
  moderator_id: chim4ira312.id)

smashbros = Group.create(
  name: "Huddle Up Smash Bros!",
  description: "All things Super Smash Bros. related! Join tournaments and socialize with other players. Monthly tournaments happening! We embrace players of all skill levels",
  location: "New York, NY",
  founded_on: DateTime.parse('03 Feb 2017'),
  moderator_id: guest.id)

gourmet = Group.create(
  name: "The Gourmet Gathering",
  description: "Are you a foodie? Join our group and meet others who love trying new restaurants and recipes, and love all things food!",
  location: "Murray Hill, NY",
  founded_on: DateTime.parse('03 Feb 2017'),
  moderator_id: chim4ira312.id)

android = Group.create(
  name: "Androids",
  description: "A group for everything Android, the mobile operating system by Google",
  location: "Williamsburg, NY",
  founded_on: DateTime.parse('03 Feb 2017'),
  moderator_id: mega0319.id)

rockclimb = Group.create(
  name: "Rock Climbers Anonymous",
  description: "Interested in rock climbing? Join this group to see huddles based on rock climbing events, competitions, lessons, and more. Anyone welcome, of all ages and all skill levels",
  location: "Westchester, NY",
  founded_on: DateTime.parse('03 Feb 2017'),
  moderator_id: chim4ira312.id)

cityscaper = Group.create(
  name: "Cityscapers",
  description: "In New York City, we don't have rocks to climb. That's why we've made our own fitness challenge to test our personal limits and have some fun. We are all photographers here. But we don't just take awesome panoramas of the skies of New York. We get to a high vantage point. And jump right off. Have you ever tried base jumping? Well now's your chance. Buckle up soldier you're in for a long ride. Learn to base jump, meet others who love the thrill and have made it their life's hobby, and join us in huddles where we climb to the top of Manhattan's awesome skyscrapers, and jump right off. Safely, of course! Bring your own camera and meet photographers who are daredevils.",
  location: "New York, NY",
  founded_on: DateTime.parse('4 Jan 2017'),
  moderator_id: chim4ira312.id)

bayern = Group.create(
  name: "Bayern Fans",
  description: "Are you a fan of FC Bayern? We're not in Germany, but New York City sure has a lot of football fans. Join this group to keep track of games and attend huddles where we socialize with other fans, view games, and much, much, more. We love FC Bayern, do you?!",
  location: "New York, NY",
  founded_on: DateTime.parse('10 Jan 2017'),
  moderator_id: meag.id)

#GroupsUsers
picnic_guest1 = GroupsUser.create(group_id: picnic.id, user_id: chim4ira312.id)
picnic_guest2 = GroupsUser.create(group_id: picnic.id, user_id: mega0319.id)
picnic_guest3 = GroupsUser.create(group_id: picnic.id, user_id: guest.id)
calc_tutors_guest1 = GroupsUser.create(group_id: calc_tutors.id, user_id: guest.id)
calc_tutors_guest2 = GroupsUser.create(group_id: calc_tutors.id, user_id: mega0319.id)
cityscaper_guest1 = GroupsUser.create(group_id: cityscaper.id, user_id: mega0319.id)
cityscaper_guest2 = GroupsUser.create(group_id: cityscaper.id, user_id: jamesbond.id)
cityscraper_guest3 = GroupsUser.create(group_id: cityscaper.id, user_id: meag.id)
cityscraper_guest4 = GroupsUser.create(group_id: cityscaper.id, user_id: chim4ira312.id)
watchers_guest1 = GroupsUser.create(group_id: watchers.id, user_id: chim4ira312.id)
watchers_guest2 = GroupsUser.create(group_id: watchers.id, user_id: meag.id)
watchers_guest3 = GroupsUser.create(group_id: watchers.id, user_id: jamesbond.id)
watcher_guest4 = GroupsUser.create(group_id: watchers.id, user_id: guest.id)
bayern_guest1 = GroupsUser.create(group_id: bayern.id, user_id: meag.id)
bayern_guest2 = GroupsUser.create(group_id: bayern.id, user_id: guest.id)

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
watchers_photography = CategoriesGroup.create(group_id: watchers.id, category_id: photo_cat.id)
veg_health = CategoriesGroup.create(group_id: vegetarians.id, category_id: health_cat.id)
android_tech = CategoriesGroup.create(group_id: android.id, category_id: tech_cat.id)
gourmet_food = CategoriesGroup.create(group_id: gourmet.id, category_id: food_cat.id)
smashbros_tech = CategoriesGroup.create(group_id: smashbros.id, category_id: tech_cat.id)
smashbros_fam = CategoriesGroup.create(group_id: smashbros.id, category_id: fam_cat.id)
rockclimb_fam = CategoriesGroup.create(group_id: rockclimb.id, category_id: fam_cat.id)
rockclimb_health = CategoriesGroup.create(group_id: rockclimb.id, category_id: health_cat.id)
rockclimb_outdoors = CategoriesGroup.create(group_id: rockclimb.id, category_id: outdoors_cat.id)
picnic_food = CategoriesGroup.create(group_id: picnic.id, category_id: food_cat.id)
picnic_fam = CategoriesGroup.create(group_id: picnic.id, category_id: fam_cat.id)
picnic_outdoors = CategoriesGroup.create(group_id: picnic.id, category_id: outdoors_cat.id)
calc_tutors_learn = CategoriesGroup.create(group_id: calc_tutors.id, category_id: learn_cat.id)
cityscaper_outdoors = CategoriesGroup.create(group_id: cityscaper.id, category_id: outdoors_cat.id)
cityscaper_photography = CategoriesGroup.create(group_id: cityscaper.id, category_id: photo_cat.id)
bayern_sports = CategoriesGroup.create(group_id: bayern.id, category_id: sports_cat.id)
bayern_fam = CategoriesGroup.create(group_id: bayern.id, category_id: fam_cat.id)

#huddles
watchers1 = Huddle.create(
  title: "Disney Movies Night",
  group_id: watchers.id,
  description: "We've rented out two halls in the AMC Kips Bay theatre in Manhattan to have Disney night! Bring friends and family to view some of the Disney classics. This is perfect for any of the younger ones in your family that have never seen the great classic films! Feel free to bring any Disney gear and wear costumes! If you can make any snacks or desserts in theme, please let me know via comment or by messaging me directly. Hope to see huddle up soon!",
  date: DateTime.parse('28 Feb 2017 18:30:00'),
  location: "570 2nd Ave, New York, NY 10016",
  founded_on: Date.new(2017, 1, 12),
  moderator_id: chim4ira312.id
)
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
picnic1 = Huddle.create(
  title: "February Picnic Huddle",
  group_id: picnic.id,
  description: "Hey families! We're having our monthly picnic indoors at Michelle Parson's rooftop. She is generously donating her building's public space for us to all gather. This week's theme will be Mexican! Try to dress in traditional Mexican garb, and please let me know via email or Huddle message about what food(s) you will be bringing. We will have dancing, Mexican/Latino music, and play some traditional Mexican family games. Get excited!",
  date: DateTime.parse('28 Feb 2017 13:30:00'),
  location: "160 W 24th St, New York, NY 10011",
  founded_on: Date.new(2017, 1, 12),
  moderator_id: mega0319.id
)
picnic2 = Huddle.create(
  title: "March Picnic Huddle",
  group_id: picnic.id,
  description: "Hey families! We're having the March picnic outdoors because the weather seems to be getting really nice out! Meet up at Central Park's Great Lawn this March and bring out your friends and families. We don't have a theme this month actually, so feel free to dress casual, fun, and comfortable. This is going to be a great picnic. This week we will be catering from Carmine's Italian so all RSVPers will have to pay at the Huddle $10 per person in their family/group. Bring footballs, frisbees, and other outdoor sports items! Oh, and dogs are of course welcome.",
  date: DateTime.parse('25 March 2017 11:30:00'),
  location: "Central Park, New York, NY 10022",
  founded_on: Date.new(2017, 2, 24),
  moderator_id: mega0319.id
)
picnic3 = Huddle.create(
  title: "April Picnic Huddle",
  group_id: picnic.id,
  description: "Hey families. This is the temporary page for the April picnic Huddle. Feel free to leave a comment to let the planning committee know about what theme or location you would like to have April's huddle. The weather is going to be getting better, so let's plan on having it outdoors. As usual, feel free to chime in or ask any questions!",
  date: DateTime.parse('19 April 2017 11:30:00'),
  location: "New York, NY",
  founded_on: Date.new(2017, 2, 24),
  moderator_id: mega0319.id
)
calc_tutors1 = Huddle.create(
  title: "Calc Study Session",
  group_id: calc_tutors.id,
  description: "Join us for a Calculus study session @ Starbucks. Feel free to bring your laptops and books, and have plenty of questions on hand to get answered. This is a great time for you to get together with peers in the same mindset and get and idea of the different concepts you might be struggling with at the moment. Take away great knowledge to help you on your course or personal calculus problems! We will have some tutors and members on deck to make sure we have people on hand to answer questions",
  date: DateTime.parse('2 March 2017 14:30:00'),
  location: "New York, NY",
  founded_on: Date.new(2017, 2, 24),
  moderator_id: guest.id
)
cityscaper1 = Huddle.create(
  title: "Tackling Trump (Tower)",
  group_id: cityscaper.id,
  description: "We're tackling Trump Tower this month. Yes, we are going straight to the top, going to have a photo session to take different angles from the rooftop, and then base jump right off. Base jumping gear will be provided if you don't have! Just leave a comment or message me directly and I will get right back to you. Bring your own photography gear though! We will have Nikon lenses on deck for any Nikon fans. They were generously donated last month by our sponsor member, Rich McGuy! Please do not RSVP if you do not have prior experience. We have an upcoming Huddle for beginners, so you can start there! Can't wait to see you all.",
  date: DateTime.parse('1 April 2017 14:30:00'),
  location: "New York, NY",
  founded_on: Date.new(2017, 2, 24),
  moderator_id: chim4ira312.id
)
bayern1 = Huddle.create(
  title: "Bayern vs Hamburg",
  group_id: bayern.id,
  description: "Come watch the Bayern vs Hamburger SV match on Feb. 25th! We will be watching at the Bier Garten in Manhattan. Don't forget to dress in that Bayern gear. No fee to get in, just buy your own drinks and food if you'd like!",
  date: DateTime.parse('25 Feb 2017 14:30:00'),
  location: "New York, NY",
  founded_on: Date.new(2017, 2, 24),
  moderator_id: meag.id
)


#huddles_users
smash_guest = HuddlesUser.create(huddle_id: smash1.id, user_id: guest.id)
smash_guest2 = HuddlesUser.create(huddle_id: smash1.id, user_id: chim4ira312.id)
smash_guest3 = HuddlesUser.create(huddle_id: smash1.id, user_id: mega0319.id)
calc_tutors1_guest1 = HuddlesUser.create(huddle_id: calc_tutors1.id, user_id: mega0319.id)
cityscaper1_guest1 = HuddlesUser.create(huddle_id: cityscaper1.id, user_id: jamesbond.id)
cityscaper1_guest2 = HuddlesUser.create(huddle_id: cityscaper1.id, user_id: meag.id)
watchers1_guest1 = HuddlesUser.create(huddle_id: watchers1.id, user_id: jamesbond.id)
watchers1_guest2 = HuddlesUser.create(huddle_id: watchers1.id, user_id: guest.id)
watchers1_guest3 = HuddlesUser.create(huddle_id: watchers1.id, user_id: chim4ira312.id)
bayern1_guest1 = HuddlesUser.create(huddle_id: bayern1.id, user_id: meag.id)
bayern1_guest2 = HuddlesUser.create(huddle_id: bayern1.id, user_id: chim4ira312.id)
