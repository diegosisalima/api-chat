const conversationsServices = require("./conversations.services");
const router = require("express").Router();

router.get("/conversations", conversationsServices.getAllConversations);
router.post("/conversations", conversationsServices.postNewConversation);
router.get("/conversations/:id", conversationsServices.getConversationById);
router.patch("/conversations/:id", conversationsServices.patchConversation);
router.delete("/conversations/:id", conversationsServices.deleteConversation);

module.exports = router;
