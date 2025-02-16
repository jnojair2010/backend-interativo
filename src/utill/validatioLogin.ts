import express,{Express, Request, Response} from 'express';
//dtos
import  PostRequest from '../dtos/post.Request.Login'
import PostResponse from '../dtos/post.Reponse.login'

export const validationLogin = (req:Request, res:Response, next:any)=>{
     const login:PostRequest = req.body.login;
        const password:PostRequest = req.body.password;
        let tamanhoDaSenha = req.body.password.length;
        if(tamanhoDaSenha<10) next()
        if(tamanhoDaSenha>10) res.status(401).end()
}