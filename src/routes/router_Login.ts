import { Router } from "express";
import Employee from "../models/employee/model-emploee";
import express,{Express, Request, Response} from 'express';
import  PostRequest from '../dtos/post.Request.Login'
import PostResponse from '../dtos/post.Reponse.login'

//utill
import { validationLogin } from "../utill/validatioLogin";
import { verifyToken } from "../utill/manage_jwt";
import { validationUser } from "../utill/validationUser";

const routesLogin = Router();

routesLogin.get('/getUserSystema',validationUser,(req:Request, res:Response)=>{
    const jwt_token = JSON.stringify(req.headers.authorization);
    let id = verifyToken(jwt_token);
    const employee = Employee.prototype.getEmployeeId(Number(id));
        employee.then((response)=>{
            res.send(response)
        })
   
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