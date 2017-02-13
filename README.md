# Huddle
![alt text](https://github.com/naelkhann/Huddle/raw/master/public/huddle-logo.png "Huddle")

[Heroku Link](www.heroku.com)

[Trello Link](https://trello.com/b/VXwYw2DP/huddle)

## Minimum Viable Product
Huddle is a web-application inspired by Meetup. Huddle is a platform that promotes a community of users to plan, host, and attend events catered to their personal interests. Whether professional, informal, or just for fun, we believe that people should have a means to get to know each other if they are interested in similar things. Find your huddle and share your love of something with others who feel the same way. 

Huddle is built using a Ruby on Rails backend with React/Redux on the frontend. By the end of week 9 at AppAcademy, Huddle will satisfy the following features with a pleasant user experience (made with love for CSS styling and bug-free navigation) for all visitors to the platform:

- [ ] Hosting on Heroku
- [ ] New user account creation, existing user login, guest/demo login
- [ ] Categories (types/"genres" of Groups, fixed) 
- [ ] Groups (CRUD) 
- [ ] Huddles (events for a Group) (CRUD)
- [ ] Search by Categories or Group names

## Design Docs
* [View Wireframes](https://github.com/naelkhann/Huddle/tree/master/docs/wireframes)
* [React Components](https://github.com/naelkhann/Huddle/blob/master/docs/component-hierarchy.md)
* [API Endpoints](https://github.com/naelkhann/Huddle/blob/master/docs/api-endpoints.md)
* [Database Schema](https://github.com/naelkhann/Huddle/blob/master/docs/schema.md)
* [Sample State](https://github.com/naelkhann/Huddle/blob/master/docs/sample-state.md)

##Implementation Timeline
###Phase 1: Backend setup, authentication (2 Days)
**Objective**: Setup rails backend to sign up, log in, log out. Create foundation for database with some fixture data (Category, Group, Huddle)

###Phase 2: Landing page (1 Day)
**Objective**: Implement landing page wireframe that shows general data when not logged in - Categories, sample Huddles

###Phase 3: Groups (2 Days)
**Objective**: Implement create a Group, show individual Group page, with feature to join this Group.

###Phase 4: Huddles (2 Days)
**Objective**: Implement create a Huddle in Group, show individual Huddle, with feature to RSVP for Huddle.

###Phase 5: Categories Page (1 Day)
**Objective**: Implement Categories page to see Groups in a category when clicked from landing page.

###Phase 6: User page (1.5 Days)
**Objective**: Show users Groups that they join and the Huddles they RSVP'd to.

###Phase 7: Search (Until submission time)
**Objective**: Implement a search feature to look up Groups or Categories.

###Bonus Features (Will Try to Implement):
- [ ] Calendar In User Page
- [ ] Show location based "Huddles near you"
- [ ] Add tags to groups
- [ ] Recommend other groups to User based on Groups with similar tags


