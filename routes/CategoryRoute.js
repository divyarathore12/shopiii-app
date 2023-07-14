import  express  from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {  categoryControlller, createCategoryController, deleteCategoryController, singleCategoryController, updateCategoryController } from "../controller/categoryController.js";
const router=express.Router();
router.post("/create-category",requireSignIn,isAdmin,createCategoryController)
//update category
router.put('/update-category/:id',requireSignIn,isAdmin,updateCategoryController)
//all category
router.get('/get-category',categoryControlller)
router.get('/single-category/:slug',singleCategoryController)
//delete category
router.get('/delete-category/:id',requireSignIn,isAdmin,deleteCategoryController);
export default router