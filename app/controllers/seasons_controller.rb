class SeasonsController < ApplicationController

  def create
    @resp = Faraday.get "#{api_root}games/2018/REG/schedule.json?" do |req|
     req.params['api_key'] = api_key
   end
   body_hash = JSON.parse(@resp.body)
   @season = Season.find_or_create_by(year: body_hash["year"])
  end

end


# create_table "seasons", force: :cascade do |t|
#   t.integer "current_week"
#   t.integer "year"
#   t.boolean "locked", default: false
#   t.datetime "created_at", null: false
#   t.datetime "updated_at", null: false
# end
