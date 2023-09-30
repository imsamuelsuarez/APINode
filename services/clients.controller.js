class clientsController {
    constructor() {
        this.clients = [
            {
                id: 1,
                name: 'Felipe Suarez',
                active: true
            }
        ]
    }

    getAll() {
        return this.clients;
    }

     getOne(id){
        const filter = this.clients.filter(item => item.id == id); 
        if(filter.length !==     0) {
            return filter;
        } else {
            return {msg: 'Not found', error: '404'}
        }
    } 
    
    create(body) {
             const newClient = {
                ...body
             }

             return newClient
    }

    delete(id){
    
        const array = this.clients;
        const rule = (el) => el.id === id;
        const index = array.findIndex(rule)

    const toDelete = () => {
        const item = array[index]; 
        item.active = false;

        return item
    }

    return toDelete()

    }

    put(id, body, req, res){
   
        let filter = this.clients.find(item => item.id == id); 

        const data = body;

        // const response = () => Object.keys(data).forEach((el) => {
        //     filter.forEach((prop) => {
        //         if(el == prop) {
        //             prop.value = el.value;
        //             return 'hola'
        //         }
        //     })
        // })

        let response = () => {
            for (const [key, value] of Object.entries(filter)) {
                
              }
        } 

        return parsed()

   
    }

}

export default clientsController;