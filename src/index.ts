class MyClass {

  private static instance: any = undefined;

  constructor() {
  }

  static getInstance(dataForInstance: any): any {
    if (this.instance == null) {
      this.instance = dataForInstance;
    }

    return this.instance;
  }


  // другие методы...
}
