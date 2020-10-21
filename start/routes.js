'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.group(() => {
    Route.get('bill', 'BillController.index')
    Route.post('bill', 'BillController.create')
    Route.put('bill/:id', 'BillController.update')
    Route.delete('bill/:id', 'BillController.destroy')
  }).prefix(process.env.PREFIX_API)
  
