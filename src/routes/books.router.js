import { Router } from 'express'

const booksRouter = Router();

booksRouter.get('/', (req, res) => {
    res.json({
        hi:'you are in books section'
    })
})

booksRouter.get('/:id', (req, res) => {
    const id = req.params.id;
    res.json({id})
})

export default booksRouter;