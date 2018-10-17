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
  # Date.strptime(date).strptime('%A')
  date, time = date.split('T')[0], date.split('T')[1].split('+')[0]
  time = time.split(':')
  if time[0].to_i < 4
    time[0] = time[0].to_i + 20
    time = time.join(':').to_time.strftime('%l:%M %p').strip
    date_time = {
      time: time,
      date: Date.strptime(date) - 1
    }
  else
    time[0] = time[0].to_i - 4
    time = time.join(':').to_time.strftime('%l:%M %p').strip
    date_time = {
      time: time,
      date: Date.strptime(date)
    }
  end
  date_time
end
body_hash = JSON.parse(@resp.body)
  @season = Season.create(year: body_hash["year"])
  body_hash["weeks"].each do |week|
    @week = @season.weeks.build(week_number: @season.weeks.count + 1)
    @week.save
    week["games"].each do |game|
      home = Team.find_by(abrv: game["home"]["alias"])
      away = Team.find_by(abrv: game["away"]["alias"])
      date_time = date_parser(game["scheduled"])
      @matchup = @week.matchups.build(
        home_id: home.id,
        away_id: away.id,
        game_time: date_time[:time],
        game_date: date_time[:date]
      )
      @matchup.save
    end
    start_date = @week.matchups.sort_by{|matchup| matchup.game_date}.first.game_date - 2
    @week.update(start_date: start_date, end_date: start_date + 7)
    
    binding.pry
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
#   t.date "game_date"
# end

# sort by year
# then sory by julian date
