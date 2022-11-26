export class Human{
  protected id:number;
  protected firstName: string;
  protected lastName:string;
  protected address:string;
  protected pNumber: number;

  constructor(id:number, firstName:string, lastName:string, address:string, pNumber:number)
  {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.pNumber = pNumber;
    // if (args.length == 1) {
    //   const Cpy = args[0];
    //   Object.assign(this, Cpy);
    // }
    // else if (args.length == 5) {
    //   const id = args[0], firstName = args[1],  lastName = args[2], address = args[3], pNumber = args[4];
    //   this.id = id;
    //   this.firstName = firstName;
    //   this.lastName = lastName;
    //   this.address = address;
    //   this.pNumber = pNumber;
  }

  get FirstName():string{
    return this.firstName;
  }

  set FirstName(firstName:string){
    this.firstName=firstName;
  }
  get LastName():string{
    return this.lastName
  }

  set LastName(lastName:string){
    this.lastName=lastName;
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
