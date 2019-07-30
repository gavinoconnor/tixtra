class Ticket < ApplicationRecord
  belongs_to :user
  belongs_to :event

  has_many :requests
  has_many :requesters, through: :requests, class_name: "User", foreign_key: "user_id"
end
