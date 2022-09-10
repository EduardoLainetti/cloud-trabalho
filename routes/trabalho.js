var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("trabalho final da disciplina de cloud");
});

module.exports = router;
