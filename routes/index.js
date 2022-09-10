var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Trabalho disciplina Cloud",
    text: "Teste beanstalk e code deploy",
  });
});

module.exports = router;
