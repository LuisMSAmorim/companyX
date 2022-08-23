require 'rails_helper'

RSpec.describe EmployeesController, type: :controller do

  before(:all) do
    @employee = create(:employee)
  end

  describe "#index" do
    subject { get :index }
    it "returns http status ok" do
      expect(subject).to have_http_status(:ok)
    end
    it "returns all employees" do
      expect(subject.body).to eq(Employee.all.to_json)
    end
  end

  describe "#show" do
    subject { get :show, params: { id: @employee.id } }
    it "returns http status ok" do
      expect(subject).to have_http_status(:ok)
    end
    it "returns the employee" do
      expect(subject.body).to eq(@employee.to_json)
    end
  end

  describe "#create" do
    context "when successful" do
      subject { post :create, params: { employee: attributes_for(:employee) } }
      it "returns http status created" do
        expect(subject).to have_http_status(:created)
      end
      it "returns the created employee" do
        expect(subject.body).to eq(Employee.last.to_json)
      end
      it "creates a new employee" do
        expect { subject }.to change { Employee.count }.by(1)
      end
    end
    context "when failure" do
      subject { post :create, params: { employee: attributes_for(:employee, first_name: nil) } }
      it "returns http status unprocessable_entity" do
        expect(subject).to have_http_status(:unprocessable_entity)
      end
      it "returns the errors" do
        expect(subject.body).to eq({first_name: ["can't be blank"]}.to_json)
      end
      it "does not create a new employee" do
        expect { subject }.to_not change { Employee.count }
      end
    end
  end
end