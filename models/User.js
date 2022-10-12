const mongoose = require("mongoose")

const SchemaUser = new mongoose.Schema(
    {
            nom : {
                type: String,
                trim: true,
                required : true,
            },
            prenom : {
                type: String,
                trim: true,
                required : true,
            },

            email : {
                type: String,
                trim: true,
                unique : true,
                required : true,
                lowercase : true,
            },
            tel : {
                type : Number,
            },
            password : {
                type : String,
                required : true,
            }

    },
    {timestamps : true }
);

// exportation du model 
module.exports = mongoose.model("User", SchemaUser)