# API Template

## Description

This is an api to sign up new user

## Base URL

The base URL for all API requests is:

`https://your-api.com`

## Endpoints

### `POST /login`

Returns object with userId and message.

### Response

Returns a JSON object with the following properties:

- `token`: The authentication token for the user.
- `userId`: The ID of the newly created user.

### Example

Request:

```
POST /login
```

Body:

```JSON
{
  "email":"test@gmail.com",
  "password":"123456789"
}
```

Response:

```json
{
  "token": "eyJhbGciOiJIU123sInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjU313DADASMzBhOGM2NzI0ZTUadsadLCJpYXQiOjE3.MTY3Nzg0MDksImV4cCI6MTcxNjgyOTE5OX0.xFDWcFkVP7RYddvNLshloe7ddasdMz9KKKpBQ1PZo",
  "userId": "6653eed87730a8c6724e53af"
}

```

## Errors

This API uses the following error codes:

- `400 Bad Request`: The request was malformed or missing required parameters.
- `401 Unauthorized`: The API key provided was invalid or missing.
- `404 Not Found`: The requested resource was not found.
- `409 Conflict`: The user already exists.
- `500 Internal Server Error`: An unexpected error occurred on the server.