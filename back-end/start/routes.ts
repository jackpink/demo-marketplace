/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/api/', async () => {
  return { hello: 'world' }
})

Route.group(() =>  {
  Route.resource('consumers', 'ConsumersController')
}).as('app')

Route.group(() =>  {
  Route.resource('jobs', 'JobsController')
}).as('app')

Route.group(() =>  {
  Route.resource('makers', 'MakersController')
}).as('app')

Route.group(() =>  {
  Route.resource('photos', 'PhotosController')
}).as('app')

Route.group(() =>  {
  Route.resource('quotations', 'QuotationsController')
}).as('app')
