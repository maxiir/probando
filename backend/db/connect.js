import {connect} from "mongoose";


const db = await connect(process.env.MONGO_URI)
console.log('connect to:', db.connection.name)



export default db;