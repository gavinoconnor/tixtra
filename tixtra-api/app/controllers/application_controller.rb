class ApplicationController < ActionController::API
  # before_action :authorized

  # def encode_token(payload)
  #   # pass user_id
  #   JWT.encode({user_id: payload}, 'winteriscoming')
  # end

  def auth_header
    request.headers['Authorization']
  end

  def decode_token
    if auth_header
      token = auth_header
      begin
        JWT.decode(token, 'winteriscoming', true, algorithm: 'HS256')
      rescue JWT::DecodeError
        nil
      end
    end
  end

  def session_user
    if decoded_token
      user_id = decoded_token[0]['user_id']
      @user = User.find_by(id: user_id)
    end
  end

  def logged_in?
    !!session_user
  end

  def authorized
    render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
  end

end
