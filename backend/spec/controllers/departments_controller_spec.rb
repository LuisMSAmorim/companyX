require 'rails_helper'

RSpec.describe DepartmentsController, type: :controller do
  before(:all) do
    @department = create(:department, :with_employees)
  end

  describe '#index' do
    subject { get :index }
    it 'returns http status ok' do
      expect(subject).to have_http_status(:ok)
    end
    it 'returns all departments' do
      expect(subject.body).to eq(Department.all.to_json)
    end
  end

  describe '#show' do
    subject { get :show, params: { id: @department.id } }
    it 'returns http status ok' do
      expect(subject).to have_http_status(:ok)
    end
    it 'returns the department' do
      expect(subject.body).to eq(@department.to_json)
    end
  end

  describe '#employees' do
    subject { get :employees, params: { id: @department.id } }
    it 'returns http status ok' do
      expect(subject).to have_http_status(:ok)
    end
    it 'returns the department employees' do
      expect(subject.body).to eq(@department.employees.to_json)
    end
  end

  describe '#create' do
    context 'when successful' do
      subject { post :create, params: { department: attributes_for(:department) } }
      it 'returns http status created' do
        expect(subject).to have_http_status(:created)
      end
      it 'returns the created department' do
        expect(subject.body).to eq(Department.last.to_json)
      end
      it 'creates a new department' do
        expect { subject }.to change { Department.count }.by(1)
      end
    end
  end
  context 'when failure' do
    subject { post :create, params: { department: { name: nil } } }
    it 'returns http status unprocessable_entity' do
      expect(subject).to have_http_status(:unprocessable_entity)
    end
    it 'returns the errors' do
      expect(subject.body).to eq({ name: ["can't be blank"] }.to_json)
    end
    it 'does not create a new department' do
      expect { subject }.to_not change { Department.count }
    end
  end

  describe '#update' do
    context 'when successful' do
      subject { patch :update, params: { id: @department.id, department: { name: 'New Name' } } }
      it 'returns http status ok' do
        expect(subject).to have_http_status(:ok)
      end
      it 'returns the updated department' do
        parsed_response = JSON.parse(subject.body)
        expect(parsed_response['id']).to eq(@department.id)
      end
      it 'updates the department' do
        expect { subject }.to change { Department.last.name }.to('New Name')
      end
    end
    context 'when failure' do
      subject { patch :update, params: { id: @department.id, department: { name: nil } } }
      it 'returns http status unprocessable_entity' do
        expect(subject).to have_http_status(:unprocessable_entity)
      end
      it 'returns the errors' do
        expect(subject.body).to eq({ name: ["can't be blank"] }.to_json)
      end
      it 'does not update the department' do
        expect { subject }.to_not change { Department.last.name }
      end
    end
  end

  describe '#destroy' do
    subject { delete :destroy, params: { id: @department.id } }
    it 'returns http status no_content' do
      expect(subject).to have_http_status(:no_content)
    end
    it 'destroys the department' do
      expect { subject }.to change { Department.count }.by(-1)
    end
  end
end
