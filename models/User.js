import mongoose from "mongoose";

let schema = new mongoose.Schema({
    Name: {type: String, required: true},
    Email: {type: String, requiered: true},
    Password: {type: String, requiered: true}
},{
    timestamps: true
})

let User = mongoose.model('users', schema)
export default User