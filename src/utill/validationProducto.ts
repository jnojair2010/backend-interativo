import express,{Express, Request, Response} from 'express';
import { verifyToken } from './manage_jwt';

export const validationGetAllProduto =(req:Request, res:Response, next:any)=>{
    const jwt_token = JSON.stringify(req.headers.authorization);

    let id = verifyToken(jwt_token);

    if(id) next()
    if(!id) res.status(401).end()

}

//Authorization