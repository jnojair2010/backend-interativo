import { Caixa } from "../models/caixa";
import DaoCaixa from "../repository/dao_caixa";
class ServiceCaixa{

    static caixa:Caixa ={
        data:"",
        idEmployee:0
    };

    async insertCaixa(id:number, data:string){
        if(ServiceCaixa.caixa.idEmployee>0){
                console.log(" entrou no if devido uma nova solicitação")
        }else{
            let cx = await this.getCaixa(id, data);
            console.log(ServiceCaixa.caixa);
            console.log("entrou no else")
        }
        
       // DaoCaixa.prototype.createCaixaDao(id, data);

    }
    async getCaixa(id:number, data:string){
        let cx = await DaoCaixa.prototype.getCaixa(id, data);

        ServiceCaixa.caixa.data = cx[0]['data'];
        ServiceCaixa.caixa.idEmployee = cx[0]['idEmployee'];
        return cx;
    }

}
export default ServiceCaixa;