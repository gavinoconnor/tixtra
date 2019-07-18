class Message < ApplicationRecord
  validates_presence_of :body, :conversation_id, :user_id
  belongs_to :conversation
  belongs_to :user

  def message_time
    created_at.strftime("%m/%d/%y at %l:%M %p")
  end

end
