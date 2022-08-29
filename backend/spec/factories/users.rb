FactoryBot.define do
  factory :user do
    sequence(:email) { |n| "test#{n}@email.com" }
    password_digest { 'password123@' }
  end
end
