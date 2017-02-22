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

ActiveRecord::Schema.define(version: 20170222011825) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "thumb"
    t.string   "cover"
    t.index ["name"], name: "index_categories_on_name", unique: true, using: :btree
  end

  create_table "categories_groups", force: :cascade do |t|
    t.integer  "group_id"
    t.integer  "category_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["category_id"], name: "index_categories_groups_on_category_id", using: :btree
    t.index ["group_id"], name: "index_categories_groups_on_group_id", using: :btree
  end

  create_table "groups", force: :cascade do |t|
    t.string   "name",         null: false
    t.text     "description",  null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.integer  "moderator_id"
    t.index ["name"], name: "index_groups_on_name", unique: true, using: :btree
  end

  create_table "huddles", force: :cascade do |t|
    t.string   "title",        null: false
    t.integer  "group_id",     null: false
    t.text     "description",  null: false
    t.datetime "date",         null: false
    t.string   "location",     null: false
    t.date     "founded_on",   null: false
    t.integer  "moderator_id", null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.index ["group_id"], name: "index_huddles_on_group_id", using: :btree
    t.index ["moderator_id"], name: "index_huddles_on_moderator_id", using: :btree
  end

  create_table "huddles_users", force: :cascade do |t|
    t.integer  "huddle_id",  null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["huddle_id"], name: "index_huddles_users_on_huddle_id", using: :btree
    t.index ["user_id"], name: "index_huddles_users_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",           null: false
    t.string   "password_digest",    null: false
    t.string   "session_token",      null: false
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.string   "email"
    t.string   "name"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
