import express from 'express'
const route = express.Router()
import {taskList} from '../assests/tickets.js'

route.all("/",(req,res,next) =>{
    console.log("we got hit")
    next()
    
    
    // res.json({message:"you got it"})
})

//fetch the ticket
route.get("/",(req,res) => {
    console.log(taskList,'-----')

    res.json(taskList)
})
 
//add new ticket
route.post("/",(req,res) => {
    console.log(req.body)

    res.json(req.body)
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