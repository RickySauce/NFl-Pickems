class User < ApplicationRecord
  has_secure_password
  has_many: :user_leagues
  has_many: :leagues, through: :user_leagues
  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :password, confirmation: true
  validates :password_confirmation, presence: true
end
