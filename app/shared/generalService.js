
const toResponseObject = function (status, message, data, isError = false) {
  const result = {
    status,
    message,
    data: isError ? [] : data,
    errors: isError ? data : [],
  }
  return result
}

module.exports = {
  toResponseObject,
}
