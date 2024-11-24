const express = require("express");
const indexController = require("../controllers/indexController");

const router = express.Router();

const routerLog = (req, res, next) => {
  console.log("======= In the index route =======");
  next();
};
router.use(routerLog);

router.get("/", indexController.index);
module.exports = router;
