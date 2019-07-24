class Api::V1::AuthController < ApplicationController
  # skip_before_action :authorized, only: [:create]

  def login
    # check if my params contain the entered username and password
    user = User.find_by(username: params["username"])

    if user && user.authenticate(params["password"])

      token = JWT.encode({user_id: user.id}, 'winteriscoming')

      render json: {user: UserSerializer.new(user), token: token}

      # render json: user
    else
      render json: {errors: "Ah ah ah...you didn't say the magic word!"}
    end
  end

  def auto_login
    if session_user
      render json: session_user
    else
      render json: {errors: "Don't touch my cookies!"}
    end
  end
end
