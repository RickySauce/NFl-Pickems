class MatchupSerializer < ActiveModel::Serializer
  attributes :id, :winning_id, :game_date_time
  belongs_to :home_team, :away_team

end
# .iso8601 for time conversion


create_table "matchups", force: :cascade do |t|
  t.integer "week_id"
  t.integer "home_id"
  t.integer "away_id"
  t.integer "winning_id"
  t.datetime "game_date_time"
  t.datetime "created_at", null: false
  t.datetime "updated_at", null: false
end
