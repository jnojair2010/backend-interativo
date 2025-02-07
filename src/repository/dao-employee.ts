import Employee from '../models/employee/model-emploee'

class DaoEmployee{

    getDaoEmployee():Employee{

        const newEmployee = new Employee('','','',false,'','','','','','','','','','') 

        return newEmployee
      
    }


}

export default DaoEmployee;