
import pool from './databse';

class daoProduto{

    async getAllProduto(){
       let conn = await pool.getConnection();

        try{
           
            let rows = await conn.query("select * from producto",[])
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
        conn.end();
    }
}

export default daoProduto;