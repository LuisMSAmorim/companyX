require 'rails_helper'

RSpec.describe Department, type: :model do
  before(:all) do
    @department = create(:department)
    @employee1 = create(:employee, department: @department)
    @employee2 = create(:employee, department: @department)
  end

  describe '#validations' do
    it { should validate_presence_of(:name) }
  end

  describe '#associations' do
    it { should have_many(:employees).dependent(:destroy) }
  end

  describe '#employees' do
    it 'returns all employees in a department' do
      expect(@department.employees).to eq([@employee1, @employee2])
    end
  end
end
