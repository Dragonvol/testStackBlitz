import { Car } from "./Car";
import { Human } from "./Human";

// -kliencie- unikalny numer, imię, nazwisko, adres, telefon, lista wypożyczonych samochodów;
export class Client extends Human{
  //private cars : Array<> | null;to do
  constructor( id:number, name:string, surname:string, address:string, pNumber:number){
    super(id,name,surname,address,pNumber);
    // this.cars=null;
  }
  // public getCars():Car | null{
  //   return this.cars;
  // }

  // public AddCar(car:Car){
  //   this.cars=car;
  // }
}
