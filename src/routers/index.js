import express from 'express'
const route = express.Router()
import { taskList } from '../assests/tickets.js'
import { insertTicket, getTasks , getATask, deleteTask, updateTodo } from '../modules/TaskList.Model.js'
// import insertTicket from '../modules/'

route.all("/",(req,res,next) =>{
    console.log("we got hit")
    next()
    
    
    // res.json({message:"you got it"})
})

//fetch the ticket
route.get("/:id?", async (req, res) => {
    try {
        const { id } = req.params
    console.log(id)
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
        res.json({message: "we are unable to process your request "})
        
    }
})
 
//add new ticket
route.post("/", async (req,res) => {
    try {
        const result = await insertTicket(req.body);
    

    res.json(result)
        
    } catch (error) {
        console.log(error)
        // reject(error)
        
    }
    
})


//patch ticket
route.patch("/", async(req, res) => {
    
    try {
    if (!req.body.id) {
        return res.json({status:'error', message:'invalid id request'})
    }
    
        const result = await updateTodo(req.body)
    res.json(result)

    } catch (error) {
        res.json({
            status: 'error',
            message:"unable to process"
        })
        
    }
    
})

//delete ticket
route.delete("/", async (req, res) => {
    
        const { id } = req.body
        if (!id) {
            return  res.json({status :'error', message: 'invalid id request'})
        }
        console.log(id)
        const result = await deleteTask(id)
        res.json(result)

    
})

export default route