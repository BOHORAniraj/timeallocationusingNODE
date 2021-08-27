import { ConnectionClosedEvent } from 'mongodb'
import TicketListSchema from './TaskLists.schema.js'


// const newTask = {
//     task: "watching TV",
//     hr: 5,
// }

export const insertTicket = (newTask) => {
    return new Promise((resolve, reject) => {
        TicketListSchema(newTask).save().then((data) => {
            resolve(data)
        }).catch((error) => {
            reject(error)
        })
})
  
}


export const getTasks = () => {
    return new Promise((resolve, reject) => {
        TicketListSchema.find().then((data) => {
            resolve(data)   

        })
            .catch((error) => {
            reject(error)
        })
    
    })
}