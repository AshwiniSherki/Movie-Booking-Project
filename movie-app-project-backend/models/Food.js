import mongoose from "mongoose";

const foodSchema= new mongoose.Schema(
    {
        itemsName:
        {
            type:String,
            required:true
        },

        price:
        {
            type:String,
            required:true
        },

        quantity:
        [{ type: String, required: true }],
        available:
        {
           
           type:Boolean,
           required:true
        }

        }
        
)
export default mongoose.model("Food",foodSchema);
