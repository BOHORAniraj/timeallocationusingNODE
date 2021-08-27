import mongoose from 'mongoose';

const mongoClient = async () => {
    try {
console.log('connecting to mongodb')
const uri = "mongodb://localhost:27017/task_lists"
const con = await mongoose.connect(uri,{})
if(con){
    console.log('mongo is connected')
}
    } catch (error) {
        console.log(error)
        
    }
}

export default mongoClient;