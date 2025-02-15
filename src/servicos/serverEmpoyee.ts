import Employee from "../models/employee/model-emploee";
import {createToken} from '../utill/manage_jwt'

class ServerEmployee{

    employee: Employee[] =[];


    getGerarjwt(userId:number){
       return createToken(userId);
    }


}
export default ServerEmployee;