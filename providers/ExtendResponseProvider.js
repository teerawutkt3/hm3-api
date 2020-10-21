'use strict'

const { ServiceProvider } = require('@adonisjs/fold')
const { EnumStatusCode, EnumResponseStatus } = require('../app/shared/enum')

class ExtendResponseProvider extends ServiceProvider {
  register() {
    //
  }

  boot() {
    const Response = use('Adonis/Src/Response')

    Response.macro('unauthorized', function (message = 'Unauthorized') {
      this.status(401).json({
        status: 'fail',
        message,
      })
    })

    Response.macro('notFound', function (message = 'Not Found') {
      this.status(EnumStatusCode.NOT_FOUND).json({
        status: EnumResponseStatus.FAILED,
        message,
      })
    })

    Response.macro('badRequest', function (error = {}) {
      this.status(EnumStatusCode.BAD_REQUEST).json({
        status: EnumResponseStatus.FAILED,
        message: error.message || JSON.stringify(error),
        data: [],
        errors: error,
      })
    })

    Response.macro('unprocessableEntity', function (message = 'Unprocessable Entity') {
      this.status(422).json({
        message,
      })
    })

    Response.macro('validateFailed', function (errorMessages, message = 'Validation failed') {
      this.status(422).json({
        message,
        errors: errorMessages,
      })
    })

    Response.macro('internalServerError', function (message = 'Internal server error') {
      this.status(500).json({
        message,
      })
    })

    Response.macro('apiCreated', function (item, message = 'Created successfully') {
      this.status(EnumStatusCode.CREATED).json({
        status: EnumResponseStatus.SUCCESSED,
        message,
        data: item,
      })
    })

    Response.macro('apiUpdated', function (item, message = 'Updated successfully') {
      this.status(200).json({
        message,
        data: item,
      })
    })


    Response.macro('apiDeleted', function (message = 'No content') {
      this.status(204).json({
        message,
      })
    })

    // response get by id
    Response.macro('apiItem', function (item, message = 'Data retrieval successfully') {
      this.status(200).json({
        message,
        data: item,
      })
    })

    // response get all
    Response.macro('apiCollection', function (items, message = 'Data retrieval successfully') {
      this.status(200).json({
        message,
        data: items,
      })
    })

    // response normal
    Response.macro('apiSuccess', function (data = null, message = 'Success') {
      this.status(200).json({
        status: 'ok',
        message,
        data,
        errors: [],
      })
    })

    // response pagination
    Response.macro('apiPagination', function (data, message = 'Data retrieval successfully') {
      this.status(200).json({
        message,
        total: data.pages.total,
        page: data.pages.page,
        perPage: data.pages.perPage,
        lastPage: data.pages.lastPage,
        data: [...data.rows],
      })
    })
  }
}

module.exports = ExtendResponseProvider
