class Api::V1::UsersController < ApplicationController

  def create
    @user = User.create(user_params)
    if @user.valid?
      render json: { user: UserSerializer.new(@user) }, status: :created
    else
      render json: { error: 'failed to create user' }, status: :not_acceptable
    end
  end

  def index
    @users = User.all
    render json: @users
  end

  def show
   @user = User.find_by(id: params[:id])
   render json: @user
  end

  def update
    @user = User.first
    if @user.update(user_params)
      render json: @user
    else
      render json: { error: "Bad." }, status: :not_accepted
    end
  end

  private

  def user_params
    params.require(:user).permit(
      :username,
      :location,
      :age,
      :gender,
      :avatar,
      :bio,
      :email,
      :password
      )
  end
end
