# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20150616141911) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "users", force: :cascade do |t|
    t.string   "login"
    t.string   "git_id"
    t.string   "avatar_url"
    t.string   "api_url"
    t.string   "github_url"
    t.string   "followers_url"
    t.string   "following_url"
    t.string   "gists_url"
    t.string   "starred_url"
    t.string   "subscriptions_url"
    t.string   "organizations_url"
    t.string   "repos_url"
    t.string   "events_url"
    t.string   "received_events_url"
    t.string   "email"
    t.string   "token"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.json     "github_received_events", default: []
    t.json     "github_events",          default: []
  end

end
