require 'rails_helper'

RSpec.describe Vacation, type: :model do

  before(:all) do
    @employee = create(:employee)
  end

  describe "#validations" do
    it { should validate_presence_of(:start_date) }
    it { should validate_presence_of(:end_date) }

    it "should validate that start_date is before end_date" do
      vacation = Vacation.create(start_date: Date.today, end_date: Date.today - 1.day, employee_id: @employee.id)
      expect(vacation).to_not be_valid
    end
  end
end
