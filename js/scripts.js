/*
console.log(document.forms.loginForm.button);

const btn=document.forms.loginForm.button;
btn.addEventListener(`click`, e =>{
  e.preventDefault();

  let firstName=document.forms.loginForm.firstName;
  console.log(firstName.value);
  console.log(`clicked`);
  firstName.value=``;
})
*/
/*
console.log(this);
const person={
  firstName:`one`,
  lastName:`two`,
  age:255,
  thingy: {
    firstName:`another one`,
    lastName:`another two`,
    age:256,

    sayName(){
      console.log(`${this.firstName} ${this.lastName} is ${this.age} years old`);
    }
  },
  sayName(){
    console.log(`${this.firstName} ${this.lastName} is ${this.age} years old`);
  }
};
person.sayName();
person.thingy.sayName();


const btnOne=document.querySelector(`#btn-one`);
const btnTwo=document.querySelector(`#btn-two`);
/*
btnOne.addEventListener(`click`, logThis);
btnTwo.addEventListener(`click`,logThis);
function logThis(){
  console.log(this);
}

btnOne.addEventListener(`click`, e =>{
  console.log(this);//returns window
});
btnTwo.addEventListener(`click`,function(){
  console.log(this);//returns btnTwo
  console.log(this.parentElement)//returns the parent (body)
});

function logThis(){
  console.log(this);
}
*/
/*
const buttons=document.querySelectorAll(`button`);
console.log(buttons);
buttons.forEach(button =>button.addEventListener(`click`, function(){
  this.style.display=`none`;
}));
*/

const dog={
  name:`Fido`,
  says:`woof.`,
};
const cat={
  name:`Skeletor`,
  says:`meow.`,
};
const eagle={
  name:`Freedom`,
  says:`*gunshots*`,
};

function speak(location, status){
  alert(`${this.name} says ${this.says}`);
}

const dogSays=speak.bind(dog);
dogSays();

const catSays=speak.bind(cat);
catSays();

const eagleSays=speak.bind(eagle);
eagleSays();

/*
speak.apply(dog, [`the yard`, `is chasing squirrel`]);
speak.apply(cat, [`your lap`]);
speak.apply(eagle,[ `the Rocky Mountians`, `is acquiring oil`]);
*/
