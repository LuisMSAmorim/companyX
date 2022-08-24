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
    it { should validate_presence_of(:city) }
    it { should validate_presence_of(:country) }
    it { should validate_presence_of(:street) }
    it { should validate_presence_of(:zipcode) }
    it { should validate_presence_of(:number) }
    it { should validate_presence_of(:state) }
    it { should validate_presence_of(:district) }
  end

  describe "#associations" do
    it { should belong_to(:department) }
  end

  describe '#name' do
    it 'returns the full name of the employee' do
      expect(@employee.name).to eq("#{@employee.first_name} #{@employee.last_name}")
    end
  end
end