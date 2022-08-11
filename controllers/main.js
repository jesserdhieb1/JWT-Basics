const CustomAPIError= require('../errors/custom-error')

const login=async (req,res)=>{
    const {username,password}=req.body
    //check if the login/register variable are there first using our own class CustomAPIError
    if (!username || !password){
        throw new CustomAPIError('please provide your name and password',400)
    }
    console.log(username,password)
    res.status(201).send('Fake Login/Register/Sing-up Route')
}

const dashboard=async (req,res)=>{
    const luckyNumber=Math.floor(Math.random()*100)
    res.status(200).json({msg:'Hello, jess',secret:`Here is your authorized data, your lucky number is ${luckyNumber}`})
}

module.exports={login,dashboard}