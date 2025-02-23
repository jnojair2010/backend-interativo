import pool from './databse';

class daoProduto{

    async getAllProduto(){
        let conn;

        try{
            conn = await pool.getConnection();
            let rows = await conn.query("select * from producto",[])
            .then((response)=>{
                console.log(response)
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
        }

    }
}

export default daoProduto;