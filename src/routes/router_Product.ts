import { Router } from "express";
import { validationGetAllProduto } from "../utill/validationProducto";
import daoProduto from "../repository/dao_produto";

const routes = Router();

routes.get('/getProductDetails', (req, res)=>{

});
routes.get('/getAllproducto', (req, res)=>{
    let idCompany= req.query['idCompany'];
    const getAllproducto = daoProduto.prototype.getAllProduto(Number(idCompany));

    getAllproducto.then((listProdutos)=>{

        res.send(listProdutos);
    })
      
});
routes.post('cadProduct', (req, res)=>{

});
routes.put('/updateProduct', (req, res)=>{

});
routes.delete('deleteProduct',(req, res)=>{

});
export default routes;