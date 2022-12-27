//This is the main server runner logic - it kicks off the MongoDB connection, defines the HTTP REST API routing and listens for requests on its specified port (read from .env)
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 7788;
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

//Mongoose logic connection to the MongoDB cluster defined in .env
connectDB();

const app = express();

//!!!Middleware needed to access req body!!!
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//link REST API to their respective routes
app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

//overwrite default express err handler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
