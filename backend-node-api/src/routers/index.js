import express from 'express'
const route = express.Router()

import { insertTicket, getTasks , getATask, deleteTasks, updateTodo } from '../modules/TaskList.Model.js'


route.all('/',(req,res,next) =>{
   
    next()
    
    
    // res.json({message:"you got it"})
})

//fetch the ticket
route.get('/:id?', async (req, res) => {
    try {
        const { id }  = req.params
    
        if (id) {
            const result = await getATask(id)
            res.json(result)
        }
        else {
            const taskLists = await getTasks()
            res.json({result:taskLists})

        }    
    } catch (error) {
        console.log(error)
        res.json({
            message: "we are unable to process your request ",
        })
        
    }
})
 
//add new ticket
route.post('/', async (req,res) => {
    try {
        const result = await insertTicket(req.body);
        res.json({
            status: result._id ? 'success' : 'error',
            message: result._id ? 'ticket has been added' : 'error, unable to add the ticket',
            result,
        })
        
    } catch (error) {
        console.log(error)
        res.json({status:'error' ,message: error.message})
        
    }
    
})


//patch ticket
route.patch('/', async(req, res) => {
    
    try {
    if (!req.body.id) {
        return res.json({status:'error', message:'invalid id request'})
    }
    
        const result = await updateTodo(req.body)
        const msg = result ? 'Selected data updated' : 'Nothing is updated'
        res.json({msg , result })

    } catch (error) {
        res.json({
            status: 'error',
            message:"unable to process"
        })
        
    }
    
})

//delete ticket
route.delete("/", async (req, res) => {
    try {
        const { ids } = req.body
        if (!ids) {
            return  res.json({status :'error', message: 'invalid id request'})
        }
       
    const result = await deleteTasks(ids)
   
    res.json({
            status :'success',message:'selected task has been deleted',result,
        })
        
    } catch (error) {
        res.json({
            status: "error",
            message :'error,unable to delete the selected task'
        })
        
    }
        

    
})

export default route