class List<T> {
  private data: T[];
  constructor(...elements: T[]) {
    this.data = elements;
  }

  add(element: T): void {
    this.data.push(element);
  }

  addMultiple(...element: T[]): void {
    this.data.push(...element);
  }

  getAll(): T[] {
    return this.data;
  }
}
let number = new List<number>(1, 2, 3);
number.add(2);
number.addMultiple(1, 2, 3);
console.log(number.getAll());

let random = new List<number | string>(1, "satu");
console.log(random.getAll());
