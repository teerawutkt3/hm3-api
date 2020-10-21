'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BillHistoriesSchema extends Schema {
  up () {
    this.create('bill_histories', (table) => {
      table.increments()
      table.string('title', 80)
      table.decimal('amount')
      table.string('description', 1000)
      table.string('type', 10) // PAY, INVEST, INCOME
      table.string('year', 4)  // yyyy, 2020
      table.string('month', 2) // 01, 02, ..., 12

      table.timestamps()
    })
  }

  down () {
    this.drop('bill_histories')
  }
}

module.exports = BillHistoriesSchema
