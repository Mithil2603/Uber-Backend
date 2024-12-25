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
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Response
The response will be a JSON object containing the following fields:

- `token` (string): The JWT token for the authenticated user.
- `user` (object): An object containing the user's details:
  - `_id` (string): The user's ID.
  - `fullname` (object): An object containing:
    - `firstname` (string): The first name of the user.
    - `lastname` (string): The last name of the user.
  - `email` (string): The email address of the user.

Example:
```json
{
  "token": "your_jwt_token",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### Error Response
The error response will be a JSON object containing the following fields:

- `errors` (array): An array of error objects, each containing:
  - `msg` (string): The error message.
  - `param` (string): The parameter that caused the error.
  - `location` (string): The location of the parameter.

Example:
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

#### Invalid Email or Password Response
The response will be a JSON object containing the following field:

- `message` (string): The error message.

Example:
```json
{
  "message": "Invalid email or password"
}
```