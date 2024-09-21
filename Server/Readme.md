# Project Title

This project is a Node.js application that provides authentication and student management functionalities using Express.js.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/yourproject.git
    ```
2. Navigate to the project directory:
    ```sh
    cd yourproject
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the server:
    ```sh
    npm start
    ```
2. The server will be running on `http://localhost:3000`.

## API Endpoints

### Authentication Routes

- **POST /signup**
    - Description: Create a new user.
    - Request Body: 
      ```json
      {
        "username": "string",
        "password": "string"
      }
      ```
    - Response: 
      ```json
      {
        "message": "User created successfully",
        "user": { ... }
      }
      ```

- **POST /login**
    - Description: Login a user.
    - Request Body: 
      ```json
      {
        "username": "string",
        "password": "string"
      }
      ```
    - Response: 
      ```json
      {
        "message": "User logged in successfully",
        "user": { ... }
      }
      ```

- **GET /checkUser**
    - Description: Check if the user is authenticated.
    - Response: 
      ```json
      {
        "message": "User is authenticated",
        "user": { ... }
      }
      ```

- **GET /logout**
    - Description: Logout the user.
    - Response: 
      ```json
      {
        "message": "User logged out successfully"
      }
      ```

### Student Routes

- **POST /students**
    - Description: Create a new student.
    - Request Body: 
      ```json
      {
        "name": "string",
        "image": "string",
        "cgpa": "number",
        "course": "string",
        "year": "number",
        "rank": "number",
        "examYear": "number"
      }
      ```
    - Response: 
      ```json
      {
        "message": "Student created successfully",
        "newStudent": { ... }
      }
      ```

- **GET /students**
    - Description: Retrieve all students.
    - Query Parameters: `year`, `examYear`, `sort`, `course`
    - Response: 
      ```json
      [
        { ... },
        { ... },
        ...
      ]
      ```

- **GET /students/:studentId**
    - Description: Retrieve a single student by ID.
    - Response: 
      ```json
      {
        ...
      }
      ```

- **PUT /students/:studentId**
    - Description: Update student details by ID.
    - Request Body: 
      ```json
      {
        "name": "string",
        "image": "string",
        "cgpa": "number",
        "course": "string",
        "year": "number",
        "rank": "number",
        "examYear": "number"
      }
      ```
    - Response: 
      ```json
      {
        "message": "Student updated successfully",
        "student": { ... }
      }
      ```

- **DELETE /students/:studentId**
    - Description: Delete a student by ID.
    - Response: 
      ```json
      {
        "message": "Student deleted successfully"
      }
      ```

## Folder Structure

The folder structure of the project is as follows:


