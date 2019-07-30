class TicketSerializer < ActiveModel::Serializer
  attributes :id, :available, :event_id

  has_many :requests
end
