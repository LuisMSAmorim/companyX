require 'rails_helper'

RSpec.describe Employee, type: :model do
  before(:all) do
    @department = create(:department)
    @employee = create(:employee, department: @department)
  end

  describe '#validations' do
    it { should validate_presence_of(:first_name) }
    it { should validate_presence_of(:last_name) }
    it { should validate_presence_of(:birth_date) }
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

  describe '#name' do
    it 'returns the full name of the employee' do
      expect(@employee.name).to eq("#{@employee.first_name} #{@employee.last_name}")
    end
  end

  describe '#change_vacation_status' do
    context 'when param is true' do
      it 'updates the is_on_vacation attribute to true' do
        @employee.change_vacation_status(true)
        expect(@employee.reload.is_on_vacation).to be_truthy
      end
    end
    context 'when param is false' do
      it 'updates the is_on_vacation attribute to true' do
        @employee.change_vacation_status(false)
        expect(@employee.reload.is_on_vacation).to be_falsey
      end
    end
  end
end
