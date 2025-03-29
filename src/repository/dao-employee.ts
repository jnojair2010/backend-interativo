import Employee from '../models/employee/model-emploee';
import pool from './databse';


class DaoEmployee{
    

    async getLogin(login:string, password:string){

        let conn;
        conn = await pool.getConnection();

        try{
           
            let row = await conn.query('SELECT * FROM login WHERE login=? and password=?',[login, password])
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
        conn.end();
    }
    async getEmployeeForLogin(userId:number){
        let conn;
        conn = await pool.getConnection();
        try{
           
            let row  = await conn.query('SELECT * FROM employee where userId=? ',[userId])
            .then((response)=>{
                return response;
            }).then((respon)=>{
                return respon[0]
            })
            return row;
        }
        catch(err){
            console.log(` entrou no erro get employee for login: ${err}`)
        }finally{

        }
        conn.end();
    }

}

export default DaoEmployee;