import { Router } from "express";
import { login , register } from '../controllers/userController.js';
import { loginFieldValidator } from "../middleware/ValidateLoginFields.js"
import { registorFieldValidator } from "../middleware/ValidateRegisterFields.js"

const router = Router();

router.post("/register" , registorFieldValidator , register);

router.post("/login" , loginFieldValidator , login);

export {
    router
}





