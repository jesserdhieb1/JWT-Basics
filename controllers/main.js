

const login=async (req,res)=>{
    res.status(201).send('Fake Login/Register/Sing-up Route')
}

const dashboard=async (req,res)=>{
    const luckyNumber=Math.floor(Math.random()*100)
    res.status(200).json({msg:`Hello, jess',secret:'Here is your authorized data, your lucky number is ${luckyNumber}`})
}

module.exports={login,dashboard}