class Api::V1::ConversationsController < ApplicationController

  def index
 @users = User.all
 @conversations = Conversation.all
 end

  def create
   # if Conversation.between(params[:sender_id],params[:recipient_id])
   #   .present?
   #    @conversation = Conversation.between(params[:sender_id],
   #     params[:recipient_id]).first
   # else
    @conversation = Conversation.create!(conversation_params)
      render json: @conversation
   # end
   # redirect_to conversation_messages_path(@conversation)
  end

  private
   def conversation_params

    params.require(:conversation).permit(:sender_id, :recipient_id, :content)
   end

end
