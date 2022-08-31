require 'rails_helper'

RSpec.describe VacationsService, type: :service do

  before(:all) do
    @service = described_class.new
    @department = create(:department)
    @employee = create(:employee, department: @department)
    @vacation = create(:vacation, employee: @employee)
  end

  describe "#get_all" do
    it "returns all vacations" do
      expect(@service.get_all).to include(@vacation)
    end
  end

  describe "#get_by_id" do
    it "returns the vacation with the given id" do
      expect(@service.get_by_id(@vacation.id)).to eq(@vacation)
    end
  end

  describe "#update" do
    context "when the vacation start_date is in the future" do
      subject { @service.update(@vacation, { start_date: Date.today + 1.day, end_date: Date.today + 2.days }) }
      it "updates the vacation" do
        expect { subject }.to change { @vacation.reload.start_date }.to(Date.today + 1.day)
      end
    end
    context "when the vacation start_date is in the past" do
      subject { @service.update(@vacation, start_date: Date.today - 1.day) }
      it "raises an Unprocessable error" do
        expect {
          subject
        }.to raise_error(ApplicationService::Unprocessable)
      end
    end
  end

  describe "#destroy" do
    context "when the vacation start_date is in the future" do
      subject { @service.destroy(@vacation) }
      it "deletes the vacation" do
        expect { subject }.to change { Vacation.count }.by(-1)
      end
    end
    context "when the vacation start_date is in the past" do
      before(:all) do
        @past_vacation = Vacation.new(start_date: Date.today - 2.day, end_date: Date.today - 1.days, employee: @employee)
        @past_vacation.save(validate: false)
      end
      subject { @service.destroy(@past_vacation) }
      it "raises an Unprocessable error" do
        expect {
          subject
        }.to raise_error(ApplicationService::Unprocessable)
      end
    end
  end
end
