'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with bills
 */

const Bill = use('App/Models/Bill')
const BillHistory = use('App/Models/BillHistory')
const Database = use('Database')

class BillController {
  /**
   * Show a list of all bills.
   * GET bills
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    return await Bill.all()
  }

  /**
   * Render a form to be used for creating a new bill.
   * GET bills/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
    try {
      const data = request.only(['title', 'amount', 'description', 'type'])
      const result = await Bill.create(data)
      return response.apiCreated(result, 'Create Bill successfully')
    } catch (error) {
      if (error.code == 'ER_DUP_ENTRY') {
        error.message = 'ข้อมูลซ้ำ (title)'
      }
      return response.badRequest(error)
    }
  }

  /**
   * Create/save a new bill.
   * POST bills
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {

  }

  /**
   * Display a single bill.
   * GET bills/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing bill.
   * GET bills/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update bill details.
   * PUT or PATCH bills/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    try {
      const { id } = params     
      const data = request.only(['title', 'amount', 'description', 'type'])
      const result = await Bill.findBy('id', id)
      result.title = data.title
      result.amount = data.amount
      result.description = data.description
      result.type = data.type
      await result.save()

      return response.apiUpdated(result, 'Update Bill successfully')
    } catch (error) {
      if (error.code == 'ER_DUP_ENTRY') {
        error.message = 'ข้อมูลซ้ำ (title)'
      }
      return response.badRequest(error)
    }
  }

  /**
   * Delete a bill with id.
   * DELETE bills/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    try {
      const { id } = params           
      const result = await Bill.findBy('id', id)      
      await result.delete()

      return response.apiDeleted(result, 'Delete Bill successfully')
    } catch (error) {      
      return response.badRequest(error)
    }
  }

  async pay({ request, response, view }) {
    try {
      const data = request.only(['title', 'amount', 'description', 'type'])
      const result = await BillHistory.create(data)
      return response.apiCreated(result, 'Create BillHistory successfully')
    } catch (error) {     
      return response.badRequest(error)
    }
  }
}

module.exports = BillController
