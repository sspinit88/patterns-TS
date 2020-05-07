/*
* Описываю интерфейсы пиццы и рецептов
* */

interface PizzaRecipe {
  ingredients: string[];
  recipe: string;
}

interface Pizza {
  recipe: PizzaRecipe;

  getRecipe(): PizzaRecipe;
}

/*
* Классы различной пиццы
* */

class CheesePizza implements Pizza {
  recipe: PizzaRecipe = {
    ingredients: ['item', 'item', 'item', 'item'],
    recipe: 'This is CheesePizza recipe.',
  };

  getRecipe(): PizzaRecipe {
    return this.recipe;
  }
}

class PepperoniPizza implements Pizza {
  recipe: PizzaRecipe = {
    ingredients: ['item', 'item', 'item', 'item'],
    recipe: 'This is PepperoniPizza recipe.',
  };

  getRecipe(): PizzaRecipe {
    return this.recipe;
  }
}

class ClamPizza implements Pizza {
  recipe: PizzaRecipe = {
    ingredients: ['item', 'item', 'item', 'item'],
    recipe: 'This is ClamPizza recipe.',
  };

  getRecipe(): PizzaRecipe {
    return this.recipe;
  }
}


/*
* класс - фабрика
* */
class SimplePizzaFactory {

  private pizza: any = null;

  constructor() {
  }

  createPizza(pizzaType: string): Pizza {

    switch (pizzaType) {
      case 'cheese':
        this.pizza = new CheesePizza();
        break;
      case 'pepperoni':
        this.pizza = new PepperoniPizza();
        break;
      case 'clam':
        this.pizza = new ClamPizza();
        break;
      default:
        this.pizza = new CheesePizza();
        break;
    }

    return this.pizza;
  }

}

// example

const order1 = new SimplePizzaFactory().createPizza('pepperoni');
console.log('order1 (pepperoni) is: ', order1);

const order2 = new SimplePizzaFactory().createPizza('clam');
console.log('order1 (clam) is: ', order2);

const order3 = new SimplePizzaFactory().createPizza('cheese');
console.log('order1 (cheese) is: ', order3);
