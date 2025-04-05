import pool from './databse';

class EmployeeCompanyDao{

    async getAllCompany(idEmployee:number){
        const conn = await pool.getConnection();

        try{

            let rows = await  conn.query("select e.idEmployee, e.idCompany,c.companyName, c.cnpj from employee_company as e inner join company as c on e.idCompany = c.idCompany where e.idEmployee =?",[idEmployee])
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
export default EmployeeCompanyDao;