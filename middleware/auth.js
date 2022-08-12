const {CustomAPIError,UnauthenticatedError} = require("../errors/index");
require('dotenv').config()
const jwt = require("jsonwebtoken");

const authenticationMiddleware = (req,res,next)=>{
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer')){
         throw new CustomAPIError('please provide your token', 401)
    }
    const token=authHeader.split(' ')[1]
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const {username,id} = decoded
        req.user={username,id}
        next()
    }catch (err){
         throw new UnauthenticatedError('unauthorized connection :(')
    }

    next()
}

module.exports=authenticationMiddleware