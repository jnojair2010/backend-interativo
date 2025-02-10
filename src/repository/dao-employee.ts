import Employee from '../models/employee/model-emploee';
import pool from './databse';


class DaoEmployee{
    

    async getDaoEmployee(login:string, password:string){

        let conn;

        try{
            conn = await pool.getConnection();
            let row = await conn.query('SELECT * FROM USER WHERE EMAIL=?',[login])
            .then((response)=>{
                return response;
            })
            .then((respon)=>{
                return respon[0]
            })
            
       return row;

        }catch(error){
            console.log(` entrou no erro: ${error}`)
        }finally{
            console.log(` entrou no erro: finally`)
        }
      
    }

}

export default DaoEmployee;