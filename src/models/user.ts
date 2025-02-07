import Address from "./address"; // Adress é endereço

class User extends Address{
    private nome!:string;
    private sobreName!:string;
    private email!:string;
    private cpf!:string;

    constructor(nome:string, sobreName:string, email:string, cpf:string, logradouro:string, numero:string, bairro:string, cidade:string, uf:string, complemento:string){
        super(logradouro, numero, bairro, cidade, uf, complemento);
        this.nome = nome;
        this.sobreName = sobreName;
        this.email = email;
        this.cpf = cpf;
    }


    get getNome(){
        return this.nome;
    }
    get getsobreName(){
        return this.sobreName;
    }
    get getEmail(){
        return this.email;
    }
    get getCpf(){
        return this.cpf
    }
    set setNome(nome:string){
        this.nome = nome;
    }
    set setsobreName(sobreName:string){
        this.sobreName = sobreName;
    }
    set setEmail(email:string){
        this.email = email;
    }
    set setCpf(cpf:string){
        this.cpf = cpf;
    }


}
export default User;