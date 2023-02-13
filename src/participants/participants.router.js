const participantsServices = require("./participants.services");
const router = require("express").Router();

router.get("/participants", participantsServices.getAllParticipants);
router.post("/participants", participantsServices.postNewParticipant);
router.get("/participants/:id", participantsServices.getParticipantById);
router.patch("/participants/:id", participantsServices.patchParticipant);
router.delete("/participants/:id", participantsServices.deleteParticipant);

module.exports = router;
