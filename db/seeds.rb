# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


api_key = 'qgwp56audu67tqeyupv66ymc'
api_root = 'https://api.sportradar.us/nfl-ot2/'
current_year = Date.today.year

# @resp = Faraday.get "#{api_root}seasontd/#{current_year}/standings.json?" do |req|
#  req.params['api_key'] = api_key
# end
#
# if @resp.body.blank?
#   @resp = Faraday.get "#{api_root}seasontd/#{current_year - 1}/standings.json?" do |req|
#    req.params['api_key'] = api_key
#   end
# end
#
# body_hash = JSON.parse(@resp.body)
#
# body_hash["conferences"].each do |conference|
#   conference["divisions"].each do |division|
#     division["teams"].each do |team|
#       Team.create(name: team["name"], city: team["market"], abrv: team["alias"])
#     end
#   end
# end

  @resp = Faraday.get "#{api_root}games/2018/REG/schedule.json?" do |req|
   req.params['api_key'] = api_key
  end
def date_parser(date)
  binding.pry
end
body_hash = JSON.parse(@resp.body)
  @season = Season.create(year: body_hash["year"])
  body_hash["weeks"].each do |week|
    @week = @season.weeks.build(week_number: @season.weeks.count + 1).save
    week["games"].each do |game|
      home = Team.find_by(abrv: game["home"]["alias"])
      away = Team.find_by(abrv: game["away"]["alias"])
      @matchup = @week.matchups.build()
    end
  end


# create_table "weeks", force: :cascade do |t|
#   t.date "start_date"
#   t.date "end_date"
#   t.integer "season_id"
#   t.boolean "locked", default: false
#   t.datetime "created_at", null: false
#   t.datetime "updated_at", null: false
# end

# create_table "matchups", force: :cascade do |t|
#   t.integer "week_id"
#   t.integer "home_id"
#   t.integer "away_id"
#   t.integer "winning_id"
#   t.time "game_time"
#   t.datetime "created_at", null: false
#   t.datetime "updated_at", null: false
# end

# sort by year
# then sory by julian date
