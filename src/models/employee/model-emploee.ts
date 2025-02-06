import { Login } from '../login'
import { Company } from '../company'
import { User } from '../user'
import { Address } from '../address'

interface Employee{
    user:User
    login:Login,
    company:Company,
    address:Address
    function_company:string,
    estado:boolean,
    data_adminssion:string,
    data_demission:string

}