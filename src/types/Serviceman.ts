import { Data } from "@angular/router";
import { Car } from "./Car";
import { Worker } from "./Worker";

// -serwisancie- imię, nazwisko, adres, telefon, pensja, lista aut które serwisował;
export class Serviceman extends Worker{
  private cars!:Array<Car>;
  constructor( id:number, name:string, surname:string, address:string, pNumber:number, birthDate: Data, salary:number, login:string, password:string,cars:Array<Car>){
    super(id,name,surname,address,pNumber,birthDate,salary,login,password);
    this.cars=cars;
  }
  // get Cars():Array<Car>{
  //   return this.cars;
  // }

  // set Cars(car:Car){
  //   this.cars.push(car);
  // }
}
