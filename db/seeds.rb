# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
require 'faker'

for i in 0..5
   User.create([
       {name: Faker::Name.name}, 
       {email: Faker::Internet.email},
       {password: '123456789'}, 
       {password_confirmation: '123456789'},
       {user_pic: 'profile-pictures/'+i+'jpg'},
       ])
end