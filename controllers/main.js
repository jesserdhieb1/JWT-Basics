const CustomAPIError= require('../errors/custom-error')
require('dotenv').config()
const jwt = require('jsonwebtoken');

const login=async (req,res)=>{
    const {username,password}=req.body
    const id = String(Date.now())
    //check if the login/register variable are there first using our own class CustomAPIError
    if (!username || !password){
        throw new CustomAPIError('please provide your name and password',400)
    }
    const token= jwt.sign({username,id},process.env.JWT_SECRET,{expiresIn: '30d'})
    // res.set('token','token')
    res.status(201).json({msg:'user connected',token:token})
}

const dashboard=async (req,res)=>{
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer')){
        throw new CustomAPIError('please provide your token', 401)
    }
    const token=authHeader.split(' ')[1]
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const {username,id} = decoded
        const luckyNumber=Math.floor(Math.random()*100)
        res.status(200).json({msg:`Hello, ${username}`,secret:`Here is your authorized data, your lucky number is ${luckyNumber}`})
    }catch (err){
        throw new CustomAPIError('unauthorized connection :(', 401)
    }
}

module.exports={login,dashboard}