const messagesServices = require("./messages.services");
const router = require("express").Router();

router.get("/messages", messagesServices.getAllMessages);
router.post("/messages", messagesServices.postNewMessage);
router.get("/messages/:id", messagesServices.getMessageById);
router.patch("/messages/:id", messagesServices.patchMessage);
router.delete("/messages/:id", messagesServices.deleteMessage);

module.exports = router;
