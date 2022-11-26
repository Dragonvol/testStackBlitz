// -samochodzie- id, marka, model, cena za dobę, rok produkcji,  cena zakupu, czy samochód jest dostępny.
export class Car{
  private id!:number;
  private brand!: string;
  private model!:string;
  private pricePerDay!:number;
  private prodData!: Date;
  private puschare!: number;
  private available: boolean=true;

  constructor(...args:Array<any>)
  {
    if (args.length == 1) {
      const Cpy = args[0];
      Object.assign(this, Cpy);
    }
    else if (args.length == 6) {
      const id = args[0], brand = args[1],  model = args[2], pricePerDay = args[3], prodData = args[4], puschare = args[5];
      this.id = id;
      this.brand = brand;
      this.model = model;
      this.pricePerDay = pricePerDay;
      this.prodData = prodData;
      this.puschare = puschare;
    }
  }
  get Id():number{
    return this.id;
  }

  set Id(id:number){
    this.id=id;
  }
  get Brand():string{
    return this.brand;
  }

  set Brand(brand:string){
    this.brand=brand;
  }

  get Model():string{
    return this.model;
  }

  set Model(model:string){
    this.model=model;
  }
  get PricePerDay():number{
    return this.pricePerDay;
  }

  set PricePerDay(pricePerDay:number){
    this.pricePerDay=pricePerDay;
  }
  get ProdData():Date{
    return this.prodData;
  }

  set ProdData(prodData:Date){
    this.prodData=prodData;
  }
  get Puschare():number{
    return this.puschare;
  }

  set Puschare(puschare:number){
    this.puschare=puschare;
  }
  get Available():boolean{
    return this.available;
  }

  set Available(available:boolean){
    this.available=available;
  }
}
