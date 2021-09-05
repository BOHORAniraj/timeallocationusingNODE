import mongoose from 'mongoose';

const mongoClient = async () => {
    try {
        console.log('connecting to mongodb')
        const uri = process.env.MONGODB_CLIENT
// const uri = "mongodb://localhost/task_lists"
        const con = await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology:true,
            
})
if(con){
    console.log('mongo is connected')
}
    } catch (error) {
        console.log(error)
        
    }
}

export default mongoClient;