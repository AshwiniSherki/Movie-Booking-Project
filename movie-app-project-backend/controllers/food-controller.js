import Food from "../../models/Food.js";
import jwt from "jsonwebtoken";
export const addItems= async(req,res,next)=>
    {
        const getToken=req.headers.authorization.split(" ")[1];
        if(!getToken && getToken.trim()==="")
        {
           return res.status(404).json({message:"Token not found"})
        }
        let adminId;
        jwt.verify(getToken,process.env.SECRET_KEY,(err,decrypted)=>
         {  
             if(err)
                 {
                     return res.status(400).json({message: `${err.message}`})
                 }
             else{
                  adminId = decrypted.id;
                  return;
             }
     }
     )
    const{itemsName,price,quantity,available}=req.body;
    
     
       let food;
         try
         {
          
           
          food=new Food({itemsName,price,quantity,available});
          
           food= await food.save();
           
         }
         catch(err)
         {
            return next(err);
         }

         if(!food)
         {
            return res.status(500).json({message:"Food items not available"});
         }
         return res.status(201).json({food});
    };
    export const getAllFoodItems=async(req,res,next)=>
        {
         let food;
         try
         {
            food=await Food.find();
        
        
        
         }
         catch(err)
         {
            return  next(err);
         }
         if(!food)
            {
                return res.status(500).json({message:"No movie found"})
            }
            return res.status(200).json({food});
        };
        
        export const getFoodByItemsName = async(req,res,next)=>
        {
           const item =req.params.itemsName;
           let food;
           try
           {
             food=await Food.findOne({item})
           }
           catch(err)
           {
            return next(err)
           }
        
           if(!food)
            {
                return res.status(404).json({message:"Movie not found"});
            }
             return res.status(201).json({food});
        }
        
        
        
        

   