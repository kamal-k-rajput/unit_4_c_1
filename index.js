const express = require("express");

const app = express();

app.use(logger);
app.get("/", (req, res) => {
  res.send("this is home page");
});
app.get("/books", (req, res) => {
  res.send("this is book page");
  console.log(req.path);
});
app.get("/libraries", checkPermission("librarian"), (req, res) => {
  res.send("this is libraries page");
  console.log(req.path);
});
app.get("/author", checkPermission("author"), (req, res) => {
  res.send("this is authors page");
  console.log(req.path);
});

function logger(req, res, next) {
  console.log("before the logger");
  next();
  console.log("after the logger");
}
function checkPermission(data) {
  return function logger1(req, res, next) {
    if (data === "librarian") {
      return next();
    } else if (data === "author") {
      return next();
    } else {
      return res.send("You are not allowed to access this page.");
    }
  };
}

app.listen(8080, function () {
  console.log("Listning to the port 8080.");
});
