class Api::TeamsController < ApplicationController

  def show
    @teams = Team.all
    render :json => @teams, status: 201
  end

end
