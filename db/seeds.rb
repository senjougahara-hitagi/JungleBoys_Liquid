# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Room.destroy_all
User.destroy_all

20.times do
   User.create([
       username: Faker::Name.name,
       fullname: Faker::Name.name, 
       email: Faker::Internet.email,
       password: '123456789', 
       password_confirmation: '123456789',
       user_pic: 'profile-pictures/default-user-blank.jpg',
       ])
end
