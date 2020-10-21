const EnumStatusCode = Object.freeze({
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
})

const EnumResponseStatus = Object.freeze({
  OK: 'ok',
  SUCCESSED: 'success',
  FAILED: 'fail',
})

const EnumRoomSocket = Object.freeze({
  ECARE: 'emergency-case-ecare',
  EAMB: 'emergency-case-eamb',
})

module.exports = {
  EnumStatusCode,
  EnumResponseStatus,
  EnumRoomSocket,
}
