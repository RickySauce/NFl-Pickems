class Week < ApplicationRecord
  belongs_to :season
  has_many :matchups
end
