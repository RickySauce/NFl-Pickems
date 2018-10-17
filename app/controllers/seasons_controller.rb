class SeasonsController < ApplicationController

  def create
    binding.pry
    @resp = Faraday.get "#{api_root}games/2018/REG/schedule.json?" do |req|
     req.params['api_key'] = api_key
   end
   body_hash = JSON.parse(@resp.body)
   binding.pry
  end

end
