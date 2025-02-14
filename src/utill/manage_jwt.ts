import jwt from 'jsonwebtoken';


export const createToken = (id:number)=>{
    const payload = {userId:id};
    const secret = "my-secret-key";
    const options = {expiresIn:300};
    const token = jwt.sign(payload,secret,options);

    return token;
}