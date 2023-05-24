import mongoose from "mongoose";
import validator from "validator";


const EmailSchema = new mongoose.Schema({
   email:{
    type: String, 
    unique: true,
    required: [true, 'Please provide an email address'],
    validate: {
        validator: validator.isEmail,
        message: 'Please provide a valid email address'
    }
   }
})


export default mongoose.model('Email', EmailSchema)


