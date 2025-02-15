import { Router } from "express";
import Employee from "../models/employee/model-emploee";

const routesLogin = Router();

routesLogin.get('/login',(req, res)=>{
   
   
})
routesLogin.post('/login', (req, res)=>{
    const employee = Employee.prototype.getEmployee();
    employee.then((functionario)=>{
        res.send(functionario);
    })

})
routesLogin.delete('deleteLogin', (req, res)=>{

})
routesLogin.put('/putLogin',(req, res)=>{

})


export default routesLogin;