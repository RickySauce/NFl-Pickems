class Matchup < ApplicationRecord
  belongs_to :week
  has_many :user_picks
  belongs_to :home_team, :class_name => 'Team', :foreign_key => 'home_id'
  belongs_to :away_team, :class_name => 'Team', :foreign_key => 'away_id'
end
