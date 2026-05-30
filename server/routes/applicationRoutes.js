const express = require("express");
const router =express.Router();
const { addApplication, getApplications, updateApplication, deleteApplication }= require("../controllers/applicationController");

router.post("/application", addApplication);
router.get("/application", getApplications);
router.put("/application/:id", updateApplication);
router.delete("/applications/:id", deleteApplication);
module.exports = router ;