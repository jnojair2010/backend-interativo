import Employee from "../models/employee/model-emploee";
import {createToken} from '../utill/manage_jwt'

class ServerEmployee{

    employee: Employee[] =[];


    getGerarjwt(userId:number){
        let token = createToken(userId)
       return token;
    }


}
export default ServerEmployee;