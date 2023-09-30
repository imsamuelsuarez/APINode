
import { Router } from 'express'
import clientsController from '../../services/clients.controller.js'
const clients = new clientsController();
const clientsRouter = Router();

clientsRouter.get('/', (req, res) => {
    const content = clients.getAll()
    res.json(content)
})

clientsRouter.get('/:id', (req, res) => {
    const content = clients.getOne(req.params.id)
    res.send(content)
})

clientsRouter.post('/', (req, res) => {
    const { email, name, gender } = req.body;
    
    const newClient = { 
        email,  
        name, 
        gender
    }

    const response = clients.create(newClient)
    res.send(response)
},

clientsRouter.delete('/', (req, res) => {
    const { id } = req.body;

    if(id) {
        const response = clients.delete(id)
        res.send(response);
    } else {
        res.send(res.statusCode('400'))
    }
}))

clientsRouter.put('/:id', (req, res) => {
    const id  = req.params.id;

    const response = clients.put(id, req.body, req, res);

    res.send(response)

 })

export default clientsRouter;