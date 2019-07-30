class Api::V1::FriendshipsController < ApplicationController
  def create
    @friendship = session_user.friendships.build(:friend_id => params[:friend_id])
    if @friendship.save
      redirect_to session_user
    else
      redirect_to users_path
    end
  end

  def destroy
    @friendship = session_user.friendships.find(params[:id])
    @friendship.destroy
    redirect_to session_user
  end

end
