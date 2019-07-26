class Api::V1::UsersController < ApplicationController
  # skip_before_action :authorized, only: [:create]

  def index
    @users = User.all
    render json: @users
  end

  def profile
    render json: { user: UserSerializer.new(session_user) }, status: :accepted
  end

  def create
    @user = User.new(
      username: params["username"],
      email: params["email"],
      password: params["password"]
      )
    if @user.save
        @token = encode_token({ user_id: @user.id })
        render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
      else
       render json: { error: 'failed to create user' }, status: :not_acceptable
      end
  end

  def show
   @user = User.find_by(id: params[:id])
   render json: @user
  end

  def edit
    @user = User.find(params["id"])
  end

  def update
    @user = User.find(params["id"])
    if @user.update(
      age: params["age"],
      location: params["location"],
      gender: params["gender"],
      interest: params["interest"],
      avatar: params["avatar"],
      bio: params["bio"]
    )
      render json: @user
    else
      render json: { error: "Bad user." }, status: :not_accepted
    end
  end

  # private
  #
  # def user_params
  #   params.require(:user).permit(
  #     :username,
  #     :password
  #     )
  # end
end
