import Address from "./address";

class Company extends Address{
    private id_company:string;
    private nameCompany:string;
    private cnpj:string;
    private cpf:string;

    constructor(id_company:string, name:string, cnpj:string, cpf:string, logradouro:string, numero:string, bairro:string, cidade:string, uf:string, complemento:string){
        super(logradouro, numero, bairro, cidade, uf, complemento);
        this.id_company = id_company;
        this.nameCompany = name;
        this.cnpj = cnpj;
        this.cpf= cpf
    }

    get getIdCompany(){
        return this.id_company;
    }
    get getNameCompany(){
        return this.nameCompany;
    }
    get getCnpjCompany(){
        return this.cnpj
    }
    get getCpfCompany(){
        return this.cpf;
    }

    set setIdCompany(id:string){
        this.id_company =  id;
    }
    set setNameCompany(name:string){
        this.nameCompany= name;
    }
    set setCnpjCompany(cnpj: string){
        this.cnpj = cnpj;
    }
    set setCpfCompany(cpf:string){
       this.cpf = cpf;
    }


}
export default Company;