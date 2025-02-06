import { Router } from "express";

const routes = Router();

routes.get('/getProductDetails', (req, res)=>{

});
routes.get('/getAllproduct', (req, res)=>{
    res.send("get todos os produtos")
});
routes.post('cadProduct', (req, res)=>{

});
routes.put('/updateProduct', (req, res)=>{

});
routes.delete('deleteProduct',(req, res)=>{

});
export default routes;