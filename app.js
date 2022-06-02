const express = require("express");
const app = express();

const PORT = process.env.port || 3000;

app.listen(PORT, () => {
  console.log("server is listening");
});

app.get("/", (req, res) => {
  res.send("HI, I'M THE INDEX");
});
