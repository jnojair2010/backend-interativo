import { Router } from "express";

const routes = Router();

routes.get('/employee',(req, res)=>{
    res.send("entrou no get employee")
})
routes.post('/createEmployee', (res, req)=>{

})
routes.delete('deleteEmployee', (req, res)=>{

})
routes.put('/putEmployee',(req, res)=>{

})


export default routes;