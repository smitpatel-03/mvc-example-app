const path = require("path");

function getMessages(req, res) {
  // res.send("<ul><li>messages</li></ul>");
  res.sendFile(path.join(__dirname, "..", "public", "image.jpg"));
}

function postMessages(req, res) {
  console.log("Updating the messages........");
}

module.exports = {
  getMessages,
  postMessages,
};
