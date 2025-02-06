import { Router } from "express";

const routes = Router();

routes.get('/login',(req, res)=>{
    res.send("entrou no get login")
})
routes.post('/createLogin', (res, req)=>{

})
routes.delete('deleteLogin', (req, res)=>{

})
routes.put('/putLogin',(req, res)=>{

})


export default routes;