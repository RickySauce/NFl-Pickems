class UserPick < ApplicationRecord
  belongs_to :user
  belongs_to :matchup
  belongs_to :team 
end
