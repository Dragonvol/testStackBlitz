import { Human } from "./Human";

// -pracowniku- unikalny numer, imię, nazwisko, adres, telefon, pensja, login, haslo;
export class Worker extends Human{
  private salary : number;
  private login : string;
  private password : string;
  constructor( id:number, name:string, surname:string, address:string, pNumber:number, salary:number, login:string, password:string){
    super(id,name,surname,address,pNumber);
    this.salary = salary;
    this.login = login;
    this.password = password;
  }
  get Salary():number{
    return this.salary;
  }
  set Salary(salary:number){
    this.salary=salary;
  }
  get Login():string{
    return this.login;
  }
  set Login(login:string){
    this.login=login;
  }
  get Password():string{
    return this.password;
  }
  set Password(password:string){
    this.password=password;
  }
}


