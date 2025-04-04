
import pool from './databse';

class daoProduto{


    async getAllProduto(id:number){
        const conn = await pool.getConnection();

        try{

            let rows = await  conn.query("select * from producto where idCompany=?",[id])
            .then((response)=>{
                return response;
            })
            .then((respon)=>{
                return respon
            })
            
       return rows;

        }catch(error){
            console.log(` error: ${error}`)
        }finally{
         
            conn.end()
        }

    }
}

export default daoProduto;