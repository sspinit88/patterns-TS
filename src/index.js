/*
* описывем интерфейсы
* ингредиентов
* */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
* создаем классы ингредиентов,
* которые будут использоваться
* при приготовлении пиццы в NY
* */
var DoughNY = /** @class */ (function () {
    function DoughNY() {
        this.fakeField = 'Dough';
    }
    return DoughNY;
}());
var SauceNY = /** @class */ (function () {
    function SauceNY() {
        this.fakeField = 'Sauce';
    }
    return SauceNY;
}());
var VeggiesNY = /** @class */ (function () {
    function VeggiesNY() {
        this.fakeField = 'Veggies';
    }
    return VeggiesNY;
}());
var CheeseNY = /** @class */ (function () {
    function CheeseNY() {
        this.fakeField = 'Cheese';
    }
    return CheeseNY;
}());
var PepperoniNY = /** @class */ (function () {
    function PepperoniNY() {
        this.fakeField = 'Pepperoni';
    }
    return PepperoniNY;
}());
var ClamNY = /** @class */ (function () {
    function ClamNY() {
        this.fakeField = 'Clam';
    }
    return ClamNY;
}());
/*
* абстрактный класс пиццы
* */
var Pizza = /** @class */ (function () {
    function Pizza() {
        /*
        * каждый объект пиццы содержит набор
        * ингредиентов, используемых при ее
        * приготовлении
        * */
        this.name = 'no data';
        this.dough = { fakeField: 'no data' };
        this.sauce = { fakeField: 'no data' };
        this.veggies = [];
        this.cheese = { fakeField: 'no data' };
        this.pepperoni = { fakeField: 'no data' };
        this.clam = { fakeField: 'no data' };
    }
    /*
    * остальные методы остаются неизменными
    * */
    Pizza.prototype.bake = function () {
        console.log('Bake for 25 min at 350');
    };
    Pizza.prototype.cut = function () {
        console.log('Cutting the pizza into diagonal slices');
    };
    Pizza.prototype.box = function () {
        console.log('Place pizza in official PizzaStore box');
    };
    Pizza.prototype.setName = function (n) {
        this.name = n;
    };
    Pizza.prototype.getName = function () {
        console.log("Pizza's name: " + this.name);
        return this.name;
    };
    return Pizza;
}());
/*
* NYPizzaIngredientFactory реализует
* общий интерфейс PizzaIngredientFactory
* */
var NYPizzaIngredientFactory = /** @class */ (function () {
    function NYPizzaIngredientFactory() {
    }
    /*
    * для каждого ингредиента
    * в семействе создается
    * его версия для NY, для
    * других городов будет свой
    * набор ингредиентов
    * */
    NYPizzaIngredientFactory.prototype.createCheese = function () {
        return new CheeseNY();
    };
    NYPizzaIngredientFactory.prototype.createClam = function () {
        return new ClamNY();
    };
    NYPizzaIngredientFactory.prototype.createDough = function () {
        return new DoughNY();
    };
    NYPizzaIngredientFactory.prototype.createPepperoni = function () {
        return new PepperoniNY();
    };
    NYPizzaIngredientFactory.prototype.createSauce = function () {
        return new SauceNY();
    };
    NYPizzaIngredientFactory.prototype.createVeggies = function () {
        return [{ fakeField: 'v1' }, { fakeField: 'v2' }];
    };
    return NYPizzaIngredientFactory;
}());
/*
*
* */
var CheesePizza = /** @class */ (function (_super) {
    __extends(CheesePizza, _super);
    function CheesePizza(ingredientFactory) {
        var _this = _super.call(this) || this;
        _this.ingredientFactory = ingredientFactory;
        return _this;
    }
    /*
    * prepare() - готовит пиццу с сыром. Когда ему требуется
    * очередной ингредиент, он запрашивает его у фабрики
    * */
    CheesePizza.prototype.prepare = function () {
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSauce();
        this.cheese = this.ingredientFactory.createCheese();
    };
    return CheesePizza;
}(Pizza));
/*
* пример:
* */
var NYCheesePizza = new CheesePizza(new NYPizzaIngredientFactory());
NYCheesePizza.prepare();
NYCheesePizza.bake();
NYCheesePizza.cut();
NYCheesePizza.box();
NYCheesePizza.setName('NYCheesePizza');
NYCheesePizza.getName();
