# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Project.destroy_all

#users
demo_human = User.create([{name: 'Demo Human', email: 'demohuman@yahoo.com', password: 'password' }])
user_1 = User.create([{name: 'Kyle', email: 'KingKyle@yahoo.com', password: 'password' }])
user_2 = User.create([{name: 'Ayana', email: 'Ayana@yahoo.com', password: 'password' }])

#project
project_1 = Project.create([{
  user_id: user_1.id,
  title: "Cool Marbel Shit",
  body: "This is a really cool project that uses marbels to create unlimited energy",
  category: "Art",
  date: "",
  current_total: 0,
  target: 0
}])