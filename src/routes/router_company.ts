import { Router } from "express";
import EmployeeCompanyModel from "../models/employee_company_model";
const routesCompany = Router();

routesCompany.get('/getAllCompanyEmployee',async (req, res)=>{
    let idEmployee= req.query['idEmployee'];
   let row  = await EmployeeCompanyModel.prototype.getEmployeeCompanyDao(Number(idEmployee))
    res.send(row)
   
})
routesCompany.post('/cadCompany', (res, req)=>{

})
routesCompany.delete('getCompany', (req, res)=>{

})
routesCompany.put('/updateConpany',(req, res)=>{

})
routesCompany.put('/deleteCompany',(req, res)=>{

})

export default routesCompany;