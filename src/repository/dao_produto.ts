
import pool from './databse';

class daoProduto{


    async getAllProduto(){
        const conn = await pool.getConnection();

        try{

            

            let rows = await  conn.query("select * from producto",[])
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
            console.log("entrou no finaly do getAllProduto")
            conn.end()
        }

    }
}

export default daoProduto;