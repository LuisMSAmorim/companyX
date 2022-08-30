require 'rails_helper'

RSpec.describe AuthenticationController, type: :controller do
  before(:all) do
    @user = create(:user, password: "Johndoe000@")
  end

  describe "#login" do
    context "when is authorized" do
      subject { post :login, params: { email: @user.email, password: "Johndoe000@" } }
      it "returns http status ok" do
        expect(subject).to have_http_status(:ok)
      end
      it "returns the token" do
        json_response = JSON.parse(subject.body)
        expect(json_response["token"]).to_not be_nil
      end
    end
    context "when is not authorized" do
      subject { post :login, params: { email: @user.email, password: "wrongPassword123!!!" } }
      it "returns http status unauthorized" do
        expect(subject).to have_http_status(:unauthorized)
      end
      it "does not return the token" do
        json_response = JSON.parse(subject.body)
        expect(json_response["token"]).to be_nil
      end
    end
  end
end
