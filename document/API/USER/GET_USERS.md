# API Template

## Description

This is an api to sign up new user

## Base URL

The base URL for all API requests is:

`https://your-api.com`

## Endpoints

### `GET /users`

Returns object with userId and message.

### Response

Returns a JSON object with the following properties:

``` javascript
[{
    "_id": "your-user-id",
    "fullName": "USER TEST",
    "email": "TEST@gmail.com"
},
...
]
```
### Example

Request:

```
GET /users
```


Response:

```json
[
  {
    "_id": "6653eed87730a8c6724e53af",
    "fullName": "Your Name",
    "email": "test@gmail.com"
  },
  {
    "_id": "6654133c04434cb98b47f9c8",
    "fullName": "Your Name1",
    "email": "test1@gmail.com"
  }
]

```

## Errors

This API uses the following error codes:

- `400 Bad Request`: The request was malformed or missing required parameters.
- `401 Unauthorized`: The API key provided was invalid or missing.
- `404 Not Found`: The requested resource was not found.
- `409 Conflict`: The user already exists.
- `500 Internal Server Error`: An unexpected error occurred on the server.