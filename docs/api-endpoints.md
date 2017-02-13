# API Endpoints

## HTML API

### Root

- `GET /` - will load **Welcome component**

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Categories

- `GET /api/categories`

### Groups

- `GET /api/groups`
- `POST /api/groups`
- `GET /api/groups/:id`
- `PATCH /api/groups/:id`
- `DELETE /api/groups/:id`

### Huddles

- `GET /api/huddles`
- `POST /api/groups/:groupId/huddles`
- `GET /api/groups/:groupId/events/:id`
- `DELETE /api/groups/:groupId/events/:id`
- `PATCH /api/groups/:groupId/events/:id`
