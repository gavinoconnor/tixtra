class User < ApplicationRecord
  has_secure_password
  validates :username, :email, uniqueness: { case_sensitive: false }
  validates :username, :email, presence: true

  has_many :tickets
  has_many :events, through: :tickets

  has_many :friendships
  has_many :friends, through: :friendships

  has_many :conversations, :foreign_key => :sender_id
  has_many :messages, through: :conversations

end
