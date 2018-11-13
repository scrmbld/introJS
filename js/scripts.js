/*
//loose equals
console.log(`42`==42);//returns true
console.log(1==true);//returns true


//strict equals
console.log(`42`===42);//returns false
//console.log(42===42); would return true
console.log(1===true);//returns false

//loose not equal
console.log(`42`!=42);//returns false
console.log(1!=false);//returns true

//strict not equal
console.log(`42`!==42);//returns true
console.log(1!==false);//returns true
*/

/*
const obj={
  name:'Liam'
};

const obj2={
  name:'Liam'
};
console.log(obj==obj2);//returns false, objects are never equals
console.log(obj.toString()==obj2.toString());
//returns true, the objects have the same properties
const arr1=['thing'];
const arr2=['thing'];

console.log(arr1==arr2);//returns false, arrays are like objects
//you can toString arrays as well to compare them
*/

/*
//greater than and less than
console.log(prompt()>=21)
//entering 21 or more returns true, lower values return false
//this can be reversed with <=
*/
/*
var string="string";
var str2=new String(`string`);
var str2Parsed=str2.toString();
console.log(string==str2);
console.log(string===str2);
console.log(string===str2Parsed);
*/
//order of operations rules apply to math
// +addition -subtraction *multiplication /division
//another operation: modulo (%), the remainder
//5%2=1

//here's a modulo example
function fizzbuzz(){
  let fizzMax=100;
  let fizzCurrent=0;

  //starting main loop
  while(fizzCurrent<fizzMax){
    console.log(fizzCurrent);
    if(fizzCurrent%3===0 && fizzCurrent%2===0){
      console.log(fizzCurrent + `fizzbuzz`);
    }else if(fizzCurrent%3===0){
      console.log(`fizz`);
    }else if(fizzCurrent%2===0){
      console.log(`buzz`);
    }
    fizzCurrent ++;
  }
}

/*
//number increment
let number=1;
console.log(`number`, number);

number ++;
console.log(`number`, number);

number ++;
console.log(`number`, number);

//number decrement
number --;
console.log(`number`, number);

//larger increments
number += 5;
console.log(`number`, number);

//larger decrementss
number -= 5;
console.log(`number`, number);

let cartTotal=0;
const item=9.99;
const item2=7.99;
const discount=0.5;

console.log(cartTotal+=item);
console.log(cartTotal+=item2);
console.log(cartTotal*=discount);
*/

/*
//parseInt
let num1Raw=prompt(`Enter a number`,10);
let num1=parseInt(num1Raw);
console.log(num1);
let num2Raw=prompt(`Enter another number`,10);
let num2=parseInt(num2Raw);
console.log(num2);
let numFinal=num1+num2;
console.log(numFinal);
*/

//Number entry and verification function
var numFinal=0;
function numberPromptAdder(){
  let numEntered=false;
  while(numEntered==false){
    let num=parseInt(prompt(`Enter a number`, 10));
    let numCheck=num.toString();
    if(numCheck!=`NaN`){
      numEntered=true;
      console.log(num);
      numFinal+=num;
      console.log(numFinal);
    }else{
      alert(`Invalid Number`);
      numEntered=false;
    }
  }
}
/*
//example use case of function
numberPromptAdder();
numberPromptAdder();
*/

/*
//And (&&) or (||) and not (!!)
let magicNumber=7;
if(magicNumber==1){
  console.log(`${magicNumber} is a vary magical number!`)
}else if(magicNumber<5){
  console.log(`${magicNumber} is a pretty magical number.`)
}else{
  console.log(`No magic number for you.`);
}
let age=20;
if(age>80 && magicNumber==1){
  console.log(`You are a very wize wizard.`);
}else if(age>80 || magicNumber<5){
  console.log(`You are a wizard.`);
}else{
  console.log(`Your life is a failure.`);
}
let name=``;
if(!name){
  console.log(`You are nameless.`);
}else{
  console.log(`You have a name.`);
}
*/

/*
prompt user for a name
if they provide a name alert it
if they don't provide a name, alert that the name is Invalid
*/
/*
let name=prompt(`Enter your name`);
let nameNum=parseInt(name).toString();
console.log(nameNum);
if(!name){
  alert(`Invalid name`);
}else if(nameNum!=`NaN`){
  alert(`Invalid name`);
}else{
  alert(`Your name is ${name}.`);
}
*/
