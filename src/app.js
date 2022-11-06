const express = require("express");
const app = express();

app.use(express.json());

app.use("/users", require("./routes/users"));

app.listen(4000);
console.log("Server on port", 4000);

module.exports = app;
