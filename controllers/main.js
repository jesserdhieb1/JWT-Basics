const CustomAPIError= require('../errors/custom-error')
require('dotenv').config()
const jwt = require('jsonwebtoken');

const login=async (req,res)=>{
    const {username,password}=req.body
    //check if the login/register variable are there first using our own class CustomAPIError
    if (!username || !password){
        throw new CustomAPIError('please provide your name and password',400)
    }
    const id =Date.now()
    console.log(id)
    const token= jwt.sign({username,id},process.env.JWT_SECRET,{expiresIN:'30d'})
    // res.set('token','token')
    console.log(token)
    res.status(201).json({msg:'user connected',token:token})
}

const dashboard=async (req,res)=>{
    const luckyNumber=Math.floor(Math.random()*100)
    res.status(200).json({msg:'Hello, jess',secret:`Here is your authorized data, your lucky number is ${luckyNumber}`})
}

module.exports={login,dashboard}