/** @format */

const mongoose = require("mongoose");

const SchemaUser = new mongoose.Schema(
<<<<<<< HEAD
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

=======
  {
    nom: {
      type: String,
      trim: true,
      required: true,
>>>>>>> 367f82c0c2e5731f0e59e07139549e7caafb2c03
    },
    prenom: {
      type: String,
      trim: true,
      required: true,
    },

    email: {
      type: String,
      trim: true,
      unique: true,
      required: true,
      lowercase: true,
    },
    tel: {
      type: Number,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// exportation du model
module.exports = mongoose.model("User", SchemaUser);
