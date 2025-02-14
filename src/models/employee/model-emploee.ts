import DaoEmployee from '../../repository/dao-employee';
import Login from '../login';
import User from '../user';


class Employee extends User{

    private atribuicao:string;
    private situacao:string;
    private estadoDeLogin:boolean;
    private codeJwt:string;

     mLogin = new Login("","","")

    constructor(
        situacao:string,
        idAddress:string,
        estadoDeLogin:boolean,
        codeJwt:string,
        atribuicao:string,
        userId:string,
        userName:string,
        sobrenome:string,
        email:string,
        cpf:string,
        logradouro:string,
        numero:string,
        bairro:string,
        cidade:string,
        uf:string,
        complemento:string){

        super(idAddress, userId, userName, sobrenome, email, cpf, logradouro, numero, bairro, cidade, uf, complemento);
        this.codeJwt = codeJwt;
        this.situacao = situacao;
        this.estadoDeLogin = estadoDeLogin;
        this.atribuicao = atribuicao;
    }
    
    get getEstadoDeLogin(){
        return this.estadoDeLogin;
    }

    get getAtribuicao(){
        return this.atribuicao
    }
    get getSituacao(){
        return this.situacao;
    }


    get getLogin(){
        return this.mLogin.getIdLogin;
    }
    get getPassword(){
        return this.mLogin.getPassowrd;
    }
    get getIdLogin(){
        return this.mLogin.getIdLogin;
    }
    set setLogin(login:string){
        this.mLogin.setLogin = login;
    }
    set setPassword(password:string){
        this.mLogin.setPassword = password;
    }
    set setIdLogin(id_login:string){
        this.mLogin.setILogin = id_login;
    }



    set setEstadoDeLogin(estadoDeLogin:boolean){
        this.estadoDeLogin = estadoDeLogin;
    }
    set setAtribuicao(atribuicao:string){
        this.atribuicao = atribuicao;
    }
    set setSituacao(situacao:string){
        this.situacao = situacao;
    }

    

    async getEmployee(){

        

        try{
            const employee = DaoEmployee.prototype.getDaoEmployee("jnojair","Lwx5nk@Lwx5nk");
            
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