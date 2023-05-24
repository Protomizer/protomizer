//Errors in existing routes
import { StatusCodes } from "http-status-codes";
const errorHandlerMiddleware = (err, req, res, next) => {
    console.log(err)
    const defaultError = {
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || 'Something went wrong'
    }

    //Mongoose Errors
    
     if(err.name === 'ValidationError'){
         defaultError.statusCode = StatusCodes.BAD_REQUEST
         defaultError.msg = 'Invalid email address'
     }


    res.status(defaultError.statusCode).json({msg: defaultError.msg})
}

export default errorHandlerMiddleware;