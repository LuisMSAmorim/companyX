FactoryBot.define do
  factory :department do
    sequence(:name) { |n| "Department #{n}" }
    trait :with_employees do
      after(:create) do |department|
        create_list(:employee, 3, department: department)
      end
    end
  end
end
