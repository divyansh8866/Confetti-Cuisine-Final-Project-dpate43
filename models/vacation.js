"use strict";

const mongoose = require("mongoose"),
  { Schema } = require("mongoose");

var courseSchema = new Schema(
  {
    title: {
        type: String,
        required: true,
        unique: true
      },
    description: {
        type: String,
        required: true,
        trim:true,
        default:"None specified"
      },
    heroImage:{
        type:String,
        default:"HeroImage.jpg",
        required:true
      },
      
    cuisine: {
        type: String,
        //min: [0, "Course cannot have a negative number of students"],
        required: true,
        default:""
      },
    departureLocation: {
        type: String,
        required: true,
        default: ""
        
        
      },
    destination: {
        type: String,
        default: "None specified",
        required: true
       
      },
    
    returnDate:{
        type:Date,
        default:Date.now(),
        required: true
      },
      departureDate	: {
        type:Date,
        required: true,
        default:Date.now()
        
      },
      maxTravelers: {
        type: Number,
        default: 0,
        min: [0, "Vacation packages cannot have more than 25 travelers"],
        max: [25, "Vacation packages cannot have a negative number of travelers"]
      },
      cost: {
        type: Number,
        min: [0, "Vacation packages cannot have a negative cost"],
        default: 0,
      },
    },
    {
      timestamps: true
    }
);

module.exports = mongoose.model("vacCurlinary", courseSchema);
