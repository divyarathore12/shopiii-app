import  express from 'express';
import { registerController,loginController,testController,forgotPasswordController, } from '../controller/authController.js';
import { requireSignIn ,isAdmin, } from '../middlewares/authMiddleware.js';
const router=express.Router();
//routing
router.post('/register',registerController);
// LOGIN 
router.post('/login',loginController);
//test routes
router.get('/test',requireSignIn,isAdmin,testController)
//forgot password
router.post('/forgot-password',forgotPasswordController)
// protected routh auth
router.get("/user-auth",requireSignIn,(req,res)=>{
    res.status(200).send({ok:true});
})
//admin route
router.get("/admin-auth",requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok:true});
})

export default router;