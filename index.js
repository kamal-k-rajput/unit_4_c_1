const express = require("express");

const app = express();


app.get("/", (req, res) => {
  res.send("this is home page");
});
app.get("/books", (req, res) => {
  res.send("this is book page");
});
app.get("/libraries", (req, res) => {
  res.send("this is libraries page");
});
app.get("/authors", (req, res) => {
  res.send("this is authors page");
});

app.use((req, res) => {
  res.send("hello");
});

app.listen(8080, function () {
  console.log("Listning to the port 8080.");
});
