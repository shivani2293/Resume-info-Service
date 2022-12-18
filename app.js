const express = require("express");
const app = express();
const route = require("./route");

app.use("/api", route);

// start the server
app.listen(8080, () => {
  console.log("Server listening on port 8080");
});

module.exports = app;
