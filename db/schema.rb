# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_10_16_115207) do

  create_table "league_seasons", force: :cascade do |t|
    t.integer "league_id"
    t.integer "season_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "leagues", force: :cascade do |t|
    t.string "name"
    t.integer "current_season"
    t.integer "owner_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "matchups", force: :cascade do |t|
    t.integer "week_id"
    t.integer "home_id"
    t.integer "away_id"
    t.integer "winning_id"
    t.datetime "game_date_time"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "seasons", force: :cascade do |t|
    t.integer "current_week"
    t.integer "year"
    t.boolean "locked", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "teams", force: :cascade do |t|
    t.string "name"
    t.string "city"
    t.string "abrv"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_leagues", force: :cascade do |t|
    t.integer "user_id"
    t.integer "league_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_picks", force: :cascade do |t|
    t.integer "user_id"
    t.integer "team_id"
    t.integer "matchup_id"
    t.integer "league_season"
    t.boolean "correct"
    t.boolean "locked", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.boolean "admin", default: false
    t.string "time_zone", default: "Eastern Time (US & Canada)"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "weeks", force: :cascade do |t|
    t.date "start_date"
    t.date "end_date"
    t.integer "season_id"
    t.boolean "locked", default: false
    t.integer "week_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
