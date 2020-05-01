var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var WeatherData = /** @class */ (function () {
    function WeatherData() {
        this.observers = [];
        this.weather = {
            temperature: undefined,
            pressure: undefined,
            humidity: undefined
        };
    }
    WeatherData.prototype.setWeather = function (w) {
        this.weather = __assign({}, w);
        this.notifyObservers();
    };
    WeatherData.prototype.registerObserver = function (o) {
        this.observers.push(o);
    };
    WeatherData.prototype.removeObserver = function (o) {
        var index = this.observers.indexOf(o);
        if (!!index) {
            this.observers.splice(index, 1);
        }
    };
    WeatherData.prototype.notifyObservers = function () {
        var _this = this;
        this.observers
            .forEach(function (observer, i) {
            observer.update(_this.weather);
        });
    };
    return WeatherData;
}());
/*
* класс наблюдателя
* */
var CurrentConditionsDisplay = /** @class */ (function () {
    function CurrentConditionsDisplay(weatherStation) {
        this.weather = {
            temperature: undefined,
            pressure: undefined,
            humidity: undefined
        };
        this.subject = __assign({}, weatherStation);
        weatherStation.registerObserver(this);
    }
    CurrentConditionsDisplay.prototype.update = function (w) {
        this.weather = __assign({}, w);
        this.display();
    };
    CurrentConditionsDisplay.prototype.display = function () {
        console.log("temperature: " + this.weather.temperature + ";\n       humidity: " + this.weather.humidity + ";\n       pressure: " + this.weather.pressure + ";\n    ");
    };
    return CurrentConditionsDisplay;
}());
// пример
var subject = new WeatherData();
var observer1 = new CurrentConditionsDisplay(subject);
var observer2 = new CurrentConditionsDisplay(subject);
console.log('Обновляю данные первого и второго подписчика (.update()).');
observer1.update({
    temperature: 35,
    pressure: 25,
    humidity: 15
});
observer2.update({
    temperature: 25,
    pressure: 15,
    humidity: 5
});
console.log('Устанавливаю данные о погоде через subject.setWeather().');
subject.setWeather({
    temperature: 5,
    humidity: 4,
    pressure: 1
});
console.log('Получаю данные первым и вторым подписчиком (.display()).');
observer1.display();
observer2.display();
