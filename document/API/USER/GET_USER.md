# API Template

## Description

This is an api to sign up new user

## Base URL

The base URL for all API requests is:

`https://your-api.com`

## Endpoints

### `GET /user/:userId`

Returns object with userId and message.

### Response

Returns a JSON object with the following properties:

- `_id`: The ID of the user.
- `fullName`: The full name of the user.
- `email`: The email address of the user.

### Example

Request:

```
GET /user/:userId
```


Response:

```json
{
  "_id": "6654133c04434cb98b47f9c8",
  "fullName": "USER TEST",
  "email": "TEST@gmail.com"
}

```

## Errors

This API uses the following error codes:

- `400 Bad Request`: The request was malformed or missing required parameters.
- `401 Unauthorized`: The API key provided was invalid or missing.
- `404 Not Found`: The requested resource was not found.
- `409 Conflict`: The user already exists.
- `500 Internal Server Error`: An unexpected error occurred on the server.