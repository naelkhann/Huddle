# API Endpoints

## HTML API

### Root

- `GET /` - will load **Welcome component**

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`
- `GET /api/user/:userId/huddles`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Categories

- `GET /api/categories`
- `GET /api/categories/:id`

### Groups

- `GET /api/groups`
- `POST /api/groups`
- `GET /api/groups/:id`
- `PATCH /api/groups/:id`
- `DELETE /api/groups`

### Huddles

- `GET /api/huddles`
- `POST /api/huddles`
- `GET /api/groups/:groupId/huddles`
- `GET /api/groups/:groupId/huddles/:id`
- `DELETE /api/huddles`
- `PATCH /api/huddles/:id`
