class TicketSerializer < ActiveModel::Serializer
  attributes :id, :available, :event_id, :requests, :event, :user

  # def :event
  #   return Event.find(object.event_id)
  # end

  has_many :requests
end
