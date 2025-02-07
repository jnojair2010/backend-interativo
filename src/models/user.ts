import { Address } from "./address";

export interface User{
    id_user:string
    userName:string,
    userSobreNome:string,
    cpf?:string,
    endereco?:Address
}