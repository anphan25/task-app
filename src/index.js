const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/users");
const taskRouter = require("./routers/tasks");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

//Without middleware: new request -> run route handler
//With middleware: new request -> do sth (authenticate) -> run route handler

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
