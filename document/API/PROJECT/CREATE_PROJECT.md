# API Template

## Description

This is an api to sign up new user

## Base URL

The base URL for all API requests is:

`https://your-api.com`

## Endpoints

### `POST /project`

Returns object with userId and message.

### request body

Request body must be a form-data with the following properties:

- `name`: the name of the project.
- `category`: the category of the project.
- `dueDate`: the due date of the project in ISO format.
- `budget`: the budget of the project.
- `image`: the image of the project.
- `members`: the list of user IDs to assign to the project.

### response return

Returns object with userId and message.

- `message`: the message of the response.
- `projectId`: the ID of the created project.



### Example

Request:

```form-data
name=project1
category=category1
dueDate=2022-01-01
budget=1000
image=image1
members=userId1
```

```
POST /project
```

Response:

```json
{
  "message": "Project created!",
  "projectId": "66596596b2ec2018d9cd25d8"
}

```

## Errors

This API uses the following error codes:

- `400 Bad Request`: The request was malformed or missing required parameters.
- `401 Unauthorized`: The API key provided was invalid or missing.
- `404 Not Found`: The requested resource was not found.
- `409 Conflict`: The user already exists.
- `500 Internal Server Error`: An unexpected error occurred on the server.