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
 * Класс - контекст определяет интерфейс, представляющий интерес для клиентов.
 * */
var Duck = /** @class */ (function () {
    function Duck(flyBehavior, quackBehavior) {
        this.flyBehavior = flyBehavior;
        this.quackBehavior = quackBehavior;
    }
    Duck.prototype.display = function () {
    };
    /**
     * Обычно Контекст позволяет заменить объект Стратегии во время выполнения.
     */
    Duck.prototype.setFlyBehavior = function (fb) {
        this.flyBehavior = fb;
    };
    Duck.prototype.setQuackBehavior = function (fb) {
        this.quackBehavior = fb;
    };
    Duck.prototype.performFly = function () {
        this.flyBehavior.fly();
    };
    Duck.prototype.performQuack = function () {
        this.quackBehavior.quack();
    };
    return Duck;
}());
/*
* FlyWithWings, FlyNoWay, Quack, MuteQuack - сами стратегии
* */
var FlyWithWings = /** @class */ (function () {
    function FlyWithWings() {
    }
    FlyWithWings.prototype.fly = function () {
        console.log('Fly!');
    };
    return FlyWithWings;
}());
var FlyNoWay = /** @class */ (function () {
    function FlyNoWay() {
    }
    FlyNoWay.prototype.fly = function () {
        console.log('I can\'t fly!');
    };
    return FlyNoWay;
}());
var Quack = /** @class */ (function () {
    function Quack() {
    }
    Quack.prototype.quack = function () {
        console.log('Quack!');
    };
    return Quack;
}());
var MuteQuack = /** @class */ (function () {
    function MuteQuack() {
    }
    MuteQuack.prototype.quack = function () {
        console.log('<< Silence >>');
    };
    return MuteQuack;
}());
// пример
var ModelDuck = /** @class */ (function (_super) {
    __extends(ModelDuck, _super);
    function ModelDuck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModelDuck.prototype.display = function () {
        console.log('Это - ModelDuck');
    };
    return ModelDuck;
}(Duck));
var model = new ModelDuck(new FlyNoWay(), new Quack());
model.performFly();
model.performQuack();
model.setFlyBehavior(new FlyWithWings());
model.setQuackBehavior(new MuteQuack());
model.performFly();
model.performQuack();
model.display();
