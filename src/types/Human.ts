export class Human{
  protected id!:number;
  protected name!: string;
  protected surname!:string;
  protected address!:string;
  protected pNumber!: number;

  constructor(...args:Array<any>)
  {
    if (args.length == 1) {
      const Cpy = args[0];
      Object.assign(this, Cpy);
    }
    else if (args.length == 5) {
      const id = args[0], name = args[1],  surname = args[2], address = args[3], pNumber = args[4];
      this.id = id;
      this.name = name;
      this.surname = surname;
      this.address = address;
      this.pNumber = pNumber;
    }
  }

  get Name():string{
    return this.name
  }

  set Name(name:string){
    this.name=name;
  }
  get Surname():string{
    return this.surname
  }

  set Surname(surname:string){
    this.surname=surname;
  }
  get Id():number{
    return this.id;
  }

  set Id(id:number){
    this.id=id;
  }
  get Address():string{
    return this.address;
  }

  set Address(address:string){
    this.address=address;
  }

  get PNumber():number{
    return this.pNumber;
  }

  set PNumber(pNumber:number){
    this.pNumber=pNumber;
  }
}
