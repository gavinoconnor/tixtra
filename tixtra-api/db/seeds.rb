# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'rest-client'
require 'json'

10.times do
  User.create(
    username: Faker::Name.unique.name,
    location: "New York",
    age: rand(21...50),
    gender: [male, female].sample,
    interest: [romance, social, music, friends].sample,
    avatar: UiFaces.face,
    bio: Faker::TvShows::VentureBros.quote,
    email: Faker::Internet.email,
    password: "abc123"
  )
end

# url = "https://app.ticketmaster.com/discovery/v2/venues.json?classificationName=music&dmaId=345&apikey=U4exrI3LSXdAk4c4wYfmdix9kS7s8Pb9"
# response = RestClient.get(url)
# JSON.parse(response)
#
#   # Venue.create
#   # Event.create
#   # Ticket.create
