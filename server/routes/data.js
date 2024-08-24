const express = require("express");
const getData = require("../controllers/data.js");

const router = express.Router();

router.post("/getData", getData);

module.exports = router;