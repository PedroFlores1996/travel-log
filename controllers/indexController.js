const path = require("path");
const catchAsync = require("../utils/catchAsync");

exports.index = catchAsync(async (req, res, next) => {
  res.sendFile(path.resolve("views/index.html"));
});
