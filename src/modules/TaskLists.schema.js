import mongoose from 'mongoose'


const TicketListSchema = mongoose.Schema({
    task: {
        type: String,
        required: true,
        default:'',
       
    },
    hr: {
        type: Number,
        required: true,
        default:0,
    },
    todo: {
        type: Boolean,
        required: true,
        default:true,
    }
},
    {
        timestamps: true,
    }

)

const TaskList = mongoose.model('Task_list', TicketListSchema)
export default TaskList;