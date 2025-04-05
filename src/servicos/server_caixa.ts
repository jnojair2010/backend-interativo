import { Caixa } from "../models/caixa";
import DaoCaixa from "../repository/dao_caixa";
class ServiceCaixa{

    static caixa:Caixa ={
        data:"",
        idEmployee:0,
        idCaixa:0
    };

    async insertCaixa(id:number, data:string){
        console.log("Entrou no metodo de inser caixa da classe service")
                 await  DaoCaixa.prototype.createCaixaDao(id, data);                                                           
    }
    async getCaixa(id:number, data:string):Promise<boolean>{
        let cx = await DaoCaixa.prototype.getCaixa(id, data);
        
        try{
            if(cx.length>0){
                ServiceCaixa.caixa.data = cx[0]['data'];
                ServiceCaixa.caixa.idEmployee = cx[0]['idEmployee'];
                ServiceCaixa.caixa.idCaixa =cx[0]['idCaixa']
                
            }else{
                let cx1 =  await DaoCaixa.prototype.getCaixaForDay(data);

                if(cx1.length>0){
                    ServiceCaixa.caixa.data = cx[0]['data'];
                    ServiceCaixa.caixa.idEmployee = cx[0]['idEmployee'];
                    ServiceCaixa.caixa.idCaixa =cx[0]['idCaixa']
                    console.log("entrou no segundoif da consulta de caixa apenas por data")
                }
                else{
                   await ServiceCaixa.prototype.insertCaixa(id, data);
                    await DaoCaixa.prototype.getCaixa(id, data);
                        ServiceCaixa.caixa.data = cx[0]['data'];
                        ServiceCaixa.caixa.idEmployee = cx[0]['idEmployee'];
                        ServiceCaixa.caixa.idCaixa =cx[0]['idCaixa']
                }
            }
            
            return true
        }catch(erro){
            console.log("entrou no get caixa catch"+erro)
          return false;  
        }

    }
    async inserirFunTroco(id:number, data:string, vFTroco:number){
        
      let cx =  ServiceCaixa.prototype.getCaixa(id, data)
      if(ServiceCaixa.caixa.idCaixa>0) {
        await DaoCaixa.prototype.salvarfundoTroco(vFTroco,data,ServiceCaixa.caixa.idCaixa)
      }

    }

    getAllFTroco(data:string){

    }

}
export default ServiceCaixa;