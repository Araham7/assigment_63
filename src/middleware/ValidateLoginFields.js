const loginFieldValidator = (req , res , next)=>{
    const { email , password } = req.body;

    if(!email || !password ){
        return res.status(400).json({
            success: false,
            msg: 'All input fields are reqired!'
        })
    }
    next();
}

export {
    loginFieldValidator
}