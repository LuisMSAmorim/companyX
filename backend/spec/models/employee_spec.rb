require 'rails_helper'

RSpec.describe Employee, type: :model do
  before(:all) do
    @department = create(:department)
    @employee = create(:employee, department: @department)
  end

  describe '#validations' do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:start_date) }
    it { should validate_presence_of(:email) }
    it { should validate_uniqueness_of(:email) }
    it { should validate_presence_of(:city) }
    it { should validate_presence_of(:country) }
    it { should validate_presence_of(:street) }
    it { should validate_presence_of(:zipcode) }
    it { should validate_presence_of(:number) }
    it { should validate_presence_of(:state) }
    it { should validate_presence_of(:district) }

    it 'should validate email format' do
      employee = build(:employee, department_id: @department.id, email: 'invalid_email.com')
      expect(employee).to_not be_valid
    end
  end

  describe '#associations' do
    it { should belong_to(:department) }
  end
end
