# My Flat Earth Backend

This repository contains the backend code for the [My Flat Earth](https://github.com/yaromatv/my-flat-earth-frontend) project.

## Technologies Used

-   Node.js
-   Express.js
-   MongoDB with Mongoose
-   Morgan for logging
-   Joi for validation
-   Other dependencies listed in package.json

## Getting Started

-   Clone this repository.
-   Install dependencies using npm install.
-   Set up your MongoDB connection by providing the DB_HOST in a .env file.
-   Start the server using npm start.

## Available Scripts

-   npm start: Start the server in production mode.
-   npm run dev: Start the server in development mode using nodemon.

## API Endpoints

-   GET /api/maps: Get all maps.
-   POST /api/maps: Add a new map.
-   DELETE /api/maps: Delete all maps.

## Error Handling

Custom error handling middleware is implemented to handle various errors.

## Data Validation

Request body validation is done using Joi schemas.

## Middleware

Middleware functions are used for handling empty request bodies and validating request bodies.

## Controllers

Controllers are responsible for handling business logic for different routes.

## Schemas

Mongoose schema is defined for the map data.

## Hooks

Hooks are used for handling save errors and running validators before updating.

## Additional Notes

Ensure proper environment variables are set for the application to run smoothly.
Feel free to explore the codebase for more details on the implementation.
This README provides a brief overview of the backend project structure and functionality. For detailed information, refer to the codebase.
