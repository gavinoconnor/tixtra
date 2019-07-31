class ConversationSerializer < ActiveModel::Serializer
  attributes :id, :content, :sender_id, :recipient_id

  has_many :messages
end
