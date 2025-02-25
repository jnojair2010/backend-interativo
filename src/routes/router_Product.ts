import { Router } from "express";
import { validationGetAllProduto } from "../utill/validationProducto";
import daoProduto from "../repository/dao_produto";

const routes = Router();

routes.get('/getProductDetails', (req, res)=>{

});
routes.post('/getAllproducto', validationGetAllProduto, (req, res)=>{

    const getAllproducto = daoProduto.prototype.getAllProduto();

    getAllproducto.then((listProdutos)=>{

        res.send(listProdutos[0]);
    })

});
routes.post('cadProduct', (req, res)=>{

});
routes.put('/updateProduct', (req, res)=>{

});
routes.delete('deleteProduct',(req, res)=>{

});
export default routes;