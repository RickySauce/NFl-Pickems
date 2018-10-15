class LeaguesController < ApplicationController

  def create
  end


  def league_params
     params.require("league").permit(
       :owner_id,
       :current_season,
       :name
     )
   end

end
