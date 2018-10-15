class Season < ApplicationRecord
  belongs_to :league, optional: true
  has_many :weeks
end
