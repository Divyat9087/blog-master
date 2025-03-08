import express from "express";
import nodemailer from "nodemailer";
import sendEmail from "../utils/sendemail.js";

export const getFeedback = (req, res) => {
    res.render("contact");
}

export const createFeedback = (req,res)=>{
    try {
        const {name,email,feedbac,ratings} = req.body;
        sendEmail({
            name,
            email,
            feedback,
            ratings
        });
        res.status(200).json({
            success:true,
            message:"Email sent successfully"
        });
        
    } catch (error) {
        console.log(error);
        
        res.status(500).json({
            message: "Error sending email"
        });
    }
}