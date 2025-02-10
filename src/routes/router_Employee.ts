import { Router } from "express";
import Employee from '../models/employee/model-emploee';
const routes = Router();

routes.get('/employee',(req, res)=>{
    const employee = Employee.prototype.getEmployee();
    employee.then((functionario)=>{
        res.send(functionario);
    })
   
})
routes.post('/createEmployee', (res, req)=>{

})
routes.delete('deleteEmployee', (req, res)=>{

})
routes.put('/putEmployee',(req, res)=>{

})


export default routes;