class VenueSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :city, :state, :url, :avatar

  has_many :events
end
