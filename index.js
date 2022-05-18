const express = require("express");

//controllers
const messagesController = require("./controllers/messages.controller");
const friendsController = require("./controllers/friends.controller");

const app = express();

// app.use(bodyParser.urlencoded({extended : false}))



app.use((req, res, next) => {
  const start = Date.now();
  console.log(`${req.method} ${req.url}`);
  next();
  //action we do in middleware
  const delta = Date.now() - start;
  console.log(`time it takes - ${delta}`);
});

app.use(express.json());

app.post("/friends", friendsController.postFriend);

app.get("/friends", friendsController.getFriends);

app.get("/friends/:friendId", friendsController.getFriend);

app.get("/messages", messagesController.getMessages);

app.post("/messages", messagesController.postMessages);

app.get("/", (req, res) => {
  res.send("<h1> go to friends</h1>");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
