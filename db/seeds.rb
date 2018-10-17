# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


api_key = 'qgwp56audu67tqeyupv66ymc'
api_root = 'https://api.sportradar.us/nfl-ot2/'

@resp = Faraday.get "#{api_root}seasontd/2018/standings.json?" do |req|
 req.params['api_key'] = api_key
end
body_hash = JSON.parse(@resp.body)

body_hash["conferences"].each do |conference|
  conference["divisions"].each do |division|
    division["teams"].each do |team|
      Team.create(name: team["name"], city: team["market"], abrv: team["alias"])
    end
  end
end
