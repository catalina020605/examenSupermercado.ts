// helpers/jwtHelper.ts
import jwt from 'jsonwebtoken';
import dotenv from "dotenv"
dotenv.config();

const secretKey = process.env.SECRET_KEY || "cata02";

const generateToken = (email: string) => {   
    return jwt.sign({ email }, secretKey, { expiresIn: '24h' });
};

export { secretKey, generateToken };
