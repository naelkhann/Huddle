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
category1 = Category.create(name: "Movements")
category2 = Category.create(name: "Outdoors & Adventure")
category3 = Category.create(name: "Tech")
category4 = Category.create(name: "Family")
category5 = Category.create(name: "Health & Wellness")
category6 = Category.create(name: "Sports & Fitness")
category7 = Category.create(name: "Learning")
category8 = Category.create(name: "Photography")
category9 = Category.create(name: "Food & Drink")
category10 = Category.create(name: "Writing")
category11 = Category.create(name: "Language & Culture")
category12 = Category.create(name: "Music")
category13 = Category.create(name: "LGBTQ")
category14 = Category.create(name: "Film")
category15 = Category.create(name: "Sci-Fi & Games")
category16 = Category.create(name: "Beliefs")
category17 = Category.create(name: "Arts")
category18 = Category.create(name: "Book Clubs")
category19 = Category.create(name: "Dance")
category20 = Category.create(name: "Pets")
category21 = Category.create(name: "Hobbies & Crafts")
category22 = Category.create(name: "Fashion & Beauty")
category23 = Category.create(name: "Social")
category24 = Category.create(name: "Career & Business")
