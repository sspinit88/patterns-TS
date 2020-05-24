/*
* Паттерн Адаптер преобразует интерфейс класса к другому интерфейсуб на который рссчитан клиент.
* Адаптер обеспечивает совместную работу классов, невозможную в обычных условиях из-за несовместимости интерфейсов.
* */


/*
*  Утка может крякать и летать.
* */

interface Duck {
  quack(): void;

  fly(): void;
}

/*
* Индюшка может летать, но не умеет крякать
* */

interface Turkey {
  gobble(): void;

  fly(): void;
}

/*
* создаем класс утки и индюшки
* */

class MallardDuck implements Duck {
  fly(): void {
    console.log(`I'm MallardDuck and I flying!`);
  }

  quack(): void {
    console.log(`Кря-кря-кря`);
  }
}

class WildTurkey implements Turkey {
  fly(): void {
    console.log(`I'm WildTurkey and I can fly not very well.`);
  }

  gobble(): void {
    console.log(`Кхм..., гу-гу-ле-гу-гу-ле!`);
  }
}

/*
* создаем адаптер
* */

class TurkeyAdapter implements Duck {

  turkey: Turkey;

  constructor(t: Turkey) {
    this.turkey = t;
  }

  fly(): void {
    for (let i = 0; i < 5; i++) {
      this.turkey.fly();
    }
  }

  quack(): void {
    this.turkey.gobble();
  }
}

/*
* пример
* */

class DuckTestDrive {
  main(): void {
    const duck: Duck = new MallardDuck();

    const turkey: Turkey = new WildTurkey();

    const turkeyAdapter: Duck = new TurkeyAdapter(turkey);

    this.testDuck(duck);
    this.testDuck(turkeyAdapter);
  }

  testDuck(duck: Duck): void {
    duck.fly();
    duck.quack();
  }
}

new DuckTestDrive().main();
