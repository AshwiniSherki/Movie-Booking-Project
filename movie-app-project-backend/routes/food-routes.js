import express from 'express';
import { addItems, getAllFoodItems, getFoodByItemsName } from '../Backend/controllers/food-controller.js';
 
const foodRouter=express.Router();

foodRouter.post("/",addItems);
foodRouter.get("/",getAllFoodItems);
foodRouter.get("/:item",getFoodByItemsName);

export default foodRouter;