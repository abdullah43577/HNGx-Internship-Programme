# API Documentation

This document provides detailed information about the usage, endpoints, and setup of the API.

## Endpoints

### Test Endpoint

- **Description**: A simple test endpoint to check if the API is running.
- **URL**: `/`
- **HTTP Method**: GET
- **Request**: None
- **Response**:
  - **Status Code**: 200 OK
  - **Body**: `{"message": "test successful"}`

### Create User

- **Description**: Create a new user.
- **URL**: `/api`
- **HTTP Method**: POST
- **Request**:
  - **Body**:
    - `name` (string, required): The name of the user to be created.
- **Response**:
  - **Status Code**: 201 Created
  - **Body**: Example
    ```json
    {
      "message": "user created",
      "user": {
        "_id": "5f00f1c64f243d22ac8659ab",
        "name": "John Doe",
        "__v": 0
      }
    }
    ```

### Get User Details

- **Description**: Get user details by ID or name.
- **URL**: `/api`
- **HTTP Method**: GET
- **Request**:
  - **Query Parameters**:
    - `query` (string, required): User ID or name to search for.
- **Response**:
  - **Status Code**: 200 OK
  - **Body**: Example
    ```json
    {
      "message": "user found",
      "user": {
        "_id": "5f00f1c64f243d22ac8659ab",
        "name": "John Doe",
        "__v": 0
      }
    }
    ```

### Update User

- **Description**: Update user details by ID or name.
- **URL**: `/api`
- **HTTP Method**: PUT
- **Request**:
  - **Query Parameters**:
    - `query` (string, required): User ID or name to update.
  - **Body**:
    - `name` (string, required): The updated name for the user.
- **Response**:
  - **Status Code**: 200 OK
  - **Body**: Example
    ```json
    {
      "message": "user updated",
      "user": {
        "_id": "5f00f1c64f243d22ac8659ab",
        "name": "New Name",
        "__v": 0
      }
    }
    ```

### Delete User

- **Description**: Delete a user by ID or name.
- **URL**: `/api`
- **HTTP Method**: DELETE
- **Request**:
  - **Query Parameters**:
    - `query` (string, required): User ID or name to delete.
- **Response**:
  - **Status Code**: 200 OK
  - **Body**:
    ```json
    {
      "message": "user deleted"
    }
    ```

## Sample Usage

Here are some examples of how to use the API:

### Create User (Example)

```bash
curl -X POST -H "Content-Type: application/json" -d '{"name":"John Doe"}' https://hngx-stage2-edny.onrender.com/api
```

## Get User Details

`curl https://hngx-stage2-edny.onrender.com/api?query=John%20Doe`

## Update User

```
curl -X PUT -H "Content-Type: application/json" -d '{"name":"New Name"}' https://hngx-stage2-edny.onrender.com/api?query=John%20Doe
```

## Delete User

`curl -X DELETE https://hngx-stage2-edny.onrender.com/api?query=John%20Doe`

## Known Limitations

- The API assumes that the `name` parameter is a string and does not perform additional data type validation.

- It does not handle user authentication or authorization.

## Local Setup and Deployment

To set up and deploy the API locally or on a server, follow these steps:

1. Clone the respository
   `git clone https://github.com/your-repo/your-api.git`

2.Navigate to the project directory
`cd your-api`

3. Install dependencies
   `npm install`

4. Start the server
   `npm run dev`

   The API will be running locally at `http://localhost:8080`.

   For production deployment, consider using a service like AWS, Heroku, or others, and configure the necessary environment variables.

   ## UML Diagram

   ![UML Diagram](./UML.png)
