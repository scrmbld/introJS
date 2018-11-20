/*
//functions
//keyword-name-arguements
function thing (){
  console.log(`Thing`);
}
//calling the function
thing(); //will work if function is called before it's declared
*/
/*
thing();//puts `Thing` in the console
//------------arguements required
function add (a,b){
  console.log(a+b);
}
//can reuse arguements without problems
function subtract (a,b){
  console.log(a-b);
}
//--a,b
add(2,2);
subtract(2,1);

//variable can be functions
var log=function(){
  console.log(`Something`);
};
log();
*/
/*
//logs name twice
let name=`Liam`;
console.log(name);//this returns name
function logName(){
  console.log(name);//this also returns name
}
logName();
//logs name once
function logNumber(){
  let number=42;
  console.log(number);
}
logNumber();//returns number
console.log(number);//returns undefined
*/
/*
//fat arrow functions
//-name-arguements
let add=(a,b)=>{
console.log(a+b);
}
add(3,3);
//one arguement functions don't require ()
let sayName=name=>{
  console.log(name);
}
sayName(`Scisefre`);
*/
/*
//substring function
let catName=`Ricky`;//first letter-last letter
console.log(catName.substring(2,4));
*/
/*
function dogYears(age){
  alert(`${age} years is ${age*7} dog years.`);
}
//dogYears(prompt(`Enter an age`));

function lifeSupply(){
  let amount=(80-parseInt(prompt(`How old are you?`)))*parseInt(prompt(`How much do you need per day?`))*365;
  let splitAmount=amount.toString().split("");
  splitAmount.reverse();
  for(let i=1;i<splitAmount.length;i++){
    if(i%3==0){
      splitAmount.splice(i,0,`,`);
    }
  }
  amount=splitAmount.reverse().join(``);
  console.log(splitAmount);
  alert(`You will need ${amount} to last until you're 80.`);
}
lifeSupply();

function teamName(info){
  alert(`The ${info[0]} ${info[1]}`);
}
teamName([`Theban`, `Micropachycephalosuri`]);
*/
/*
//methods
class person{
  constructor(name,age){
    //these are used as arguements
    this.name=name;
    this.age=age;
  }
  //this is a method
  sayName(){
    console.log(this.name);
  }
  howOld(){
    console.log(this.age);
  }
}
let liam=new person(`Liam`, 16);//this fills out the args
liam.howOld();//this runs the method
*/
//recursion
function getName(){
  let name=prompt(`Enter your name`);
  if(!name){
    getName();
  }
}
getName();
