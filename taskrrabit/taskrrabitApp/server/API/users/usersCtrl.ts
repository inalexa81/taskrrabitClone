import express from "express";
import bcrypt from "bcrypt";
import UserModel from "./usersModel";
import jwt from "jwt-simple";

const saltRounds = 10;

export async function register(req: express.Request, res: express.Response) {
    try {
        console.log("userCtrl");
        const {firstName, lastName, email, password,  phone, zipCode} = req.body;
        if(
            !firstName || !lastName || 
            !email || !password ||
             !phone || !zipCode
            ) 
        throw new Error("on file usersCtrl on function register: missing information "); 

        const hash = await bcrypt.hash(password, saltRounds);

        const userDB = new UserModel({firstName, lastName,email , password: hash, phone, zipCode });
        await userDB.save();
        console.log(userDB)

        const cookie = {userId: userDB._id};
        const secret = process.env.JWT_SECRET;
        if(!secret) throw new Error("On file userCtrl on function register: no secret"); 

        const JWTCookie = jwt.encode(cookie, secret)

        res.cookie("ID", JWTCookie);
        userDB.password = null;
        res.send({register: true, userDB})

        console.log(userDB)
        

    } catch (error) {
        res.send({register: false, error: error.message})
    }
}

// decoding cookie example - backend

export async function getUser(req: express.Request, res: express.Response) {
    try {
        const secret = process.env.JWT_SECRET;
        if (!secret) throw new Error("Couldn't load secret from .env");
  
        const { userID } = req.cookies;
        if (!userID) throw new Error("Couldn't find user from cookies");
  
        const decodedUserId = jwt.decode(userID, secret);
        const { userId } = decodedUserId;
  
        const userDB = await UserModel.findById(userId);
        if (!userDB) throw new Error(`Couldn't find user id with the id: ${userId}`);
        
        res.send({ userDB });
    } catch (error) {
        res.send({ error: error.message })
    }
  }