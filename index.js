const express = require("express");
const app = express();

// console.dir(app);

let port = 8080;

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

app.get("/", (req, res) => {
  console.log("requst recived");
  res.send("you connected to root path");
});

app.get("/:username/:id", (req, res) => {
  // console.log(req.params);
  let { username, id } = req.params;
  res.send(`welcome to the page of @${username}`);
  //   res.send("hello, i am root");
});

app.get("/search", (req, res) => {
  // console.log(req.query);
  let { q } = req.query;
  if (!q) {
    res.send("<h1>nothing searched</h1>");
  } else {
    res.send(`search results for ${q}`);
  }
});

// app.get("/apple", (req, res) => {
//   console.log("requst recived");
//   res.send("you connected to apple path");
// });

// app.get("/help", (req, res) => {
//   console.log("requst recived");
//   res.send("you connected to help path");
// });

// app.get("/contact", (req, res) => {
//   console.log("requst recived");
//   res.send("you connected to contact path");
// });

// app.post("/", (req, res) => {
//     console.log("requst recived");
//     res.send("you connected to post routh");
//   });

// app.use((req, res) => {
//   // console.log(req);
//   console.log("request received");
//   let code = "<h1>Fruits</h1> <ul><li>orange</li> <li>melon</li></ul>"
//   res.send(code);
// });
