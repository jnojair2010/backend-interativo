import { Router } from "express";

const routes = Router();

routes.get('/Sales',(req, res)=>{
    res.send("entrou no get Sales")
})
routes.post('/createSales', (res, req)=>{

})
routes.delete('deleteSales', (req, res)=>{

})
routes.put('/putSales',(req, res)=>{

})


export default routes;