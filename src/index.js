/*
*  Утка может крякать и летать.
* */
/*
* создаем класс утки и индюшки
* */
var MallardDuck = /** @class */ (function () {
    function MallardDuck() {
    }
    MallardDuck.prototype.fly = function () {
        console.log("I'm MallardDuck and I flying!");
    };
    MallardDuck.prototype.quack = function () {
        console.log("\u041A\u0440\u044F-\u043A\u0440\u044F-\u043A\u0440\u044F");
    };
    return MallardDuck;
}());
var WildTurkey = /** @class */ (function () {
    function WildTurkey() {
    }
    WildTurkey.prototype.fly = function () {
        console.log("I'm WildTurkey and I can fly not very well.");
    };
    WildTurkey.prototype.gobble = function () {
        console.log("\u041A\u0445\u043C..., \u0433\u0443-\u0433\u0443-\u043B\u0435-\u0433\u0443-\u0433\u0443-\u043B\u0435!");
    };
    return WildTurkey;
}());
/*
* создаем адаптер
* */
var TurkeyAdapter = /** @class */ (function () {
    function TurkeyAdapter(t) {
        this.turkey = t;
    }
    TurkeyAdapter.prototype.fly = function () {
        for (var i = 0; i < 5; i++) {
            this.turkey.fly();
        }
    };
    TurkeyAdapter.prototype.quack = function () {
        this.turkey.gobble();
    };
    return TurkeyAdapter;
}());
/*
* пример
* */
var DuckTestDrive = /** @class */ (function () {
    function DuckTestDrive() {
    }
    DuckTestDrive.prototype.main = function () {
        var duck = new MallardDuck();
        var turkey = new WildTurkey();
        var turkeyAdapter = new TurkeyAdapter(turkey);
        this.testDuck(duck);
        this.testDuck(turkeyAdapter);
    };
    DuckTestDrive.prototype.testDuck = function (duck) {
        duck.fly();
        duck.quack();
    };
    return DuckTestDrive;
}());
new DuckTestDrive().main();
