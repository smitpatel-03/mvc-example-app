const express = require("express");
const friendRouter = require("./routes/friend.route");
const messageRouter = require("./routes/message.route");
const path = require("path");
const app = express();

app.use((req, res, next) => {
  const start = Date.now();
  console.log(`${req.method} ${req.url}`);
  next();
  //action we do in middleware
  const delta = Date.now() - start;
  console.log(`time it takes - ${delta}`);
});

app.use(express.json());
app.use("/site", express.static(path.join(__dirname, "public")));

app.use("/friends", friendRouter);
app.use("/messages", messageRouter);

app.get("/", (req, res) => {
  res.send("<h1> go to friends</h1>");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
