const router = require("express").Router();

const { index } = require("./controller");

router.get("/", index);

module.exports = router;
