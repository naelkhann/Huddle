# Huddle
![alt text](https://github.com/naelkhann/Huddle/raw/master/public/huddle-logo.png "Huddle")

[Live Link](https://www.huddle-application.com "Huddle Link")

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

```ruby
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

## Feature Breakdown
### Authentication
Huddle utilizes the `BCrypt` Ruby gem (a simple OpenBSD BCrypt) to provide a secure authentication system, hashing all passwords and creating a session token in browser cookies that holds log in information for a currently logged in user throughout the application until a log out.

![Huddle Login Example](https://github.com/naelkhann/Huddle/raw/master/public/huddle_login.gif "Huddle Login")

### Search Groups
Huddle utilizes a filter parameter when hitting the API's Groups controller `index` action. The filter parameter automatically returns a list of applicable Groups using a SQL WHERE selector with ActiveRecord - off loading search to the backend.

```ruby
def index
  search = params[:filter]
  if search
    @groups = Group.where("LOWER(name) LIKE ?", "#{search.downcase}%")
  else
    @groups = Group.all
  end
end
```

![Huddle Search Example](https://github.com/naelkhann/Huddle/raw/master/public/huddle_search.gif "Huddle Search")


### Huddle Views
Huddle's presentation layer incorporates Sass mixins for a uniform and consistent visual look throughout the site. Cards are used to display Groups & Categories, and Group pages offer a familiar layout, allowing you to view archived events as well as upcoming events. This creates a community and following around a Group and its Huddles.

![Huddle View Example](https://github.com/naelkhann/Huddle/raw/master/public/huddle_view.gif "Huddle View")

Huddle takes advantage of Reacts component system to do lightning fast renders of information from the Redux store. Here's an example of a piece of the Group component, that handles the task of switching between Upcoming and Past (Archived) huddles on the front end. The JSON data initialized through the API calls is organized to parse Upcoming and Past huddles from the current date. Then, React's component system creates an array of <div> HTML tags dynamically, using the information that passes down to the component `props` (properties). This generates the Huddles that belong to the Group.

```javascript
renderHuddles(){
  const activeLi = this.state.active_li;
  const huddles = this.props.huddles;
  const upcomingHuddles = this.props.upcoming;
  const pastHuddles = this.props.past;
  let huddlesContainers;
  if (activeLi === "Upcoming") {
    huddlesContainers = upcomingHuddles.map((huddle, idx) => (
      <div key={idx} className="group-huddle-container">
        <h2 className="huddle-title">{huddle.title}</h2>
        <div className="group-huddle-detail-container">
          <div className="group-huddle-detail-left">
            <h3 className="huddle-location">{huddle.location}</h3>
            <h3 className="huddle-description">{huddle.description}</h3>
          </div>
          <div className="group-huddle-detail-right">
            <h3 className="huddle-date">{huddle.day}</h3>
            <h3 className="huddle-time">{huddle.time}</h3>
            <h3 className="huddle-time">{`${this.getDaysTilHuddle(huddle.date)} days left`}</h3>
            <Link to={`/groups/${this.props.group.id}/huddles/${huddle.id}`}>RSVP</Link>
          </div>
        </div>
      </div>
));
```

### Join a Group
Joining a Group is a fundamental task of the application. Join Groups that interest *you*. Essentially, a click on the 'Join Us' button sends a POST action to a custom API endpoint that creates a join table relationship between Groups and the currently logged in user when joining a group. This allows you to RSVP to Huddles, and will allow you to communicate with Group members.

![Huddle Join Example](https://github.com/naelkhann/Huddle/raw/master/public/huddle_join.gif "Huddle Join")

#### There are several other features within Huddle. Check them out! Find a Huddle near you today.
#### Made with <3 by Nael Khan

## Future Updates
**Currently In Progress** : User Profiles
- Messaging
- Google Calendar Synchronization
