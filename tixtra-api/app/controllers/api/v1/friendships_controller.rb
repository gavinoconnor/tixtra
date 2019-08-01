class Api::V1::FriendshipsController < ApplicationController

  def index
    @users = User.all
    @friendships = Friendship.all
  end

  def create
    @friendship = Friendship.create!(friendship_params)
      render json: @friendship
  end

  def destroy
    @friendship = session_user.friendships.find(params[:id])
    @friendship.destroy
    redirect_to session_user
  end

  private
   def friendship_params

    params.require(:friendship).permit(:user_id, :friend_id)
   end


 end
  # def create
  #   @friendship = session_user.friendships.build(:friend_id => params[:friend_id])
  #   if @friendship.save
  #     redirect_to session_user
  #   else
  #     redirect_to users_path
  #   end
  # end
