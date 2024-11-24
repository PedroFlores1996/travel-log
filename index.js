const express = require("express");
const router = express.Router();

const routerLog = (req, res, next) => {
  console.log("======= In the index router =======");
  next();
};
router.use(routerLog);
router.get("/", (req, res) => {
  res.sendFile("views/index.html", { root: __dirname });
});
module.exports = router;
