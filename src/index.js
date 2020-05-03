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
var CondimentDecorator = /** @class */ (function () {
    function CondimentDecorator() {
        this.description = 'Unknown Beverage';
    }
    CondimentDecorator.prototype.cost = function () {
        return 0;
    };
    CondimentDecorator.prototype.getDescription = function () {
        return this.description;
    };
    CondimentDecorator.prototype.display = function () {
        console.log(this.getDescription() + ", cost: " + this.cost() + "$");
    };
    return CondimentDecorator;
}());
/*
* Описываем классы разныйх кофейных напитков.
* */
var Espresso = /** @class */ (function () {
    function Espresso() {
        this.description = 'Espresso';
        this.price = 1.28;
    }
    Espresso.prototype.cost = function () {
        return this.price;
    };
    Espresso.prototype.getDescription = function () {
        return this.description;
    };
    Espresso.prototype.display = function () {
        console.log(this.getDescription() + ", cost: " + this.cost() + "$");
    };
    return Espresso;
}());
var HouseBlend = /** @class */ (function () {
    function HouseBlend() {
        this.description = 'House Blend Coffee';
        this.price = .89;
    }
    HouseBlend.prototype.cost = function () {
        return this.price;
    };
    HouseBlend.prototype.getDescription = function () {
        return this.description;
    };
    HouseBlend.prototype.display = function () {
        console.log(this.getDescription() + ", cost: " + this.cost() + "$");
    };
    return HouseBlend;
}());
var DarkRoast = /** @class */ (function () {
    function DarkRoast() {
        this.description = 'Dark Roast';
        this.price = 1.59;
    }
    DarkRoast.prototype.cost = function () {
        return this.price;
    };
    DarkRoast.prototype.getDescription = function () {
        return this.description;
    };
    DarkRoast.prototype.display = function () {
        console.log(this.getDescription() + ", cost: " + this.cost() + "$");
    };
    return DarkRoast;
}());
var Decaf = /** @class */ (function () {
    function Decaf() {
        this.description = 'Decaf';
        this.price = 1.25;
    }
    Decaf.prototype.cost = function () {
        return this.price;
    };
    Decaf.prototype.getDescription = function () {
        return this.description;
    };
    Decaf.prototype.display = function () {
        console.log(this.getDescription() + ", cost: " + this.cost() + "$");
    };
    return Decaf;
}());
/*
* Декораторы
* */
var Mocha = /** @class */ (function (_super) {
    __extends(Mocha, _super);
    function Mocha(beverage) {
        var _this = _super.call(this) || this;
        _this.price = .20;
        _this.beverage = beverage;
        return _this;
    }
    Mocha.prototype.getDescription = function () {
        return this.beverage.getDescription() + ", Mocha";
    };
    Mocha.prototype.cost = function () {
        return this.beverage.cost() + this.price;
    };
    Mocha.prototype.display = function () {
        console.log(this.getDescription() + ", cost: " + this.cost() + "$");
    };
    return Mocha;
}(CondimentDecorator));
var Soy = /** @class */ (function (_super) {
    __extends(Soy, _super);
    function Soy(beverage) {
        var _this = _super.call(this) || this;
        _this.price = .50;
        _this.beverage = beverage;
        return _this;
    }
    Soy.prototype.getDescription = function () {
        return _super.prototype.getDescription.call(this) + ", Soy";
    };
    Soy.prototype.cost = function () {
        return this.beverage.cost() + this.price;
    };
    Soy.prototype.display = function () {
        console.log(this.beverage.getDescription() + ", cost: " + this.cost() + "$");
    };
    return Soy;
}(CondimentDecorator));
var Whip = /** @class */ (function (_super) {
    __extends(Whip, _super);
    function Whip(beverage) {
        var _this = _super.call(this) || this;
        _this.price = .45;
        _this.beverage = beverage;
        return _this;
    }
    Whip.prototype.cost = function () {
        return this.beverage.cost() + this.price;
    };
    Whip.prototype.display = function () {
        console.log(this.beverage.getDescription() + ", cost: " + this.cost() + "$");
    };
    return Whip;
}(CondimentDecorator));
/*
* пример
* */
var beverage1 = new Espresso();
beverage1.display();
beverage1 = new Mocha(beverage1);
beverage1.display();
beverage1 = new Whip(beverage1);
beverage1.display();
var beverage2 = new DarkRoast();
beverage2.display();
beverage2 = new Soy(beverage2);
beverage2.display();
