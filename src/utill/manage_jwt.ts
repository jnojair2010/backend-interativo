import jwt, { JwtPayload } from 'jsonwebtoken';
import { jwtDecode } from "jwt-decode";
import 'dotenv/config';
import exp from 'constants';
import { verify } from 'crypto';
import { json } from 'stream/consumers';


export const createToken = (id:number)=>{
    const payload = {userId:id};
    const secret = "JNOJAIR";
    const options = {expiresIn:300};
    const token = jwt.sign(payload,secret,options);

    decodeToken(token);

    return token;
}

export const decodeToken = (codeJwt:string)=>{
    const decode = jwtDecode<JwtPayload>(codeJwt)
      console.log(decode['userId']);
      console.log(decode.exp)
}
