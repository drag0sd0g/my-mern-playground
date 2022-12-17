const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 7788;
const { errorHandler } = require("./middleware/errorMiddleware");

const app = express();

//!!!Middleware needed to access req body!!!
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));

//overwrite default express err handler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
