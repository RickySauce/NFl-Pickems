class SeasonsController < ApplicationController

  def create
    current_year = Date.today.year
    @league = League.find_by(id: params["league_id"])
    @season = Season.find_by(year: current_year)
    if @season.blank?
      @resp = Faraday.get "#{api_root}games/#{current_year}/REG/schedule.json?" do |req|
       req.params['api_key'] = api_key
      end
      body_hash = JSON.parse(@resp.body)
        @season = Season.create(year: body_hash["year"])
        body_hash["weeks"].each do |week|
          @week = @season.weeks.build(week_number: @season.weeks.count + 1)
          @week.save
          week["games"].each do |game|
            home = Team.find_by(abrv: game["home"]["alias"])
            away = Team.find_by(abrv: game["away"]["alias"])
            @matchup = @week.matchups.build(
              home_id: home.id,
              away_id: away.id,
              game_date_time: game["scheduled"]
            )
            @matchup.save
          end
          start_date_time = @week.matchups.sort_by{|matchup| matchup.game_date_time}.first.game_date_time.prev_day(2)
          @week.update(start_date_time: start_date_time, end_date_time: start_date_time.next_day(7))
          @season.update(current_week_id: @season.weeks.first.id)
        end
      end
      if LeagueSeason.find_league_season(@league.id, @season.id).nil?
        @league_season = LeagueSeason.create(league_id: @league.id, season_id: @season.id)
      else
        @league_season = LeagueSeason.find_league_season(@league.id, @season.id)
      end
      render :json => @league_season, status: 201
  end

  def show
    @season = Season.find_by(year: params["year"])
    if !@season.blank?
      render status: 200
    else
      render status: 404
    end
  end

end




# create_table "seasons", force: :cascade do |t|
#   t.integer "current_week"
#   t.integer "year"
#   t.boolean "locked", default: false
#   t.datetime "created_at", null: false
#   t.datetime "updated_at", null: false
# end
