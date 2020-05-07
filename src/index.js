/*
* Описываю интерфейсы пиццы и рецептов
* */
/*
* Классы различной пиццы
* */
var CheesePizza = /** @class */ (function () {
    function CheesePizza() {
        this.recipe = {
            ingredients: ['item', 'item', 'item', 'item'],
            recipe: 'This is CheesePizza recipe.'
        };
    }
    CheesePizza.prototype.getRecipe = function () {
        return this.recipe;
    };
    return CheesePizza;
}());
var PepperoniPizza = /** @class */ (function () {
    function PepperoniPizza() {
        this.recipe = {
            ingredients: ['item', 'item', 'item', 'item'],
            recipe: 'This is PepperoniPizza recipe.'
        };
    }
    PepperoniPizza.prototype.getRecipe = function () {
        return this.recipe;
    };
    return PepperoniPizza;
}());
var ClamPizza = /** @class */ (function () {
    function ClamPizza() {
        this.recipe = {
            ingredients: ['item', 'item', 'item', 'item'],
            recipe: 'This is ClamPizza recipe.'
        };
    }
    ClamPizza.prototype.getRecipe = function () {
        return this.recipe;
    };
    return ClamPizza;
}());
/*
* класс - фабрика
* */
var SimplePizzaFactory = /** @class */ (function () {
    function SimplePizzaFactory() {
        this.pizza = null;
    }
    SimplePizzaFactory.prototype.createPizza = function (pizzaType) {
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
    };
    return SimplePizzaFactory;
}());
// example
var order1 = new SimplePizzaFactory().createPizza('pepperoni');
console.log('order1 (pepperoni) is: ', order1);
var order2 = new SimplePizzaFactory().createPizza('clam');
console.log('order1 (clam) is: ', order2);
var order3 = new SimplePizzaFactory().createPizza('cheese');
console.log('order1 (cheese) is: ', order3);
