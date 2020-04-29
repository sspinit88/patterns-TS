/*
* интерфейс стратегии
* */
interface FlyBehavior {
  fly(): void;
}

/*
* интерфейс стратегии
* */
interface QuackBehavior {
  quack(): void;
}

/*
 * Класс - контекст определяет интерфейс, представляющий интерес для клиентов.
 * */
class Duck {
  flyBehavior: FlyBehavior;
  quackBehavior: QuackBehavior;

  constructor(
    flyBehavior: FlyBehavior,
    quackBehavior: QuackBehavior,
  ) {
    this.flyBehavior = flyBehavior;
    this.quackBehavior = quackBehavior;
  }

  display(): void {

  }

  /**
   * Обычно Контекст позволяет заменить объект Стратегии во время выполнения.
   */
  public setFlyBehavior(fb: FlyBehavior): void {
    this.flyBehavior = fb;
  }

  public setQuackBehavior(fb: QuackBehavior): void {
    this.quackBehavior = fb;
  }

  performFly(): void {
    this.flyBehavior.fly();
  }

  performQuack(): void {
    this.quackBehavior.quack();
  }


}

/*
* FlyWithWings, FlyNoWay, Quack, MuteQuack - сами стратегии
* */
class FlyWithWings implements FlyBehavior {
  fly(): void {
    console.log('Fly!');
  }
}

class FlyNoWay implements FlyBehavior {
  fly(): void {
    console.log('I can\'t fly!');
  }
}

class Quack implements QuackBehavior {
  quack(): void {
    console.log('Quack!');
  }
}

class MuteQuack implements QuackBehavior {
  quack(): void {
    console.log('<< Silence >>');
  }
}

// пример

class ModelDuck extends Duck {
  display(): void {
    console.log('Это - ModelDuck');
  }
}

const model = new ModelDuck(new FlyNoWay(), new Quack());
model.performFly();
model.performQuack();

model.setFlyBehavior(new FlyWithWings());
model.setQuackBehavior(new MuteQuack());

model.performFly();
model.performQuack();

model.display();

