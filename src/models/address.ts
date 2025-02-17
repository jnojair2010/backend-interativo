class Address{
    private idAddres:string;
    private logradouro:string;
    private numero:string;
    private bairro:string;
    private cidade:string;
    private uf:string;
    private complemento:string;

   constructor( idAddress:string,logradouro:string, numero:string, bairro:string, cidade:string, uf:string, complemento:string){
        this.idAddres = idAddress;
        this.logradouro = logradouro;
        this.numero = numero;
        this.bairro = bairro;
        this.cidade = cidade;
        this.uf = uf;
        this.complemento = complemento;
   }
        get getIdAddress(){
            return this.idAddres;
        }
       get getLogradouro(){
           return this.logradouro;
       }
       get getNumero(){
           return this.numero;
       }
       get getBairro(){
           return this.bairro;
       }
       get getCidade(){
           return this.cidade;
       }
       get getUf(){
           return this.uf;
       }
       get getComplemento(){
           return this.complemento;
       }

       set setIdAdress(id:string){
        this.idAddres = id;
       }
       set setLogradouro(logradouro:string){
           this.logradouro = logradouro;
       }
       set setNumero(numero:string){
           this.numero = numero;
       }
       set setBairro(bairro:string){
           this.bairro = bairro;
       }
       set setCidade(cidade:string){
           this.cidade = cidade;
       }
       set setUf(uf:string){
           this.uf = uf;
       }
       set setComplemento(complemento:string){
           this.complemento = complemento;
       }

      
}
export default Address;