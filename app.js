const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("server is listening");
});

app.get("/", (req, res) => {
  res.send("hey there, i'm the index");
});
