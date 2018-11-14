class Api::LeaguesController < ApplicationController

  def create
    @league = League.new(league_params)
    if @league.save
      UserLeague.create(league_id: @league.id, user_id: @league.owner_id)
      params["league"]["inputs"].each do |hash|
        @user = User.find_by(username: hash.values.first)
        UserLeague.create(league_id: @league.id, user_id: @user.id) if @user
      end
      render :json => @league, status: 201
    else
      render status: 422
    end
  end

  def show
    @league = League.find(params[:id])
    render json: @league
  end




  def league_params
     params.require("league").permit(
       :owner_id,
       :name
     )
   end

end
