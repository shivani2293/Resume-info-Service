const express = require("express");
const resumeCrudCtrl = require("../controllers/resume-controller");

const router = express.Router();

router.get("/getResumeById/:id", resumeCrudCtrl.fetchResumeById);
router.post("/uploadResumeDetails", resumeCrudCtrl.saveResumeDetails);
router.get("/getResumeByName/:name", resumeCrudCtrl.fetchResumeByName);

module.exports = router;
