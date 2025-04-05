import express,{Express, Request, Response} from 'express';
//dtos
import  PostRequest from '../dtos/post.Request.Login'
import PostResponse from '../dtos/post.Reponse.login'
import { verifyToken } from './manage_jwt';

export const validationUser = (req:Request, res:Response, next:any)=>{
    const jwt_token = JSON.stringify(req.headers.authorization);
        let id = verifyToken(jwt_token);
        if(id!=0)  next();
        if(!id) res.status(401).end();      
}