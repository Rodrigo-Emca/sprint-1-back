import mongoose from "mongoose";

let schema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, requiered: true},
    password: {type: String, requiered: true}
},{
    timestamps: true
})

let User = mongoose.model('users', schema)
export default User