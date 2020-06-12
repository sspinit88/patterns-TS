/*
* Шаблонный Метиод определяет основные шаги алгоритма и позволяет субклассам предоставить реализацию
* одного или нескольких шагов.
* */

abstract class CaffeineBeverage {

  protected constructor() {
  }

  prepareRecipe(): void {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
  }

  protected boilWater(): void {
    console.log('Вода нагрета.');
  }

  protected pourInCup(): void {
    console.log('Налито в чашку');
  }

  abstract brew(): void ;

  abstract addCondiments(): void;

}

class Tea extends CaffeineBeverage {

  constructor() {
    super();
  }

  // метод можно переопределить
  boilWater(): void {
    console.log('Вода нагрета до 50 градусов.');
  }

  brew(): void {
    console.log('Чай заваривается.')
  }

  addCondiments(): void {
    console.log('В чай добавлен лимон');
  }

}

class Coffee extends CaffeineBeverage {

  constructor() {
    super();
  }

  brew(): void {
    console.log('Кофе заваривается.');
  }

  addCondiments(): void {
    console.log('Добавлено молоко.');
    console.log('Добавлен сахар.');
  }

}


new Tea().prepareRecipe();
new Coffee().prepareRecipe();
