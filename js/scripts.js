/*
//examples of objects
let string=new String(`words`);//creates string object
console.log(string);//logs the object, not just the string
let str=`more words`;//string primitive
console.log(str);//just returns the string

let num=new Number(42);
console.log(num);

let bool=new Boolean(true);
console.log(bool);

let array=new Array(`thingy`, 792);//array object
console.log(array);//also logs an object

let person={
  name:`Billy Bob`
};
console.log(person);//returns the person object
let dog= new Object();//creates dog object
dog.name=`Fido`;
console.log(dog);//also returns an object, just like the other one

//Object.getPrototypeOf()
console.log(Object.getPrototypeOf(string));//returns prototype of object
*/
/*
//old way of making a constructor function
function Animal(name, powerLevel){
  this.name=name;
  this.powerLevel=powerLevel;

  //a function that modifies an attribute of animal{}
  this.train=function(){
    this.powerLevel=powerLevel*2;
  }
}
//creating a function outside the declaration of Animal
Animal.prototype.eat=function(){
  this.powerLevel += 10;//increases powerLevel by 10
}

let dog=new Animal(`fido`, 9001);//creates an animal object called dog
console.log(dog);//returns an "animal" type object
let cat=new Animal(`Cat`, `Over one million`);//creates animal called cat
console.log(cat);

console.log(dog.powerLevel);//console logs the power level of the dog
dog.train();//dog's power level multiplies *2 in function
console.log(dog.powerLevel);//console log the new power level
dog.eat();//changes power level in different function
console.log(dog.powerLevel);//18000 -> 18012
*/
/*
//setting up functions
function User(userInfo){//adding prototype
  this.userName=userInfo.userName;
  this.password=userInfo.password;
}
function getUserInfo(){//adding function to get user input
  let name=prompt(`Enter your username`);
  let password=prompt(`Enter your password`);
  return{
    userName:name,
    password:password
  };
}

let person=new User(getUserInfo());
console.log(person);
*/
//creating animal class
class Animal{
    constructor(name, energy){
      this.name=name;
      this.energy=energy;
    }
    play(){
      this.energy -=5;
    }
}
//creates new class, inherits from animal
class Dog extends Animal{
    constructor(name, energy, says){
      super(...arguments);//takes all relevant args from animal

      this.says=says;
    }

    speak(){
      console.log(`Dog says ${this.says}`);
    }
}

let fido=new Dog(`fido`, 64, `woof`);
console.log(fido);
fido.speak();
fido.play();
console.log(fido.energy);
