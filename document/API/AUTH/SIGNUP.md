# API Template

## Description

This is an api to sign up new user

## Base URL

The base URL for all API requests is:

`https://your-api.com`

## Endpoints

### `POST /signup`

Returns object with userId and message.

### Response

Returns a JSON object with the following properties:

- `message`: A success message indicating that the user was created.
- `confirmationCode`: The confirmation code sent to the user's email.

### Example

Request:

```
POST /signup
```

Body:

```JSON
{
  "fullName": "Your Name",
  "email":"test@gmail.com",
  "password":"123456789"
}
```

Response:

```json
{
  "message": "Confirmation code sent.",
  "confirmationCode": "688371"
}

```

## Errors

This API uses the following error codes:

- `400 Bad Request`: The request was malformed or missing required parameters.
- `401 Unauthorized`: The API key provided was invalid or missing.
- `404 Not Found`: The requested resource was not found.
- `409 Conflict`: The user already exists.
- `500 Internal Server Error`: An unexpected error occurred on the server.