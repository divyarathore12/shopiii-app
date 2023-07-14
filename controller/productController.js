import productModel from "../models/productModel.js";
import fs from "fs";
import slugify from "slugify";
export const createProductController=async(req,res)=>{
try{
    const {name,slug,description,price,category,quantity,shipping}=req.fields;
    const {photo}=req.files;
    //validation
    switch(true)
    {
        case !name:
        return res.statu(500).send({error:"Name is required"})
        case !description:
        return res.statu(500).send({error:"description is required"})
        case !price:
        return res.statu(500).send({error:"price is required"})
        case !category:
        return res.statu(500).send({error:"category is required"})
        case !quantity:
        return res.statu(500).send({error:"quantity is required"})
        case photo&&photo.size>1000000:
        return res.statu(500).send({error:"Photo should be less than 1 MB"})

 }
  const products= new productModel({...req.fields,slug:slugify(name)})
  if(photo)
  {
    products.photo.data=fs.readFileSync(photo.path)
    products.photo.contentType=photo.type
  }
  await products.save();
  res.status(200).send({
    message:"Product created Successfully",
    success:true,
    products
  })
}
catch(error)
{
    console.log(error);
    res.statu(500).send({
        message:"error in creating category",
        success:false,
        error
    })
}
}