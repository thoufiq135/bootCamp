const mongoose = require("mongoose");
require("dotenv").config();

const innovationClubSchema = new mongoose.Schema(
  {
    schoolName: {
      type: String,
      required: true,
      trim: true,
    },
    emaiId: {
      type: String,
      required: true,
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      trim: true,
    },
    schoolAddress: {
      type: String,
      required: true,
      trim: true,
    },
    area: {
      type: String,
      required: true,
      trim: true,
    },
   district:{
      type:String,
default: "pending",
    },
   
    description: {
      type: String,
      required: true,
      trim: true,
    },
    
  },
  { timestamps: true }
);

const InnovationClub = mongoose.model(
  "InnovationClub",
  innovationClubSchema
);

async function connectdb() {
  try {
    console.log("mongoURI:", process.env.mongoURI);
    if(!process.env.mongoURI){
      return false
    }
    await mongoose.connect(process.env.mongoURI);
    console.log("Connected to DB");
    return true;
  } catch (e) {
    console.error("DB Connection Error:", e);
    return false;
  }
}

module.exports = { InnovationClub, connectdb };
, school address, area, district, description