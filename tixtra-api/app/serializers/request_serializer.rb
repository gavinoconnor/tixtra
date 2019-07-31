class RequestSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :ticket_id, :requester
  
end
