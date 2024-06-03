# API Template

## Description

This is an api to sign up new user

## Base URL

The base URL for all API requests is:

`https://your-api.com`

## Endpoints

### `POST /confirmation`

Returns object with userId and message.

### Response

Returns a JSON object with the following properties:

- `message`: A success message indicating that the user was created.
- `userId`: The ID of the newly created user.

### Example

Request:

```
POST /confirmation
```

Body:

```JSON
{
  "email":"test@gmail.com",
  "confirmationCode":"688371"
}
```

Response:

```json
{
  "message": "Account confirmed!",
  "userId": "665ae4ee9e26f6c714ac5279"
}

```

## Errors

This API uses the following error codes:

- `400 Bad Request`: The request was malformed or missing required parameters.
- `401 Unauthorized`: The API key provided was invalid or missing.
- `404 Not Found`: The requested resource was not found.
- `409 Conflict`: The user already exists.
- `500 Internal Server Error`: An unexpected error occurred on the server.