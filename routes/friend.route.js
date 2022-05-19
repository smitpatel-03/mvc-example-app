const express = require("express");
const friendsController = require("../controllers/friends.controller");

const friendRouter = express.Router();

friendRouter.post("/", friendsController.postFriend);

friendRouter.get("/", friendsController.getFriends);

friendRouter.get("/:friendId", friendsController.getFriend);

module.exports = friendRouter;
