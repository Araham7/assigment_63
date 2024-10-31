import { UserModel } from "../models/userModel.js";

// Register route handling
const register = async (req, res, next) => {
    const { name, email, password } = req.body;
  
    try {
      // Await the user search to check if the user already exists
      const user = await UserModel.findOne({ email });
  
      if (user) {
        return res.status(400).json({
          success: false,
          msg: "User already exists with the provided email!"
        });
      }

      const newUser = new UserModel({
        name,
        email,
        password,
      });

      const savedUser = await newUser.save();
      res.status(200).json({
        success: true,
        msg: "User registered successfully!",
        data: savedUser,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        msg: "Error > ${error.message}"
      });
    }
  };



// Login route handling :---
const login = async (req, res, next) => {
    const { email, password } = req.body;
  
    try {
      // Find user by email and include password in the result
      const user = await UserModel.findOne({ email })
                                                    .select('+password');
  
      // Check if user exists
      if (!user) {
        return res.status(400).json({
          success: false,
          message: "No account associated with this email address!",
        });
      }
  
      // Compare provided password with stored password
      if (user.password === password) {
        user.password = undefined; // Remove password from response
        return res.status(200).json({
          success: true,
          msg: 'User Login successfully!',
          user,
        });
      } else {
        return res.status(401).json({
          success: false,
          msg: 'Password is wrong!',
        });
      }
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "An error occurred while logging in!",
        err: error.message,
      });
    }
  };
  

export { 
    register , 
    login 
};
