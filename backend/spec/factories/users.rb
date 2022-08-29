FactoryBot.define do
  factory :user do
    email { "johndoe@email.com" }
    password_digest { "password" }
  end
end
