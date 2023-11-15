<div align="center">
    <img src="./client/public/static/logo.png" alt="Logo" width="80" height="80">

  <h2 align="center">BillBuddies</h2>

  <p align="center">
    Developed using the MERN stack (MongoDB, Express, React and NodeJS)
    <br />
    <a href="https://github.com/gaurav-madkaikar/BillBuddies/"><strong>Explore the docs »</strong></a>
    <br />
    <br />
  </p>
</div>

## Group Finance Management Application

- [Introduction](#introduction)
- [Key Features](#key-features)
- [Technologies used](#technologies-used)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [Database](#database)
- [Configuration and Setup](#configuration-and-setup)
- [License](#license)

## Introduction

This is a project I've been working on as a part of a course in my CS curriculum named as `Design Laboratory`. A full stack expense spliting app - made using the MERN stack (MongoDB, Express, React & Nodejs), specially designed to simplify splitting of group expenses. With this application, you can add your expense details and get personalized analytics corresponding to your expenses - Group Balance, Monthly spend graphs, Category-wise expense spending graphs and so on... Download the entire [Source code](https://github.com/gaurav-madkaikar/BillBuddies/) and run it on your server. 

## Key Features

- Create user groups and track group expenses
- Keep track of your shared expenses and settle your balances in a convenient and personalized manner
- Get analytical graphs to observe your expenditure trend
- Multiple user registration
- Authentication using JSON web token (JWT)

## Technologies used

This project was created using the following technologies.

#### Frontend

- React JS
- Redux (for managing and centralizing application states)
- Axios (For making api calls)
- Material UI (For User Interface)
- Chart.js (To display various analytics graphs)
- React-chartjs-2
- Gravitar (For user profile picture)

#### Backend

- Express
- Mongoose
- JWT (For authentication)
- bcryptjs (for data encryption)

#### Database

MongoDB (MongoDB Atlas)

## Configuration and Setup

In order to run this project locally, simply fork and clone the repository or download as a zip file and unzip on your machine.

- Open the project in your prefered code editor.
- Go to terminal -> New terminal (If you are using VS code)
- Split your terminal into two (run the client on one terminal and the server on the other terminal)

In the first terminal

```
$ cd client
$ npm install (to install client-side dependencies)
$ npm start (to start the client)
```

For setting up the backend

- Create a .env file in the root of your directory.
- Supply the following credentials

```
PORT=3001
MONGODB_URI=
ACCESS_TOKEN_SECRET=

```

Please follow [This tutorial](https://dev.to/dalalrohit/how-to-connect-to-mongodb-atlas-using-node-js-k9i) to create your mongoDB connection url, which you'll use as your MONGODB_URI

Provide some random key in ACCESS_TOKEN_SECRET or you could generate one using node enter the below command in the terminal to genrate a random secret key

```
node -e "console.log(require('crypto').randomBytes(256).toString('base64'));"
```

In the second terminal (\*in the project root directory (back-end))

```
$ npm install (to install server-side dependencies)
& npm start (to start the server)
```

## License

This project is MIT licensed.

Copyright 2023 Gaurav Madkaikar

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
