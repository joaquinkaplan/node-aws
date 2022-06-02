const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("server is listening");
});

app.get("/", (req, res) => {
  res.send("HI, I'M THE INDEX");
});
