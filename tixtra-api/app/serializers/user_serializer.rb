class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :location, :age, :gender, :interest, :avatar, :bio

  has_many :tickets
  has_many :events
  has_many :friendships
  has_many :conversations
end
