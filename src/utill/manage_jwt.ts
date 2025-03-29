import jwt, { JwtPayload } from 'jsonwebtoken';
import { jwtDecode } from "jwt-decode";
import 'dotenv/config';
import exp from 'constants';
import { verify } from 'crypto';
import { json } from 'stream/consumers';

const secret = "JNOJAIR";

export const createToken = (id:number)=>{
    const payload = {userId:id};
    const options = {expiresIn:300};
    const token = jwt.sign(payload,secret,options);
    return token;
}

export const decodeToken = (codeJwt:string)=>{
    try{
        const decode = jwtDecode<JwtPayload>(codeJwt)
        let userId = decode['userId'];
         return userId;
    }catch(error){
        console.log("entrou no erro do verificar decodeToken")
    }

}

export const verifyToken = (codeJwt:string)=>{
    let userId;
    try{
        let statusSecret = jwt.verify(codeJwt,secret,  (err, decoded)=>{
            userId = decodeToken(codeJwt);
            if(decoded) decoded;
    
        })
    }
    catch(error){
        console.log("entrou no erro do verificar jwt_token"+error)
    }
    
    return userId;

}
