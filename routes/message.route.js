const express = require("express");

const messageRouter = express.Router();
const messagesController = require("../controllers/messages.controller");

messageRouter.get("/", messagesController.getMessages);

messageRouter.post("/", messagesController.postMessages);

module.exports = messageRouter;