class EventSerializer < ActiveModel::Serializer
  attributes :id, :artist, :date, :avatar, :tickets

  has_many :tickets
end
