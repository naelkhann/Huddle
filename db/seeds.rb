# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Group.destroy_all

# Users
chim4ira312 = User.create(username: "chim4ira312", password: "split312")
mega0319 = User.create(username: "mega0319", password: "password")
guest = User.create(username: "Guest", password: "password")

# groups
vegetarians = Group.create(name: "NYC Vegetarians", description: "Come together and meet with New York City Vegetarians for restaurant trips, cooking sessions, and more!")

overwatchers = Group.create(name: "Overwatchers", description: "All Overwatch players welcome! Learn strategies, make friends, and just have a good time")

watchers = Group.create(name: "Movie Buffs", description: "Meet other movie buffs for viewings, discussions, and more!")

fake_watchers = Group.create(name: "Movie Buffs", description: "We are fake movie buffs!")
