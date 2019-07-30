# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Venue.destroy_all
Event.destroy_all
Ticket.destroy_all


50.times do
  User.create(
    username: Faker::Name.unique.name,
    location: "New York",
    age: rand(21...50),
    gender: Faker::Gender.type,
    interest: ["romance", "social", "music", "friends"].sample,
    avatar: UiFaces.face,
    bio: Faker::TvShows::VentureBros.quote,
    email: Faker::Internet.email,
    password: "abc123"
  )
end

url = "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=345&apikey=U4exrI3LSXdAk4c4wYfmdix9kS7s8Pb9"
response = RestClient.get(url)
data = JSON.parse(response)

seed_events = data["_embedded"]["events"]

seed_events.each do |event|
  venue = Venue.find_or_create_by(
    name: event["_embedded"]["venues"].first["name"],
    address: event["_embedded"]["venues"].first["address"]["line1"],
    city: event["_embedded"]["venues"].first["city"]["name"],
    state: event["_embedded"]["venues"].first["state"]["name"],
    avatar: event["_embedded"]["venues"].first["images"] ? event["_embedded"]["venues"].first["images"][0]["url"] : "https://tinyurl.com/y3qfoxky",
    url: event["_embedded"]["venues"].first["url"])
  Event.find_or_create_by(
    venue_id: venue.id,
    artist: event["name"],
    date: event["dates"]["start"]["localDate"],
    avatar: event["images"][0]["url"])
end

#   # Ticket.create
50.times do
  Ticket.create(
    user_id: User.all.sample.id,
    event_id: Event.all.sample.id,
    available: [true, false].sample
  )
end
