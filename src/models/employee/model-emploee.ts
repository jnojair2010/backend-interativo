import { Login } from '../login'
import { Company } from '../company'
import { User } from '../user'
import { Address } from '../address'

class Employee implements Address, Company, Login, User{
    id_user!: string
    userName!: string
    userSobreNome!: string
    cpf!: string | undefined
    endereco!: Address | undefined
    id!: string
    login!: string
    password!: string

    id_company!: string
    name!: string
    cnpj!: string

    id_Address!: string
    logradouro!: string
    cep!: string
    bairro!: string
    cidade!: string
    uf!: string
    complemento!: string

    getEmployeeUser(){

    }
    getEmployeeLogin(){

    }
    getEmployeeEndereco(){
        
    }
    

}