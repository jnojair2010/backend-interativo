import { Router } from "express";
import Employee from "../models/employee/model-emploee";
import express,{Express, Request, Response} from 'express';
//utill
import { validationLogin } from "../utill/validatioLogin";
import { verifyToken } from "../utill/manage_jwt";





const routesLogin = Router();



routesLogin.get('/login',(req, res)=>{
   
})
routesLogin.post('/login',validationLogin, (req:Request, res:Response)=>{
    const employee = Employee.prototype.getEmployee();
    employee.then((Token)=>{

        res.send({"jwt_token":Token?.token});
    })

})
routesLogin.delete('deleteLogin', (req, res)=>{

})
routesLogin.put('/putLogin',(req, res)=>{

})


export default routesLogin;