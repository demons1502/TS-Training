export const log = () => {
  console.log('Classes and Interfaces');
};

// 1. What’s the difference between a class and an interface?

/* A class can have implementations, initialized class fields, and visibility modifiers. It also generates JavaScript code, so it supports instanceof checks at runtime. A class defines both a type and a value. An interface just defines a type, doesn't generate any JavaScript code, can only contain type-level members, and can't contain use modifiers. */

// 2. When you mark a class' constructor as `private`, that means you can't instantiate or extend the class. What happens when you mark it as `protected` instead? Play around with this in your code editor, and see if you can figure it out.

class A {
  protected constructor() {}
}

class B extends A {} // ok
new A(); // error
new B(); // error

/* Unlike a class with a private constructor, a class with a protected constructor can be extended. Neither a class with a private constructor nor a class with a protected constructor can be new-ed. */

// 3. Extend the Factory Pattern implementation we developed (Factory Pattern) to make it safer, at the expense of breaking the abstraction a bit. Update the implementation so that a consumer knows at compile time that calling Shoe.create('boot') returns a Boot, and Shoe.create('balletFlat') returns a BalletFlat (rather than both returning a Shoe). Hint: Think back to [function-overloads].

type Shoe = {
  purpose: string;
};
class BalletFlat implements Shoe {
  purpose = 'dancing';
}
class Boot implements Shoe {
  purpose = 'woodcutting';
}
class Sneaker implements Shoe {
  purpose = 'walking';
}

type ShoeCreator = {
  create(type: 'balletFlat'): BalletFlat;
  create(type: 'boot'): Boot;
  create(type: 'sneaker'): Sneaker;
};

let Shoe: ShoeCreator = {
  create(type: 'balletFlat' | 'boot' | 'sneaker'): Shoe {
    switch (type) {
      case 'balletFlat':
        return new BalletFlat();
      case 'boot':
        return new Boot();
      case 'sneaker':
        return new Sneaker();
    }
  },
};

Shoe.create('boot');
Shoe.create('balletFlat');
Shoe.create('sneaker');
