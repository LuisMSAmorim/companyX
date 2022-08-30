FactoryBot.define do
  factory :vacation do
    employee
    start_date { Date.today }
    end_date { Date.today + 1.day }
  end
end
