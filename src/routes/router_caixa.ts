import { Router } from "express";
import Employee from "../models/employee/model-emploee";
import express,{Express, Request, Response} from 'express';
import  PostRequest from '../dtos/post.Request.Login'
import PostResponse from '../dtos/post.Reponse.login'

import { strict } from "assert";
import ServiceCaixa from "../servicos/server_caixa";

const routerCaixa= Router();

routerCaixa.post("/cadFundTroco",async (req, res)=>{
    let fundoTrco = req.body.fundoOne;
    let idEmployee = req.body.idEmployee;
    let dt = new Date();
    let ano = dt.getFullYear();
    let mes = dt.getMonth()+1;
    let dia = dt.getDate();
    let data = `${ano}/${mes}/${dia}`;

    ServiceCaixa.prototype.insertCaixa(idEmployee, data);
        //DaoCaixa.prototype.salvarfundoTroco(fundoTrco, data, idDoCaixa)

    console.log(` id employee: ${dia}`)
    res.send("fundo de troco");
})
routerCaixa.post("/cadSangria",(req, res)=>{

})

routerCaixa.get("getAllFTroco",(req, res)=>{

})

export default routerCaixa;