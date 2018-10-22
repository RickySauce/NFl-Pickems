class SeasonsController < ApplicationController

  def create
    current_year = Date.today.year
    @season = Season.find_by(year: current_year)
    @league_season = LeagueSeason.find_league_season(params["league_id"], @season.id)
    if @season.blank?
      @resp = Faraday.get "#{api_root}games/2018/REG/schedule.json?" do |req|
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
      @league_season = LeagueSeason.create(league_id: params["league_id"], season_id: @season.id) if @league_season.blank?
      render :json => @league_season, include: [
        'season.current_week.matchups', 'season.current_week.matchups.home_team', 'season.current_week.matchups.away_team',
        'season.weeks', 'season.weeks.matchups', 'season.weeks.matchups.home_team', 'season.weeks.matchups.away_team',
        'season'
        ], status: 201
    else
      @league_season = LeagueSeason.create(league_id: params["league_id"], season_id: @season.id) if @league_season.blank?
      render :json => @league_season, include:[
        'season.current_week.matchups', 'season.current_week.matchups.home_team', 'season.current_week.matchups.away_team',
        'season.weeks', 'season.weeks.matchups', 'season.weeks.matchups.home_team', 'season.weeks.matchups.away_team',
        'season'
        ], status: 200
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
