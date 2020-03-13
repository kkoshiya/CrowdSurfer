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
demo_human = User.create({name: 'Demo Human', email: 'demohuman@yahoo.com', password: 'password', balance: 10000 })
user_1 = User.create({name: 'Kyle', email: 'KingKyle@yahoo.com', password: 'password' })
user_2 = User.create({name: 'Ayana Flute', email: 'Ayana@baby.com', password: 'password' })
user_3 = User.create({name: 'Luke BitcoinCash', email: 'lucklovescrypto@usFED.com', password: 'password', balance: 5000 })
user_4 = User.create({name: 'Donald Trump', email: 'lucklovescrypto22@usFED.com', password: 'password', balance: 5000 })

#projects
project_1 = Project.create({
  user_id: user_1.id,
  title: "Cool Marbel Shit",
  description: "All hail the greys and our neet overlords",
  body: "This is a really cool project that uses marbels to create unlimited energy",
  category: "art",
  current_total: 10000,
  target: 100000,
  image: 'marbel.gif'
  # date: 2020-04-01
})


project_2 = Project.create({
  user_id: user_2.id,
  title: "Weird Ring Bull Shit",
  description: "911 was an inside job, let's be real here",
  body: "Poo poo platers, which uses marbels to create unlimited aids",
  category: "art",
  current_total: 27400,
  target: 50000,
  image: 'ring.gif'
  # date: 2020-05-01
})

project_3 = Project.create({
  user_id: user_2.id,
  title: "Steph Curry Clonning",
  body: "Tank for Wiseman",
  description: "Clone the Goat so we can win another ring baby",
  category: "art",
  current_total: 47000,
  target: 44000,
  image: 'ring.gif'
  # date: 2020-06-01
})

project_4 = Project.create({
  user_id: user_3.id,
  title: "5G Foldable Phone",
  body: "Easy $$ sniper",
  description: "A machine that can create whatever type of pokemon needs yall sicko's need",
  category: "technology",
  current_total: 47000,
  target: 44000,
  image: 'folding.gif'
  # date: 2020-06-01
})

project_5 = Project.create({
  user_id: user_3.id,
  title: "THE ARCHER'S PARADE",
  body: "Easy $$ sniper",
  description: "The first full-length ETH album since 2013",
  category: "music",
  current_total: 47000,
  target: 44000,
  image: 'chance.gif'
  # date: 2020-06-01
})

project_6 = Project.create({
  user_id: user_4.id,
  title: "Chainlink",
  body: "Decentralized Oracle built on the ETH Blockchain",
  description: "The path to financial independence by sicumventing Swift",
  category: "technology",
  current_total: 47430,
  target: 520000,
  image: 'chance.gif'
  # date: 2020-06-01
})

project_7 = Project.create({
  user_id: user_4.id,
  title: "America Mystery Box",
  body: "The greatest band in the history of bands is about to give us the secret to life",
  description: "The path to eternal youth is the eye of yan",
  category: "music",
  current_total: 470430,
  target: 52000,
  image: 'eye.gif'
  # date: 2020-06-01
})



