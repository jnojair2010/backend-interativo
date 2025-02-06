import { Address } from "./address";

export interface User{
    name:string,
    sobreNome:string,
    cpf?:string,
    endereco?:Address
}