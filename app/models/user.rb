class User < ApplicationRecord
  has_secure_password
  has_many :user_leagues
  has_many :leagues, through: :user_leagues
  has_many :user_picks
  validates :username, :presence => {:message => "Field must be filled in"}, :uniqueness => {:message => "Username already in use."}
  validates :email, :presence => {:message => "Field must be filled in"}, :uniqueness => {:message => "Email Address already in use."}
  validates :password, confirmation: true, :length => { :in => 6..20 }

end
