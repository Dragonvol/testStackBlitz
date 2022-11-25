import { Data } from "@angular/router";
import { Human } from "./Human";

// -pracowniku- imię,  nazwisko, data urodzenia, adres, telefon,pensja;
export class Worker extends Human{
  private birthDate! : Data;
  private salary! : number;
  private login! : string;
  private password! : string;
  constructor( id:number, name:string, surname:string, address:string, pNumber:number, birthDate: Data, salary:number, login:string, password:string){
    super(id,name,surname,address,pNumber);
    this.birthDate = birthDate;
    this.salary = salary;
    this.login = login;
    this.password = password;
  }
  get BirthDate():Data{
    return this.birthDate;
  }

  set BirthDate(birthDate:Data){
    this.birthDate=birthDate;
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


