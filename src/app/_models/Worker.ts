import { Human } from "./Human";
import { Role } from "./role";

// -pracowniku- unikalny numer, imię, nazwisko, adres, telefon, pensja, login, haslo;
export class Worker extends Human{
  private salary : number;
  private username : string;
  private password : string;
  private rolee: Role;
  private Token: string;
  constructor( id:number, firstName:string, lastName:string, address:string, pNumber:number, salary:number, username:string, password:string){
    super(id,firstName,lastName,address,pNumber);
    this.salary = salary;
    this.username = username;
    this.password = password;
    this.rolee= Role.User;
    this.Token = "";

  }
  get Salary():number{
    return this.salary;
  }
  set Salary(salary:number){
    this.salary=salary;
  }
  get Username():string{
    return this.username;
  }
  set Username(username:string){
    this.username=username;
  }
  get Password():string{
    return this.password;
  }
  set Password(password:string){
    this.password=password;
  }
  get Rolee():Role{
    return this.rolee;
  }
  set Rolee(role:Role){
    this.rolee=role
  }
  get token():string{
    return this.Token;
  }
  set token(Token:string){
    this.Token=Token;
  }
}


