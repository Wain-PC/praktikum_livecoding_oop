class Animal {
  constructor(name, sound) {
    this._name = name;
    this._sound = sound;
  }

  say() {
    console.log(`${this._name} сказала ${this._sound}`);
  }
}


class Duck extends Animal {
  constructor() {
    super('Утка', 'Кря');
    this.canFly = true;
  }

  clapWings() {
    console.log(`${this._name} похлопала крыльями`);
  }
}

class Cow extends Animal {
  constructor() {
    super('Корова', 'Мууу');
    this._name = 'Корова';
    this.canGiveMilk = true;
  }

  giveMilk() {
    console.log(`${this._name} дала молоко`);
  }
}

class Zoo {
  constructor(animals) {
    this._animals = animals;
  }

  actAll() {
    this._animals.forEach(animal => {
      animal.say();

      if(animal.canFly) {
        animal.clapWings();
      }

      if (animal.canGiveMilk) {
        animal.giveMilk();
      }
    });
  }
}

const duck1 = new Duck();
const duck2 = new Duck();
const cow1 = new Cow();
const cow2 = new Cow();


const zoo = new Zoo([duck1, duck2, cow1, cow2]);

zoo.actAll();

