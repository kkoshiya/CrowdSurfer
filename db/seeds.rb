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
demo_human = User.create({name: 'Demo Human', email: 'demohuman@yahoo.com', password: 'password' })
user_1 = User.create({name: 'Kyle', email: 'KingKyle@yahoo.com', password: 'password' })
user_2 = User.create({name: 'Ayana', email: 'Ayana@baby.com', password: 'password' })

#projects
project_1 = Project.create({
  user_id: user_1.id,
  title: "Cool Marbel Shit",
  body: "This is a really cool project that uses marbels to create unlimited energy",
  catagory: "Art",
  current_total: 10000,
  target: 100000
})


project_2 = Project.create({
  user_id: user_2.id,
  title: "Weird Ring Bull Shit",
  body: "Poo poo platers, which uses marbels to create unlimited aids",
  category: "Art",
  current_total: 27400,
  target: 50000
})

project_3 = Project.create({
  user_id: user_2.id,
  title: "Steph Curry Clonning",
  body: "Tank for Wiseman",
  category: "Art",
  current_total: 47000,
  target: 44000
})

