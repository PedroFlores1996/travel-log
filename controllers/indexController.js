const catchAsync = require("../utils/catchAsync");

exports.index = catchAsync(async (req, res, next) => {
  res.sendFile("views/index.html", { root: __dirname });
  next();
});
