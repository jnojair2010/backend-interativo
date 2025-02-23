import { Router } from "express";
import { validationGetAllProduto } from "../utill/validationProducto";
import daoProduto from "../repository/dao_produto";

const routes = Router();

routes.get('/getProductDetails', (req, res)=>{

});
routes.post('/getAllproducto', validationGetAllProduto, (req, res)=>{

    const getAllproducto = daoProduto.prototype.getAllProduto();

    getAllproducto.then((listProdutos)=>{
        console.log(JSON.stringify(listProdutos))
    })

    res.send("get todos os produtos")
});
routes.post('cadProduct', (req, res)=>{

});
routes.put('/updateProduct', (req, res)=>{

});
routes.delete('deleteProduct',(req, res)=>{

});
export default routes;