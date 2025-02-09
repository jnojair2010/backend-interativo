import DaoEmployee from '../../repository/dao-employee';
import User from '../user';


class Employee extends User{

    private login!:string; 
    private password!:string;
    private atribuicao!:string;
    private situacao!:string;
    private estadoDeLogin!:boolean;

    constructor(login:string, password:string, atribuicao:string, estadoDeLogin:boolean,nome:string, sobrenome:string, email:string, cpf:string, logradouro:string, numero:string, bairro:string, cidade:string, uf:string, complemento:string){
        super(nome, sobrenome, email, cpf, logradouro, numero, bairro, cidade, uf, complemento)
        this.estadoDeLogin = estadoDeLogin;
        this.login = login;
        this. password = password;
        this.atribuicao = atribuicao;
    }
    
    get getEstadoDeLogin(){
        return this.estadoDeLogin;
    }
    get getLogin(){
        return this.login;
    }
    get getPassword(){
        return this.password
    }
    get getAtribuicao(){
        return this.atribuicao
    }
    get getSituacao(){
        return this.situacao;
    }
    set setEstadoDeLogin(estadoDeLogin:boolean){
        this.estadoDeLogin = estadoDeLogin;
    }
    set setLogin(login:string){
        this.login = login;
    }
    set setPassword(password:string){
        this.password = password;
    }
    set setAtribuicao(atribuicao:string){
        this.atribuicao = atribuicao;
    }
    set setSituacao(situacao:string){
        this.situacao = situacao;
    }

    async getEmployee(){
        try{
            const employee = DaoEmployee.prototype.getDaoEmployee("jnojair2010@gmail.com","Lwx5nk@Lwx5nk");
            
            let functionario = await employee.then((response)=>{
                return response;
            })
            return functionario;
        }catch(error){
            console.log(` entrou no erro: ${error}`)
        }finally{
            console.log(` entrou no erro: finally`)
        }
        
    }


}
export default  Employee;