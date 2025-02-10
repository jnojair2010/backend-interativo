import { Router } from "express";

const routes = Router();

routes.get('/Supplier',(req, res)=>{
    res.send("entrou no get Supplier")
})
routes.post('/createSupplier', (res, req)=>{

})
routes.delete('deleteSupplier', (req, res)=>{

})
routes.put('/putSupplier',(req, res)=>{

})


export default routes;