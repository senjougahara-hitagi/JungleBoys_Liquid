# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

100.times do
  Room.create!(
      user_id: User.ids.sample, 
      room_name: Faker::NatoPhoneticAlphabet.code_word,
      address: Faker::Address.full_address,
      province: "An Giang",
      cost_per_night: 3000,
      type_of_room: 1,
      num_of_baths: 1,
      num_of_guests: 1,
      num_of_bedrooms: 2,
      num_of_beds: 5,
      amentities: 'Wifi',
      contact_host: Faker::PhoneNumber.phone_number,
      pictures: [File.open(Rails.root.join("app/assets/images/rooms/room1-1.jpg"))],
      room_info: "Lorem",
      )
end