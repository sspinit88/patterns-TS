/*
* описывем интерфейсы
* ингредиентов
* */

interface Fake {
  fakeField: string;
}

interface Dough extends Fake {
}

interface Sauce extends Fake {
}

interface Veggies extends Fake {
}

interface Cheese extends Fake {
}

interface Cheese extends Fake {
}

interface Pepperoni extends Fake {
}

interface Clam extends Fake {
}

/*
* создаем классы ингредиентов,
* которые будут использоваться
* при приготовлении пиццы в NY
* */

class DoughNY implements Dough {
  fakeField: string = 'Dough';
}

class SauceNY implements Sauce {
  fakeField: string = 'Sauce';
}

class VeggiesNY implements Veggies {
  fakeField: string = 'Veggies';
}

class CheeseNY implements Cheese {
  fakeField: string = 'Cheese';
}

class PepperoniNY implements Pepperoni {
  fakeField: string = 'Pepperoni';
}

class ClamNY implements Clam {
  fakeField: string = 'Clam';
}

/*
* определяем интерфейс фабрики,
* которая будет создавать все
* наши ингредиенты
* */

interface PizzaIngredientFactory {
  createDough(): Dough;

  createSauce(): Sauce;

  createVeggies(): Veggies[];

  createCheese(): Cheese;

  createPepperoni(): Pepperoni;

  createClam(): Clam
}

/*
* абстрактный класс пиццы
* */

abstract class Pizza {

  /*
  * каждый объект пиццы содержит набор
  * ингредиентов, используемых при ее
  * приготовлении
  * */

  name: string = 'no data';
  dough: Dough = { fakeField: 'no data' };
  sauce: Sauce = { fakeField: 'no data' };
  veggies: Veggies[] = [];
  cheese: Cheese = { fakeField: 'no data' };
  pepperoni: Pepperoni = { fakeField: 'no data' };
  clam: Clam = { fakeField: 'no data' };

  /*
  * метод prepare будет собирать ингредиенты, необходимые
  * для приготовления пиццы, которые будут производится
  * фабрикой ингредиентов
  * */

  abstract prepare(): void

  /*
  * остальные методы остаются неизменными
  * */

  bake(): void {
    console.log('Bake for 25 min at 350');
  }

  cut(): void {
    console.log('Cutting the pizza into diagonal slices');
  }

  box(): void {
    console.log('Place pizza in official PizzaStore box');
  }

  setName(n: string): void {
    this.name = n;
  }

  getName(): string {
    return this.name;
  }

}

/*
* NYPizzaIngredientFactory реализует
* общий интерфейс PizzaIngredientFactory
* */

class NYPizzaIngredientFactory implements PizzaIngredientFactory {

  /*
  * для каждого ингредиента
  * в семействе создается
  * его версия для NY, для
  * других городов будет свой
  * набор ингредиентов
  * */

  createCheese(): Cheese {
    return new CheeseNY();
  }

  createClam(): Clam {
    return new ClamNY();
  }

  createDough(): Dough {
    return new DoughNY();
  }

  createPepperoni(): Pepperoni {
    return new PepperoniNY();
  }

  createSauce(): Sauce {
    return new SauceNY();
  }

  createVeggies(): Veggies[] {
    return [{ fakeField: 'v1' }, { fakeField: 'v2' }];
  }

}
