export class Balance {
  private expenses!: number;
  private income!: number;

  constructor(...args: Array<any>) {
    if (args.length == 1) {
      const Cpy = args[0];
      Object.assign(this, Cpy);
    }
    else if (args.length == 2) {
      const expenses = args[0], income = args[1];
      this.expenses = expenses;
      this.income = income;
    }
  }
  get Expenses(): number {
    return this.expenses
  }
  set Income(income: number) {
    this.income += income;
  }
  get Income(): number {
    return this.expenses
  }
  set Expenses(expenses: number) {
    this.expenses += expenses;
  }
  get Balance(): number {
    return this.income - this.expenses;
  }
  reset()
  {
   this.income = 0;
   this.expenses = 0;
  }
}
