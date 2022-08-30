module ControllerSpecHelpers
  include JsonWebToken

  def authenticate(user)
    token = jwt_encode(user_id: user.id)
    request.headers['AUTHORIZATION'] = token
  end
end
