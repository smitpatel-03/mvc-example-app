function getMessages(req, res) {
  res.send("<ul><li>messages</li></ul>");
}

function postMessages(req, res) {
  console.log("Updating the messages........");
}

module.exports = {
  getMessages,
  postMessages,
};
