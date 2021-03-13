exports.generalResponse = function (
  err,
  res,
  status = 200,
  message = "Success"
) {
  if (err !== null) {
    res.status(501).json({
      status: 501,
      msg: "Server error!",
      error: err,
    });
  } else {
    res.status(200).json({
      status: status,
      msg: message,
    });
  }
};

exports.generalPayloadResponse = function (
  err,
  payload,
  res,
  status = 200,
  message = "Success"
) {
  if (err !== null) {
    res.status(501).json({
      status: 501,
      msg: "Server error!",
      error: err,
    });
  } else {
    res.status(200).json({
      status: status,
      msg: message,
      data: payload,
    });
  }
};
