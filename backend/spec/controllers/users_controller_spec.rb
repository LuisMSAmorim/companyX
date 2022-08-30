require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  before(:all) do
    @user = create(:user)
  end

  before(:each) do
    authenticate(@user)
  end

  describe '#index' do
    subject { get :index }
    it 'returns http status ok' do
      expect(subject).to have_http_status(:ok)
    end
    it 'returns all users' do
      expect(subject.body).to eq(User.all.to_json)
    end
  end

  describe '#show' do
    subject { get :show, params: { id: @user.id } }
    it 'returns http status ok' do
      expect(subject).to have_http_status(:ok)
    end
    it 'returns the user' do
      expect(subject.body).to eq(@user.to_json)
    end
  end

  describe '#create' do
    context 'when successful' do
      subject { post :create, params: { email: 'teste@email.com', password: '12345A@!' } }
      it 'returns http status created' do
        expect(subject).to have_http_status(:created)
      end
      it 'returns the created user' do
        expect(subject.body).to eq(User.last.to_json)
      end
      it 'creates a new user' do
        expect { subject }.to change { User.count }.by(1)
      end
    end
    context 'when failure' do
      subject { post :create, params: { email: nil, password: '123456' } }
      it 'returns http status unprocessable_entity' do
        expect(subject).to have_http_status(:unprocessable_entity)
      end
      it 'returns the errors' do
        expect(subject.body).to eq({ email: ["can't be blank"] }.to_json)
      end
      it 'does not create a new user' do
        expect { subject }.to_not change { User.count }
      end
    end
  end

  describe '#destroy' do
    subject { delete :destroy, params: { id: @user.id } }
    it 'returns http status no_content' do
      expect(subject).to have_http_status(:no_content)
    end
    it 'deletes the user' do
      expect { subject }.to change { User.count }.by(-1)
    end
  end
end
