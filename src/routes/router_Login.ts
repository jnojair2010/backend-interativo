import { Router } from "express";

const routesLogin = Router();

routesLogin.get('/login',(req, res)=>{
   
    res.send(` entrou no login `)
})
routesLogin.post('/createLogin', (res, req)=>{

})
routesLogin.delete('deleteLogin', (req, res)=>{

})
routesLogin.put('/putLogin',(req, res)=>{

})


export default routesLogin;