import mongoose from 'mongoose'


const TicketListSchema = mongoose.Schema({
    task: {
        type: String,
        require: true,
        default:"",
    },
    hr: {
        type: Number,
        require: true,
        default:0,
    },
},
    {
        timestamp: true,
    }

)

const TaskList = mongoose.model('Task_list', TicketListSchema)
export default TaskList;