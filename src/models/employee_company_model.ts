import EmployeeCompanyDao from "../repository/dao_employee_company";

class EmployeeCompanyModel{


    async getEmployeeCompanyDao(idEmployee:number){

     let companys  =  await EmployeeCompanyDao.prototype.getAllCompany(idEmployee);
        return companys;
        

    }
    
}
export default EmployeeCompanyModel;