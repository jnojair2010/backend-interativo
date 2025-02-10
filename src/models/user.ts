import Address from "./address"; // Adress é endereço

class User extends Address{
    private userId:string;
    private userName:string;
    private userSobreName:string;
    private email:string;
    private cpf:string;

    constructor(idAddress:string, userId:string, name:string, sobreName:string, email:string, cpf:string, logradouro:string, numero:string, bairro:string, cidade:string, uf:string, complemento:string){
        super(idAddress,logradouro, numero, bairro, cidade, uf, complemento);
        this.userId = userId;
        this.userName = name;
        this.userSobreName = sobreName;
        this.email = email;
        this.cpf = cpf;
    }

    get getUserid(){
        return this.userId;
    }
    get getNome(){
        return this.userName;
    }
    get getsobreName(){
        return this.userSobreName;
    }
    get getEmail(){
        return this.email;
    }
    get getCpf(){
        return this.cpf
    }

    set setUserid(id:string){
        this.userId = id;
    }
    set setNome(nome:string){
        this.userName = nome;
    }
    set setsobreName(sobreName:string){
        this.userSobreName = sobreName;
    }
    set setEmail(email:string){
        this.email = email;
    }
    set setCpf(cpf:string){
        this.cpf = cpf;
    }


}
export default User;