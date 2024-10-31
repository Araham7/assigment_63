const registorFieldValidator = (req , res , next)=>{
    const { name , email , password } = req.body;

    if(!name || !email || !password ){
        return res.status(400).json({
            success: false,
            msg: 'All input fields are reqired!'
        })
    }
    next();
}

export {
    registorFieldValidator
}

