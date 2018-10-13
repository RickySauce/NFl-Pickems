class Season < ApplicationRecord
  belongs_to :league
  has_many :weeks 
end
