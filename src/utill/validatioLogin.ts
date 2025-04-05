import express,{Express, Request, Response} from 'express';
//dtos
import  PostRequest from '../dtos/post.Request.Login'
import PostResponse from '../dtos/post.Reponse.login'

export const validationLogin = (req:Request, res:Response, next:any)=>{
     const login:PostRequest = req.body.email;
     const password:PostRequest = req.body.password;
       
        let tamanhoDaSenha = req.body.password.length;
        if(tamanhoDaSenha>5) next()
        if(tamanhoDaSenha<5) res.status(401).end()
}