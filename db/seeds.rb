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
vegetarians = Group.create(name: "NYC Vegetarians", description: "Come together and meet with New York City Vegetarians for restaurant trips, cooking sessions, and more!")

overwatchers = Group.create(name: "Overwatchers", description: "All Overwatch players welcome! Learn strategies, make friends, and just have a good time")

watchers = Group.create(name: "Movie Buffs", description: "Meet other movie buffs for viewings, discussions, and more!")

fake_watchers = Group.create(name: "Movie Buffs", description: "We are fake movie buffs!")

#Categories
1 = Category.create(name: "Movements")
2 = Category.create(name: "Outdoors & Adventure")
3 = Category.create(name: "Tech")
4 = Category.create(name: "Family")
5 = Category.create(name: "Health & Wellness")
6 = Category.create(name: "Sports & Fitness")
7 = Category.create(name: "Learning")
8 = Category.create(name: "Photography")
9 = Category.create(name: "Food & Drink")
10 = Category.create(name: "Writing")
11 = Category.create(name: "Language & Culture")
12 = Category.create(name: "Music")
13 = Category.create(name: "LGBTQ")
14 = Category.create(name: "Film")
15 = Category.create(name: "Sci-Fi & Games")
16 = Category.create(name: "Beliefs")
17 = Category.create(name: "Arts")
18 = Category.create(name: "Book Clubs")
19 = Category.create(name: "Dance")
20 = Category.create(name: "Pets")
21 = Category.create(name: "Hobbies & Crafts")
22 = Category.create(name: "Fashion & Beauty")
23 = Category.create(name: "Social")
24 = Category.create(name: "Career & Business")
