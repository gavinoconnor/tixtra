class TicketSerializer < ActiveModel::Serializer
  attributes :id, :available, :event_id, :requests

  has_many :requests
end
