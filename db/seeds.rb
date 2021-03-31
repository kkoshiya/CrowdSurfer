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
  title: "Cool Marbel Invention",
  description: "All hail the greys and our neet overlords who have blessed us with 2030 tech",
  body: "This is a really cool project that uses marbels to create unlimited energy",
  category: "art",
  current_total: 10000,
  target: 100000,
  image: 'marbel.gif'
  # date: 2020-04-01
})


project_2 = Project.create({
  user_id: user_2.id,
  title: "Smart Ring to Rule them All " ,
  description: "911 was an inside job, let's be real here.",
  body: "Open doors and unlock other things, which uses marbels to create unlimited aids",
  category: "art",
  current_total: 27400,
  target: 50000,
  image: 'ring.gif',
  days: 50
})

project_3 = Project.create({
  user_id: user_2.id,
  title: "Steph Curry Clonning Device",
  body: "Tank for Wiseman ",
  description: "Clone the Goat so we can win another ring baby 2021",
  category: "art",
  current_total: 47000,
  target: 44000,
  image: 'computer.png',
  days: 60
})

project_4 = Project.create({
  user_id: user_3.id,
  title: "5G Foldable Phone",
  body: "Easy $$ Sniper",
  description: "A machine that can create whatever type of pokemon needs yall sicko's need",
  category: "technology",
  current_total: 47000,
  target: 44000,
  image: 'folding.gif',
  days: 13
})

project_5 = Project.create({
  user_id: user_3.id,
  title: "THE ARCHER'S PARADE",
  body: "Easy $$ sniper",
  description: "The first full-length ETH album since 2013",
  category: "music",
  current_total: 47000,
  target: 44000,
  image: 'chance.gif',
  days: 89
})

project_6 = Project.create({
  user_id: user_4.id,
  title: "Chainlink",
  body: "Decentralized Oracle built on the ETH Blockchain",
  description: "The path to financial independence by sicumventing Swift",
  category: "technology",
  current_total: 47430,
  target: 520000,
  image: 'chance.gif',
  days: 73
})

project_7 = Project.create({
  user_id: user_2.id,
  title: "America's First Banjo Replica",
  body: "The greatest band in the history of bands is about to give us the secret to life",
  description: "The path to eternal youth is the eye of yan",
  category: "music",
  current_total: 470,
  target: 5200,
  image: 'banjo.png',
  days: 19
})

project_8 = Project.create({
  user_id: user_4.id,
  title: "America Mystery Box",
  body: "The greatest band in the history of bands is about to give us the secret to life",
  description: "The path to eternal youth is the eye of Yan",
  category: "music",
  current_total: 470430,
  target: 52000,
  image: 'eye.gif',
  days: 42
})

project_9 = Project.create({
  user_id: user_2.id,
  title: "Corona Virus Cure",
  body: "Tired of being so sick that you wish you were dead?",
  description: "The path to eternal youth is the eye of yan",
  category: "technology",
  current_total: 17030,
  target: 55000,
  image: 'corona.png',
  days: 52
})

project_10 = Project.create({
  user_id: user_2.id,
  title: "Corona Virus Cure",
  body: "Tired of being so sick that you wish you were dead?",
  description: "The path to eternal youth is the eye of yan",
  category: "film",
  current_total: 17030,
  target: 55000,
  image: 'corona.png',
  days: 91
})

project_11 = Project.create({
  user_id: user_2.id,
  title: "Spiderman Pokemon CrossOver",
  body: "One of the freshest creations since the inception of the Sinister Six",
  description: "Pokemon and Marvel what is not to like about this project",
  category: "comics",
  current_total: 10,
  target: 1000,
  image: 'spiderman.gif',
  days: 6
})

project_12 = Project.create({
  user_id: user_4.id,
  title: "Soy Berry Maker 2",
  body: "One of the freshest creations since the inception of the Sinister Six",
  description: "Pokemon and Marvel what is not to like about this project",
  category: "food",
  current_total: 10,
  target: 1000,
  image: 'spiderman.gif',
  days: 38
})


project_13 = Project.create({
  user_id: user_4.id,
  title: "Copy Copy Cat",
  body: "One of the freshest creations since the inception of the Sinister Six",
  description: "Pokemon and Marvel what is not to like about this project",
  category: "publishing",
  current_total: 10,
  target: 1000,
  image: 'spiderman.gif',
  days: 38
})

project_14 = Project.create({
  user_id: user_3.id,
  title: "Cones of Dunshire",
  body: "One of the freshest creations since the inception of the Sinister Six",
  description: "Pokemon and Marvel what is not to like about this project",
  category: "games",
  current_total: 1500,
  target: 30000,
  image: 'corona.png',
  days: 38
})

project_15 = Project.create({
  user_id: user_3.id,
  title: "Catan 3 - Revenge of the Sith",
  body: "One of the freshest creations since the inception of the Sinister Six",
  description: "Pokemon and Marvel what is not to like about this project",
  category: "games",
  current_total: 1500,
  target: 30000,
  image: 'corona.png',
  days: 38
})

project_16 = Project.create({
  user_id: user_2.id,
  title: "Chim-Pokemon",
  body: "Inspire by south park  since the inception of the Sinister Six",
  description: "Pokemon and Marvel what is not to like about this project",
  category: "games",
  current_total: 1500,
  target: 30000,
  image: 'corona.png',
  days: 38
})

project_17 = Project.create({
  user_id: user_2.id,
  title: "Satoshi's Diary",
  body: "Inspire by south park  since the inception of the Sinister Six",
  description: "Pokemon and Marvel what is not to like about this project",
  category: "publishing",
  current_total: 1500,
  target: 30000,
  image: 'corona.png',
  days: 38
})

project_18 = Project.create({
  user_id: user_2.id,
  title: "Goalden Road",
  body: "Inspire by south park  since the inception of the Sinister Six",
  description: "Pokemon and Marvel what is not to like about this project",
  category: "publishing",
  current_total: 1500,
  target: 30000,
  image: 'corona.png',
  days: 38
})


