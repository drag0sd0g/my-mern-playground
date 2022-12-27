# Intro

MERN stack tutorial application started initially from the Youtube videos from https://www.youtube.com/@TraversyMedia

Logic is split into backend and frontend

## Backend

### Model
The application uses Mongoose as ORM layer above the MongoDB infra. There are two different .js files for user and model:
- A user will have a name, email, password
- A goal will have a text and an ObjectId ref to a user

### REST API

The app exposes a REST API for user management:

- "/api/users/" will register the user (POST)
- "/api/users/login" will login the user (POST)
- "/api/users/me" will fetch the current user data (GET)

The app exposes a REST API for goal management per user:

- "/api/goals/" will get the goals for the current user if the HTTP method is GET, otherwise will add a new goal for the current user if the HTTP method is POST
- "/api/goals/:id" will update the goal with this id for the current usre if the HTTP method is a PUT, or will remove it if the method is DELETE

The user /me endpoint as well as all goal endpoints are protected, i.e. they will require a bearer token in the request object for authorization 

# Additional tools

## Setting up a MongoDB dev cluster

1. Get an account or use an existing (e.g. google, github) one to sign into the mongodb cloud at https://cloud.mongodb.com/
2. Create a new cluster >> select "shared" (i.e. free) >> AWS provider >> tokyo region >> cluster tier/additional settings leave as default >> cluster name (you can rename it)
3. After it's created, click "connect" and select "connect using mongodb compass" (download it locally from here https://www.mongodb.com/products/compass). Alternatively get the generated connection string and copy/paste it into your application
4. Make sure you keep the query string in an environment (.env) property file which will be easily editable per-env at a later stage

## REST API testing with postman

- Get postman from https://www.postman.com/ - You can sign in with an existing (e.g. google account) into the free tier of postman - this will help you carry over your API operations cross-os
- N.B. When creating a POST request body make sure to add the key/value paris under "body" >> select x-www-form-urlencoded
- N.B. When creating a POST request with a bearer token, aside from settinthe request payload you'll need to also go into the "Authorization" tab, select "Bearer Token" as type and paste the generated auth token under "Token"

# Further reading

- **JSON Web Tokens** - https://jwt.io/ (this UI will also allow you to manually decode tokens)
- **JSON Placeholder** - https://jsonplaceholder.typicode.com/ - mock REST API with various dummy test data
- **NodeJs documentation** - https://nodejs.org/dist/latest-v19.x/docs/api/documentation.html
- **Bootstrap** - https://getbootstrap.com/ - frontend components
- **React docs** - https://reactjs.org/docs/getting-started.html - JS library for building user interfaces
- **Redux** - https://redux.js.org/ - state container for JS apps
- **Express** - https://github.com/expressjs/express - web framework for NodeJs
- **Axios** - https://github.com/axios/axios - Promise based HTTP client for the browser and node.js
- **Mongoose** - https://mongoosejs.com/ - MongoDB ORM for NodeJs
- **MongoDB** - https://www.mongodb.com/home - NoSql highly scalable DB
- **Jest** - https://jestjs.io/docs/getting-started - JavaScript testing framework
- **Bcrypt** - https://www.npmjs.com/package/bcryptjs - library used to hash user passwords before writing them in DB
- **Concurrently** - https://github.com/open-cli-tools/concurrently - used to run both client and server at the same time during local dev
- **Nodemon** - https://github.com/remy/nodemon - help develop NodeJs apps by automatically restarting the app when file changes are detected (useful locally)
