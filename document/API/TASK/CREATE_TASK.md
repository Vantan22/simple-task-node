# API Template

## Description

This is an api to sign up new user

## Base URL

The base URL for all API requests is:

`https://your-api.com`

## Endpoints

### `POST /task`

Returns object with userId and message.

### request body

Request body must be a form-data with the following properties:

- `name`: the name of the task.
- `projectId`: the ID of the project.
- `sectionId`: the ID of the section.
- `assignedTo`: the IDs of the users assigned to the task.
- `dueDate`: the due date of the task.
- `description`: the description of the task.
- `tags`: the tags of the task.
- `checklist`: the checklist of the task.
- `attachments`: the attachments of the task.

### response return

Returns object with userId and message.

- `message`: the message of the response.
- `taskId`: the ID of the created task.


### Example

Request:

```form-data
name=My Task
projectId=66596596b2ec2018d9cd25d8
sectionId=66596596b2ec2018d9cd25d8
assignedTo=66596596b2ec2018d9cd25d8
dueDate=2022-12-31
description=This is my task
tags=[tag1, tag2]
checklist=[item1, item2]
attachments=[file1, file2]
```

```
POST /task
```

Response:

```json
{
  "message": "task created!",
  "taskId": "66596596b2ec2018d9cd25d8"
}

```

## Errors

This API uses the following error codes:

- `400 Bad Request`: The request was malformed or missing required parameters.
- `401 Unauthorized`: The API key provided was invalid or missing.
- `404 Not Found`: The requested resource was not found.
- `409 Conflict`: The user already exists.
- `500 Internal Server Error`: An unexpected error occurred on the server.