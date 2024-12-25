# Uber Clone Backend

## API Endpoints

### POST /users/register

#### Description
This endpoint is used to register a new user.

#### Request Body
The request body should be a JSON object containing the following fields:

- `fullname`: An object containing:
  - `firstname` (string, required): The first name of the user. Must be at least 3 characters long.
  - `lastname` (string, optional): The last name of the user. Must be at least 3 characters long if provided.
- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 6 characters long.

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Response
The response will be a JSON object containing the following fields:

- `id` (string): The unique identifier of the newly registered user.
- `fullname` (object): An object containing:
  - `firstname` (string): The first name of the user.
  - `lastname` (string): The last name of the user.
- `email` (string): The email address of the user.
- `createdAt` (string): The timestamp when the user was created.

Example:
```json
{
  "id": "1234567890abcdef",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "createdAt": "2023-10-05T14:48:00.000Z"
}
```