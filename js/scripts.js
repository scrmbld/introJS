/*
//takes user input and spits it out in console
function msg(){
  var message=prompt();
  console.log(message);
}

//string
var word="help";

//also a string
var nameTwo = new String("help");

//number
var num=55;

//Boolean
var boolean=true;

//undefined
var noValue;

//null
var empty=null;

//logging strings
console.log(word);
console.log(nameTwo);

//comparing strings
//loose comparison-only looks at value
console.log(word==nameTwo);
//strong comparison-looks at type and value
console.log(word===nameTwo);

//this is global scoped
function placeholder (){
  //this is scoped to the function
}

//this is also golbal scoped

//var example
var name="Liam";
console.log(name);
//var pitfall
{
  var name="name";
  console.log(name)
}
console.log(name);


//let example
let lastName="Allen";
console.log(lastName);
//var pitfall but with let instead
{
  let lastName="lastName";
  console.log(lastName);
}
console.log(lastName);

//const example
const middleName="Gavin";
console.log(middleName);
//var pitfall but with const instead
{
  const middleName="middleName";
  console.log(middleName);
}
console.log(middleName);
//can't change const, have to re-declare it
middleName="thing";
console.log(middleName);
//returns Uncaugt Error: assingment to const variable
*/

/*
//taking a number using prompt
const name=prompt(`What is your favorite number?`);
console.log(typeof(name));
//changing string to a number
const realNum=parseInt(name);
console.log(realNum);
console.log(typeof(realNum));
//changing the nuber back to a string
const fakeNum=toString(realNum);
console.log(typeof(fakeNum));
*/

//date
const date=new Date();
console.log(`The date is `+date);

/*const response=confirm(`Are you sure?`);
console.log(response);*/
