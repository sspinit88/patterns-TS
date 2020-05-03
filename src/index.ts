/*
* Описываем интерфейс напитков
* */

interface Beverage {

  description: string;

  getDescription(): string;

  cost(): number;

  display(): void
}

/*
* Класс декоратора
* */

class CondimentDecorator implements Beverage {
  description: string = 'Unknown Beverage';

  cost(): number {
    return 0;
  }

  getDescription(): string {
    return this.description;
  }

  display(): void {
    console.log(`${this.getDescription()}, cost: ${this.cost()}$`);
  }

}

/*
* Описываем классы разныйх кофейных напитков.
* */

class Espresso implements Beverage {
  description: string = 'Espresso';
  price: number = 1.28;

  cost(): number {
    return this.price;
  }

  getDescription(): string {
    return this.description;
  }

  display(): void {
    console.log(`${this.getDescription()}, cost: ${this.cost()}$`);
  }
}

class HouseBlend implements Beverage {
  description: string = 'House Blend Coffee';
  price: number = .89;

  cost(): number {
    return this.price;
  }

  getDescription(): string {
    return this.description;
  }

  display(): void {
    console.log(`${this.getDescription()}, cost: ${this.cost()}$`);
  }
}

class DarkRoast implements Beverage {
  description: string = 'Dark Roast';
  price: number = 1.59;

  cost(): number {
    return this.price;
  }

  getDescription(): string {
    return this.description;
  }

  display(): void {
    console.log(`${this.getDescription()}, cost: ${this.cost()}$`);
  }
}

class Decaf implements Beverage {
  description: string = 'Decaf';
  price: number = 1.25;

  cost(): number {
    return this.price;
  }

  getDescription(): string {
    return this.description;
  }

  display(): void {
    console.log(`${this.getDescription()}, cost: ${this.cost()}$`);
  }
}

/*
* Декораторы
* */

class Mocha extends CondimentDecorator {
  beverage: Beverage;
  price: number = .20;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription(): string {
    return `${this.beverage.getDescription()}, Mocha`;
  }

  cost(): number {
    return this.beverage.cost() + this.price;
  }

  display(): void {
    console.log(`${this.getDescription()}, cost: ${this.cost()}$`);
  }
}

class Soy extends CondimentDecorator {
  beverage: Beverage;
  price: number = .50;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription(): string {
    return `${super.getDescription()}, Soy`;
  }

  cost(): number {
    return this.beverage.cost() + this.price;
  }

  display(): void {
    console.log(`${this.beverage.getDescription()}, cost: ${this.cost()}$`);
  }
}

class Whip extends CondimentDecorator {
  beverage: Beverage;
  price: number = .45;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  cost(): number {
    return this.beverage.cost() + this.price;
  }

  display(): void {
    console.log(`${this.beverage.getDescription()}, cost: ${this.cost()}$`);
  }
}

/*
* пример
* */

let beverage1 = new Espresso();
beverage1.display();
beverage1 = new Mocha(beverage1);
beverage1.display();

beverage1 = new Whip(beverage1);
beverage1.display();


let beverage2 = new DarkRoast();
beverage2.display();

beverage2 = new Soy(beverage2);
beverage2.display();
