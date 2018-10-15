# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Team.create([
  {
    name: "Cynthias",
    city: "The City",
    abrv: "TCC"
  },
  {
    name: "Sauces",
    city: "Saucington",
    abrv: "SSS"
  },
  {
    name: "Douglas'",
    city: "Binghampton",
    abrv: "BDS"
  },
  {
    name: "Religions",
    city: "Big Daddy",
    abrv: "BDR"
  },
  {
    name: "Dobbis'",
    city: "Rick",
    abrv: "RDS"
  },
  {
    name: "Twains",
    city: "Shania",
    abrv: "STN"
  },
  {
    name: "Numbas",
    city: "Wrong",
    abrv: "WNS"
  },
  {
    name: "Suhs",
    city: "Uh",
    abrv: "USH"
  },
  {
    name: "Pokeys",
    city: "Hokey",
    abrv: "HPY"
  },
  {
    name: "Stops",
    city: "Make It",
    abrv: "MIS"
  }
  ])

  Season.create({year: 2018})

  Week.create([
    {
      start_date: "03/09/2018",
      end_date: "10/09/2018",
      season_id: 1
    },
    {
      start_date: "10/09/2018",
      end_date: "17/09/2018",
      season_id: 1
    },
    {
      start_date: "17/09/2018",
      end_date: "24/09/2018",
      season_id: 1
    }
    ])

    Matchup.create([
      {
        week_id: 1,
        home_id: 1,
        away_id: 2
      },
      {
        week_id: 1,
        home_id: 3,
        away_id: 4
      },
      {
        week_id: 2,
        home_id: 5,
        away_id: 6
      },
      {
        week_id: 2,
        home_id: 7,
        away_id: 8
      },
      {
        week_id: 3,
        home_id: 9,
        away_id: 10
      },
      {
        week_id: 3,
        home_id: 2,
        away_id: 5
      }
      ])
