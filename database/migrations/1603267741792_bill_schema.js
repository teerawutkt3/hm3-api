'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BillSchema extends Schema {
  up () {
    this.create('bills', (table) => {
      table.increments()
      table.string('title', 80).notNullable().unique()
      table.decimal('amount')
      table.string('description', 1000)
      table.string('type', 10) //PAY, INVEST, INCOME

      table.timestamps()
    })
  }

  down () {
    this.drop('bills')
  }
}

module.exports = BillSchema
