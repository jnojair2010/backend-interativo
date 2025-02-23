import { Router } from "express";
import Employee from "../models/employee/model-emploee";
import express,{Express, Request, Response} from 'express';
import  PostRequest from '../dtos/post.Request.Login'
import PostResponse from '../dtos/post.Reponse.login'

//utill
import { validationLogin } from "../utill/validatioLogin";
import { verifyToken } from "../utill/manage_jwt";

const routesLogin = Router();

routesLogin.get('/login',(req, res)=>{
   
})
routesLogin.post('/login',validationLogin, (req:Request, res:Response)=>{
        const loginIn:string = req.body.email;
        const password:string = req.body.password;

      

    const employee = Employee.prototype.getEmployee(loginIn, password);
    employee.then((Token)=>{
        if(Token?.token === false){
            res.status(401).end();
        } else{
            res.send({jwt_token:Token?.token});
        }
    })
})
routesLogin.delete('deleteLogin', (req, res)=>{

})
routesLogin.put('/putLogin',(req, res)=>{

})


export default routesLogin;