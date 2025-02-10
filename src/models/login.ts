class Login{
    private id_login:string
    private login:string;
    private password:string

    constructor(id_login:string, login:string, password:string){
        this.id_login = id_login;
        this.login = login;
        this.password = password;
    }

    get getIdLogin(){
        return this.id_login;
    }
    get getLogin(){
        return this.login;
    }
    get getPassowrd(){
        return this.password;
    }

    set setILogin(idLogin:string){
        this.login = this.id_login
    }

    set setLogin(login:string){
        this.login = login;
    }
    set  setPassword(password:string){
        this.password = password;
    }
}
export default Login;