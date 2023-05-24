import Email from "../models/Email.js";
import CustomAPIError from "../errors/custom-api.js";

const createEmail = async(req, res) => {
    const {email} = req.body;

    
    //No input
    if(!email){
        throw new Error('Please fill out email field')
    }
    //Valid Email Address handled in ErrorHandler "ValidationError"

    //Email already exists
    const emailExists = await Email.findOne({email});
    if(emailExists){
        throw new CustomAPIError('Email already exists')
    }

    const newEmail = await Email.create({email});

    res.status(201).json({msg: 'Email has been successfully submitted!'})
}





export {createEmail};