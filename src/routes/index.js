import clientsRouter from './clients.router..js' 
import booksRouter from './books.router.js'

function routerApi(app) {
    app.use('/clients', clientsRouter)
    app.use('/books', booksRouter)
}

export default routerApi