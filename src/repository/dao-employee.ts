
import Employee from '../models/employee/model-emploee';
import pool from './databse';


class DaoEmployee{
    

    async getLogin(login:string, password:string){

        let conn
        conn = await pool.getConnection();

        try{
        
            let row = await conn.query('SELECT * FROM login WHERE login=? and password=?',[login, password])
            .then((response)=>{
                return response[0];
            })
            .then((respon)=>{
                return respon
            })
            
       return row;

        }catch(error){
            console.log(` entrou no erro: ${error}`)
        }finally{
            console.log(` entrou no erro: finally`)
            conn.end()
        }
      
    }
    async getEmployeeForLogin(userId:number){
        let conn;
        conn = await pool.getConnection();
        try{
            let row  = await conn.query("select * from employee where userId=?",[userId])
            .then((response)=>{
                return response[0];
            }).then((respon)=>{
            
                return respon
            })
            return row;
        }
        catch(err){
            console.log(` entrou no erro get employee for login: ${err}`)
        }finally{
            conn.end()
        }
    }
    async getUserSystema(userId:number){
        let conn;
        conn = await pool.getConnection();
        try{
            console.log(" o id no esql é: "+userId)
            let row  = await conn.query("select e.idEmployee, e.assignment, e.situation, e.idLogin, e.userId, u.userName, u.userSobreName, u.email, u.cpf from employee as e INNER JOIN user as u ON e.userId = u.userId where e.userId=?",[userId])
            .then((response)=>{
                return response[0];
            }).then((respon)=>{
            
                return respon
            })
            return row;
        }
        catch(err){
            console.log(` entrou no erro get employee for user system: ${err}`)
        }finally{
            conn.end()
        }
    }


}

export default DaoEmployee;