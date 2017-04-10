# Huddle
![alt text](https://github.com/naelkhann/Huddle/raw/master/public/huddle-logo.png "Huddle")

Huddle is a web-application inspired by Meetup. Huddle is a platform that promotes a community of users to plan, host, and attend events catered to their personal interests. Whether professional, informal, or just for fun, we believe that people should have a means to get to know each other if they are interested in similar things. Find your huddle and share your love of something with others who feel the same way.

## Features
- Create an account
- View groups & events/Huddles
- Create groups & events
- Search for groups & events
- RSVP for events

## Implementation
### Backend
Huddle utilizes a PostgresSQL backend in combination with a custom Rails API. Using Rails' controller structure, calls to the API routes deliver structure JSON responses after querying data from the PostgresSQL database.

### Database Schema
Huddle's database is designed with join table relationships in mind. Then, leveraging ActiveRecord, powerful associations create a complex weave of relations between the different information types in the database.
*Categories* have many *Groups*.
*Groups* have several *Members(Users)*.
*Groups* have several *Huddles*.
*Users* RSVP to several *Huddles*.

```
create_table "groups", force: :cascade do |t|
  t.string   "name",                                         null: false
  t.text     "description",                                  null: false
  t.datetime "created_at",                                   null: false
  t.datetime "updated_at",                                   null: false
  t.integer  "moderator_id"
  t.string   "image",        default: "group.png"
  t.string   "location",     default: "New York, NY",        null: false
  t.datetime "founded_on",   default: '2017-03-26 05:18:03', null: false
  t.index ["name"], name: "index_groups_on_name", unique: true, using: :btree
end

create_table "groups_users", force: :cascade do |t|
  t.integer "group_id", null: false
  t.integer "user_id",  null: false
  t.index ["group_id"], name: "index_groups_users_on_group_id", using: :btree
  t.index ["user_id"], name: "index_groups_users_on_user_id", using: :btree
end
```

### Frontend
Huddle's API provides data to the frontend, which is a React + Redux implementation handling several different slices of "state" throughout different components in the application. State is updated through async API calls that are dispatched by a single source of truth - the Redux store. The store hold all slices of state, and state management happens within React component renders.

##Feature Breakdown
