FactoryBot.define do
  factory :employee do
    department
    first_name { Faker::Name.first_name }
    last_name { Faker::Name.last_name }
    birth_date { Faker::Date.birthday(min_age: 18, max_age: 65) }
    start_date { Faker::Date.between(from: Date.today, to: 1.year.ago) }
    email { Faker::Internet.email }
    city { Faker::Address.city }
    country { Faker::Address.country }
    street { Faker::Address.street_name }
    zipcode { Faker::Address.zip_code }
    number { Faker::Address.building_number }
    state { Faker::Address.state }
    district { Faker::Address.community }
    role { Faker::Job.title }
  end
end
