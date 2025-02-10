import { Router } from "express";

const routes = Router()

routes.get('/', (req, res)=>{
    console.log(" requisitou a pagina raiz")
 res.send(" hello word");
})


export default routes;