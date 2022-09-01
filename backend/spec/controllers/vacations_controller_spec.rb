require 'rails_helper'

RSpec.describe VacationsController, type: :controller do
  before(:all) do
    @user = create(:user)
    @department = create(:department)
    @employee = create(:employee, department: @department)
    @vacation = create(:vacation, employee: @employee)
    @vacations_service = VacationsService.new
  end

  before(:each) do
    authenticate(@user)
  end

  describe '#index' do
    subject { get :index }
    it 'returns http status ok' do
      expect(subject).to have_http_status(:ok)
    end
    it 'returns all vacations' do
      expect(subject.body).to eq(@vacations_service.get_all.to_json)
    end
  end

  describe '#show' do
    subject { get :show, params: { id: @vacation.id } }
    it 'returns http status ok' do
      expect(subject).to have_http_status(:ok)
    end
    it 'returns the vacation' do
      expect(subject.body).to eq(@vacations_service.get_by_id(@vacation.id).to_json)
    end
  end

  describe '#create' do
    context 'when successful' do
      subject { post :create, params: { vacation: {employee_id: @employee.id, start_date: Date.today + 50.days, end_date: Date.today + 80.days } } }
      it 'returns http status created' do
        expect(subject).to have_http_status(:created)
      end
      it 'returns the created vacation' do
        expect(subject.body).to eq(Vacation.last.to_json)
      end
      it 'creates a vacation' do
        expect { subject }.to change { Vacation.count }.by(1)
      end
    end
    context 'when unsuccessful' do
      subject { post :create, params: { vacation: attributes_for(:vacation, employee_id: @employee.id, start_date: nil) } }
      it 'returns http status unprocessable_entity' do
        expect(subject).to have_http_status(:unprocessable_entity)
      end
      it 'returns the errors' do
        expect(subject.body).to_not be_nil
      end
      it 'does not returns the created vacation' do
        expect(subject.body).to_not eq(Vacation.last.to_json)
      end
      it 'does not create a vacation' do
        expect { subject }.to_not change { Vacation.count }
      end
    end
    context 'when unsuccessful - employee alredy has scheduled vacations for this period' do
      subject { post :create, params: { vacation: attributes_for(:vacation, employee_id: @employee.id) } }
      it 'returns http status unprocessable_entity' do
        expect(subject).to have_http_status(:unprocessable_entity)
      end
      it 'returns the errors' do
        expect(subject.body).to_not be_nil
      end
      it 'does not returns the created vacation' do
        expect(subject.body).to_not eq(Vacation.last.to_json)
      end
      it 'does not create a vacation' do
        expect { subject }.to_not change { Vacation.count }
      end
    end
  end

  describe '#update' do
    context 'when successful' do
      subject { patch :update, params: { id: @vacation.id, vacation: { start_date: Date.today + 1, end_date: Date.today + 2 } } }
      it 'returns http status ok' do
        expect(subject).to have_http_status(:ok)
      end
      it 'returns the updated vacation' do
        json_response = JSON.parse(subject.body)
        expect(json_response['id']).to eq(@vacation.id)
      end
      it 'updates the vacation' do
        expect { subject }.to change { @vacation.reload.start_date }.to(Date.today + 1)
      end
    end
    context 'when unsuccessful' do
      subject { patch :update, params: { id: @vacation.id, vacation: { start_date: nil, end_date: Date.today + 2 } } }
      it 'returns http status unprocessable_entity' do
        expect(subject).to have_http_status(:unprocessable_entity)
      end
      it 'returns the errors' do
        expect(subject.body).to_not be_nil
      end
      it 'does not returns the updated vacation' do
        json_response = JSON.parse(subject.body)
        expect(json_response['id']).to be_nil
      end
      it 'does not updates the vacation' do
        expect { subject }.to_not change { @vacation.reload.start_date }
      end
    end
    context 'when unsuccessful - the vacation start_date/end_date is in the past' do
      subject { patch :update, params: { id: @vacation.id, vacation: { start_date: Date.today - 1, end_date: Date.today - 2 } } }
      it 'returns http status unprocessable_entity' do
        expect(subject).to have_http_status(:unprocessable_entity)
      end
      it 'returns the errors' do
        json_response = JSON.parse(subject.body)
        expect(json_response['errors']).to eq('Just future vacations can be updated')
      end
      it 'does not returns the updated vacation' do
        json_response = JSON.parse(subject.body)
        expect(json_response['id']).to be_nil
      end
      it 'does not updates the vacation' do
        expect { subject }.to_not change { @vacation.reload.start_date }
      end
    end
  end

  describe '#destroy' do
    context 'when successful - the vacation is on the future' do
      subject { delete :destroy, params: { id: @vacation.id } }
      it 'returns http status no_content' do
        expect(subject).to have_http_status(:no_content)
      end
      it 'returns nothing' do
        expect(subject.body).to eq('')
      end
      it 'deletes the vacation' do
        expect { subject }.to change { Vacation.count }.by(-1)
      end
    end
    context 'when unsuccessful - the vacation is on the past' do
      before(:all) do
        @past_vacation = Vacation.new(start_date: Date.today - 1, end_date: Date.today - 2, employee_id: @employee.id)
        @past_vacation.save(validate: false)
      end
      subject { delete :destroy, params: { id: @past_vacation.id } }
      it 'returns http status unprocessable_entity' do
        expect(subject).to have_http_status(:unprocessable_entity)
      end
      it 'returns the errors' do
        json_response = JSON.parse(subject.body)
        expect(json_response['errors']).to eq('Just future vacations can be deleted')
      end
      it 'does not deletes the vacation' do
        expect { subject }.to_not change { Vacation.count }
      end
    end
  end
end
