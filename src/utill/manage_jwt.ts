import jwt from 'jsonwebtoken';
import 'dotenv/config';


export const createToken = (id:number)=>{
    const payload = {userId:id};
    const secret = process.env.SECRETE;
    const options = {expiresIn:300};
    const token = jwt.sign(payload,secret,options);

    return token;
}