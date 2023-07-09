# Social-Network-Api

# ![](https://img.shields.io/badge/Mongoose-ExpressJs-red) ![](https://img.shields.io/badge/license-MIT-brightgreen) ![](https://img.shields.io/badge/Mongodb-ORM-yellow) ![](https://img.shields.io/badge/node.js-Routes-blue) 



This is a Social Media API built with Express.js and Mongoose, designed to handle user data, thoughts, and reactions. It provides endpoints for creating, reading, updating, and deleting user information, posting thoughts, and adding reactions to thoughts.

## Table of Contents
 - [Installation](#installation)
 - [Usage](#usage)
 - [API Endpoints](#api-endpoints)
     - [Users](#users)
     - [Thoughts](#thoughts)
     - [Reactions](#reactions)
 - [Technologies Used](#technologies-used)
 - [Contribution](#contribution)
 - [Video link](#video-link)
 - [License](#license)
 - [Questions](#questions)

## Installation
To run this project locally, follow these steps:

Clone the repository: git clone `https://github.com/Amritpal-Kaur0/Social-Network-Api`
Navigate to the project directory: cd social-media-api
Install the dependencies:` npm install`
Set up your MongoDB connection  file.
Start the server:` npm run start`
The API will be available at `http://localhost:3000.`

## Usage

To use the API, you can make HTTP requests to the provided endpoints using tools like cURL, Postman, or any other HTTP client.

Before making any requests, make sure you have a valid JWT token for authentication. You can obtain a token by registering and logging in as a user.

## API Endpoints
 Api Routes foe social-media-api
### Users 
GET `/api/users/ `- Get all Users Information.
POST `/api/users/` - Create a new user.
<br>
GET `/api/users/:userId` - Get user information by ID.
PUT `/api/users/:userId` - Update user information by ID.
DELETE `/api/users/:userId` - Delete user account by ID.
<br>
POST `/api/users/:userId/friends/:friendId` - Add  new friend  

### Thoughts
GET `/api/thoughts` - Get all thoughts posted by a user.
POST` /api/thoughts/:userId/new/:thoughtId` - Create a new thought.
GET `/api/thoughts/:thoughtId` - Get thought information by ID.
PUT` /api/thoughts/:thoughtId` - Update thought information.
DELETE `/api/thoughts/:thoughtId `- Delete a thought.

### Reactions

POST `/api/thoughts/:thoughtId/reactions` - Add a reaction to a thought.
DELETE `/api/thoughts/:thougthId/del/:reactionId `- Remove a reaction from a thought.


## Technologies Used

<u>Express.js</u> - Fast, unopinionated, minimalist web framework for Node.js.
<u>Mongoose </u>- Elegant MongoDB object modeling for Node.js.
<u>MongoDB</u> - A NoSQL database for storing data.
<u>Node.js </u>- A JavaScript runtime built on Chrome's V8 JavaScript engine

## Contribution
Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or create a pull request.


## Video link
 Part -1 [Link](
https://drive.google.com/file/d/1rQcSBauCd7zOZqad1tJg_erzW_gERyg1/view?pli=1)<br>
Delete friend- [link](https://drive.google.com/file/d/1dAvf8hhgPcWWgQLTiiq4K0k7xbq4bCBT/view)

## License
This project is licensed under the MIT License.

## Questions
If you have encounter any issues or have any Questions Regarding this Project. Connect with me at

Email -Amrit.gill3005@gmail.com
Github - Amritpal-Kaur0




