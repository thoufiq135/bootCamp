const express = require("express");
const route = express.Router();
const {InnovationClub,connectdb}=require("./connectDB")
const {razorpay} = require("./connectRazorPay")


route.post("/innovationClub", async (req, res) => {
  try {
    console.log("came to route"
    )
    const { school_name, emai_id, phone_number, school_address, area, district, description } = req.body || {};

    if (!school_name|| !emai_id|| !phone_number ||!school_address ||!area|| !district || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newForm = await InnovationClub.create({
     schoolName: school_name, emaiId:emai_id, phoneNumber:phone_number,  schoolAddress:school_address, area: area, district:district, description:description
     
    });
    return res.status(201).json({
      message: "Form submitted successfully",
      data: newForm,
    
    });
  } catch (e) {
    console.log("error at form filling", e);
    return res.status(500).json({ message: "Server error" });
  }
});

module.exports = route;
