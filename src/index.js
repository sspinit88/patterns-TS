"use strict";
/*
* Шаблонный Метиод определяет основные шаги алгоритма и позволяет субклассам предоставить реализацию
* одного или нескольких шагов.
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
var CaffeineBeverage = /** @class */ (function () {
    function CaffeineBeverage() {
    }
    CaffeineBeverage.prototype.prepareRecipe = function () {
        this.boilWater();
        this.brew();
        this.pourInCup();
        this.addCondiments();
    };
    CaffeineBeverage.prototype.boilWater = function () {
        console.log('Вода нагрета.');
    };
    CaffeineBeverage.prototype.pourInCup = function () {
        console.log('Налито в чашку');
    };
    return CaffeineBeverage;
}());
var Tea = /** @class */ (function (_super) {
    __extends(Tea, _super);
    function Tea() {
        return _super.call(this) || this;
    }
    Tea.prototype.boilWater = function () {
        console.log('Вода нагрета до 50 градусов.');
    };
    Tea.prototype.brew = function () {
        console.log('Чай заваривается.');
    };
    Tea.prototype.addCondiments = function () {
        console.log('В чай добавлен лимон');
    };
    return Tea;
}(CaffeineBeverage));
var Coffee = /** @class */ (function (_super) {
    __extends(Coffee, _super);
    function Coffee() {
        return _super.call(this) || this;
    }
    Coffee.prototype.brew = function () {
        console.log('Кофе заваривается.');
    };
    Coffee.prototype.addCondiments = function () {
        console.log('Добавлено молоко.');
        console.log('Добавлен сахар.');
    };
    return Coffee;
}(CaffeineBeverage));
new Tea().prepareRecipe();
new Coffee().prepareRecipe();
