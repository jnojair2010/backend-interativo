import pool from "./databse";

 class DaoCaixa{

    async createCaixaDao(idEmpoyee:number, dt:string){
        const conn = await pool.getConnection();
        try{
            conn.query("insert into caixa (data, idEmployee) value (?,?) ",[dt,idEmpoyee])

        }catch(erro){
            console.log(` erro ao inserir o caixa`)
        }finally{
            conn.end()
        }
    }

    async getCaixa(idEmpoyee:number, dt:string){
        const conn = await pool.getConnection();
        try{
            let row = await conn.query('select * from caixa where data=? and idEmployee=?',[dt, idEmpoyee])
            .then((response)=>{
                return  response;
            })  

            return row;

        }catch(erro){

        }finally{
            conn.end()
        }
    }

    async salvarfundoTroco(valor:number, data:string, idCaixa:number){
        const conn = await pool.getConnection();
        try{



        }catch(erro){

        }finally{
            conn.end()
        }
    }
 }
 export default DaoCaixa;