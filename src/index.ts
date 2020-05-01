interface Subject {
  registerObserver(o: Observer): void;

  removeObserver(o: Observer): void;

  notifyObservers(): void;
}

/*
* Интерфейс Observer реализуется всеми наблюдателями.
* */
interface Observer {
  // Получить обновление от субъекта.
  update(updateData: Weather): void;
}

/*
* сторонние интерфейсы
* */

interface DisplayElement {
  display(): void;
}

interface Weather {
  temperature: number | undefined;
  humidity: number | undefined;
  pressure: number | undefined;
}

class WeatherData implements Subject {

  private observers: Observer[] = [];
  private weather: Weather = {
    temperature: undefined,
    pressure: undefined,
    humidity: undefined,
  };

  constructor() {
  }

  setWeather(w: Weather): void {
    this.weather = { ...w };
    this.notifyObservers();
  }

  registerObserver(o: Observer): void {
    this.observers.push(o);
  }

  removeObserver(o: Observer): void {
    const index: number = this.observers.indexOf(o);

    if (!!index) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(): void {
    this.observers
      .forEach((observer, i) => {
        observer.update(this.weather);
      });
  }
}

/*
* класс наблюдателя
* */

class CurrentConditionsDisplay implements Observer, DisplayElement {

  private subject: Subject;
  private weather: Weather = {
    temperature: undefined,
    pressure: undefined,
    humidity: undefined,
  };

  constructor(weatherStation: Subject) {
    this.subject = { ...weatherStation };
    weatherStation.registerObserver(this);
  }

  update(w: Weather): void {
    this.weather = { ...w };
    this.display()
  }

  display(): void {
    console.log(
      `temperature: ${this.weather.temperature};
       humidity: ${this.weather.humidity};
       pressure: ${this.weather.pressure};
    `);
  }
}

// пример

const subject = new WeatherData();

const observer1 = new CurrentConditionsDisplay(subject);
const observer2 = new CurrentConditionsDisplay(subject);

console.log('Обновляю данные первого и второго подписчика (.update()).');

observer1.update({
  temperature: 35,
  pressure: 25,
  humidity: 15,
});

observer2.update({
  temperature: 25,
  pressure: 15,
  humidity: 5,
});

console.log('Устанавливаю данные о погоде через subject.setWeather().');
subject.setWeather({
  temperature: 5,
  humidity: 4,
  pressure: 1,
});
console.log('Получаю данные первым и вторым подписчиком (.display()).');
observer1.display();
observer2.display();
