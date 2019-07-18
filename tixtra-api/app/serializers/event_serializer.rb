class EventSerializer < ActiveModel::Serializer
  attributes :id, :artist, :date, :avatar

  has_many :tickets
end
