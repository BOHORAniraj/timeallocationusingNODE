import express from 'express'
const route = express.Router()
import { taskList } from '../assests/tickets.js'
import { insertTicket } from '../modules/TaskList.Model.js'
// import insertTicket from '../modules/'

route.all("/",(req,res,next) =>{
    console.log("we got hit")
    next()
    
    
    // res.json({message:"you got it"})
})

//fetch the ticket
route.get("/",async (req,res) => {
    const taskLists = await getTasks()
    console.log(taskLists)

    res.json({result:taskLists})
})
 
//add new ticket
route.post("/",async(req,res) => {
    
    const result = await insertTicket(req.body);
    console.log(result)

    res.json(result)
})


//patch ticket
route.patch("/",(req,res) => {

    res.json({message: 'this req will update the ticket from  database '})
})

//delete ticket
route.delete("/",(req,res) => {

    res.json({message: 'this req will delete the ticket from  database '})
})

export default route