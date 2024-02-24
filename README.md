# Social Media WebApp DB backend

This is a social media web application built with MongoDB, Mongoose, Express, and Moment.js for date formatting.

## Description

This application allows users to create, read, update, and delete social media posts. It also provides user authentication and comment functionality.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Link to WalkThrough Video](#link-to-walkthrough-video)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation

To set up the Social Media WebApp on your local machine, follow these steps:

1. Clone the project repository to your local storage:

```
git clone
```

2. Open your terminal and navigate to the cloned project directory:

```
cd social-network-mdb
```

3. Install the required dependencies:

```
npm install
```

4. Set up the MongoDB database:

5. Start the application:

```
npm start
```

6. Access the application in your web browser at http://localhost:3001 for local environment.

## Usage

This application provides a RESTful API that can be interacted with using API testing tools such as Insomnia or Postman. Here are some examples of how to use the API:

1. **Get All Users:**

   Send a GET request to `http://localhost:3001/api/users`. This will return a JSON response with a list of all users.

2. **Get a Specific User:**

   Send a GET request to `http://localhost:3001/api/users/:userId`, replacing `:userId` with the ID of the user you want to retrieve. This will return a JSON response with the details of the specified user.

3. **Create a New User:**

   Send a POST request to `http://localhost:3001/api/users` with a JSON body containing the details of the new user. For example:

   ```
   {
     "username": "newuser",
     "email": "newuser@example.com"
   }
   ```

4. **Get all Thoughts:**
   Send a GET request to http://localhost:3001/api/thoughts. This will return a JSON response with a list of all thoughts.
5. **Get a Specific Thought:**

   Send a GET request to http://localhost:3001/api/thoughts/:thoughtId, replacing :thoughtId with the ID of the thought you want to retrieve. This will return a JSON response with the details of the specified thought.

## Link to WalkThrough Video

[Link to WalkThrough Video](placeholderurl)

## License

This project is licensed under the MIT license.

## Contributing

Please feel free to submit pull requests or open issues to improve the application functionality.

## Questions

For any additional questions, you can reach me at: [andatax](https://github.com/andatax)  
Email: abraham.mendez1011@gmail.com
