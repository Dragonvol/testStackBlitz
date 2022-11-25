import { Human } from "./Human";

// -kliencie- unikalny numer, imię, nazwisko, adres, telefon, id_samochody, data wypożyczenia, ...);
export class Client extends Human{
  private carId : number;
  private startDate: Date;//data wypożyczenia
  private expectedtime: number;//oczekiwany czas zwrotu w dniach - normalna kwota
  private extendedTime: number;//przekroczony czas -normalna kwota *1,5
  private currentlyRenting: boolean;//
  constructor( id:number, name:string, surname:string, address:string, pNumber:number){
    super(id,name,surname,address,pNumber);
    this.carId=0;;
    this.startDate=new Date;
    this.expectedtime=0;
    this.extendedTime=0;
    this.currentlyRenting=false;
  }
  get CarId():number{
    return this.carId;
  }

  set CarId(carId:number){
    this.carId=carId;
  }
  get StartDate():Date{
    return this.startDate;
  }
  set StartDate(startDate:Date){
    this.startDate=startDate;
  }
  get ExpectedTime():number{
    return this.expectedtime;
  }
  set ExpectedTime(expectedtime:number){
    this.expectedtime=expectedtime;
  }
  get ExtendedTime():number{
    return this.extendedTime;
  }
  set ExtendedTime(expectedtime:number){
    this.expectedtime=expectedtime;
  }
  get CurrentlyRenting():boolean{
    return this.currentlyRenting;
  }
  set CurrentlyRenting(currentlyRenting:boolean){
    this.currentlyRenting=currentlyRenting;
  }
}

