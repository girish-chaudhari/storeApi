const responseHandler = (res, statusCode, message, data) => {
  const status = statusCode || 200;
  const responseData = { status, message, data };
  res.status(status).send(responseData);
};
module.exports = responseHandler