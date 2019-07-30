class User < ApplicationRecord
  has_secure_password
  validates :username, uniqueness: { case_sensitive: false }
  validates :username, :email, presence: true

  has_many :tickets
  has_many :events, through: :tickets

  # requests made by this user
  has_many :requests
  has_many :requested_tickets, through: :requests, class_name: "Ticket", foreign_key: "ticket_id"

  has_many :friendships
  has_many :friends, through: :friendships

  has_many :conversations, :foreign_key => :sender_id
  has_many :messages, through: :conversations

end
