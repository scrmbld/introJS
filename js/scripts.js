/*
//array starts at 0
let arr1=[`Liam`, 16, true, `Djibouti`, [`bannana`, `Donkey Kong`]];
console.log(arr1[4][1]);
*/
/*
 let geekwise=[[`bootcamp 1`, true], [`bootcamp2`, false], [`introJS`, true]];
 console.log(geekwise[1][0]);//bootcamp2
 console.log(geekwise[0][0]);//bootcamp1
 console.log(geekwise[2][0], geekwise[2][1]);//introJS true
*/
/*
//arrays can take in variables
let main=`Donkey Kong`;
let me=[`Melee`, [main, `is high tier`, `is low tier`], 792, true, 2020];
console.log(me[0], me[1][0],me[1][1]);
console.log(me.length);
console.log(me);
me.push(`mog`);//puts `mog` on the end of the array
me.unshift(`bird`);//puts bird at the beginning of the array
me.pop();//removes first item from array
console.log(me);
//starts at second item in the array, replaces 1 item
me[2].splice(1, 1, `is low tier`);
console.log(me[1], me[2][0], me[2][1]);
*/
/*
let favGame0=[`Shark Tale`, `Original Xbox`];
let favGame1=[`Monster Truck Madness 2`, `Windows 95`];
let favGame2=[`M&M's Cart Racing`, `Wii`];
let favGame3=[`PBR Out of The Chute`, `Wii`];
let favGame4=[`Happy Feet 2`, `DS`];
let favGames=[favGame0, favGame1, favGame2, favGame3, favGame4];
console.log(favGames);
let titles=[favGame0[0],favGame1[0],favGame2[0],favGame3[0],favGame4[0]];
alert(titles)
console.log(`${favGames[1][0]}, `, favGames[0][0]);
alert(favGames.length);
*/
/*
//favGames.splice(2);//removes all items after and including 2 from array
//console.log(favGames);
let lessFavGames=favGames.slice(2);//takes all items after 2
console.log(favGames);//original array the same
console.log(lessFavGames);//new array made with slice
//slice uses same syntax as splice
//indexOf() shows index of item listed, returns -1 if item isn't listed
console.log(favGames.indexOf(favGame2));
//tells wether an item is in an array
console.log(favGames.includes(`Barbie Set Jet and Style`));
//if an item occurs twice, indexOf only returns the first index
console.log(favGames.indexOf(favGame0));
//lastIndexOf returns last index
console.log(favGames.lastIndexOf(favGame0));
//reverses order of items in array
favGames.reverse();
let str=`string`;
//changes string into array
console.log(str.split(``));
//can chain these commands
console.log(str.split(``).reverse().join(``));
*/

//loops
/*
//while loops
let counter=0;

while(counter<=10){
  console.log(counter);
  counter++;
}
*/

//for loops
/*
for(let i=1; i<=10; i++){
  console.log(i);
}
*/
/*
let names=[`Max Rebo`, `Yoda`, `Dark Helmet`, `r4d4`];

for(let i=0; i<names.length; i++){
  console.log(names[i]);
  //this will console log each item in the array
}
*/
/*
let frogs=[`frog`, `other frog`, `final frog`, `ultimate frog`];

for(let i=0; i<frogs.length; i++){
  console.log(frogs[i]);
}
*/
/*
//for of loop
let names=[`Max Rebo`, `Yoda`, `Dark Helmet`, `r4d4`];

for(let name of names){
  console.log(name);
}
*/
/*
//for each
let names=[`Max Rebo`, `Yoda`, `Dark Helmet`, `r4d4`];

names.forEach(name => console.log(name));

let frogs=[`frog`, `other frog`, `final frog`, `ultimate frog`];
for(let frog of frogs){
  console.log(frog);
  if(frog===`final frog`){
    break; //ends loop early
  }
}
*/
//.map is very similar to forEach
/*
//objects are like arrays, but give context to items
let person={
  name:prompt(`En`),
  age:16
  //name is a key, `Liam` is a value
};
console.log(person); //displays all info on object
console.log(person.name);//displays only name
console.log(person.age);//displays only age
//for in is like for of, but for objects
for(key in person){
  console.log(person[key]);
}
*/
/*
let user={};
console.log(user);

user.name=prompt(`Enter your name`);
user.age=parseInt(prompt(`Enter your age`));
console.log(user);
*/
//now this object looks like
/*
user={
  name:(input);
  age:(input);
}
*/

let favGame0=[`Shark Tale`, `Original Xbox`];
let favGame1=[`Monster Truck Madness 2`, `Windows 95`];
let favGame2=[`M&M's Cart Racing`, `Wii`];
let favGame3=[`PBR Out of The Chute`, `Wii`];
let favGame4=[`Happy Feet 2`, `DS`];
let favGames=[favGame0, favGame1, favGame2, favGame3, favGame4];
console.log(favGames);
let titles=[favGame0[0],favGame1[0],favGame2[0],favGame3[0],favGame4[0]];
ultimateFavGame=prompt(`Enter your favorite game`).toLowerCase();
/*
for(let game of favGames){
  console.log(game[0]);
  var realGame=false;
  if(game[0].toLowerCase()==ultimateFavGame){
    alert(game[0]);
    realGame=true;
    break;
  }
}
if(realGame!=true){
  alert(`Try playing a real man's game.`);
}
*/
/*
if(ultimateFavGame==favGames[0][0].toLowerCase()){
  alert(ultimateFavGame);
}else if(ultimateFavGame==favGames[1][0].toLowerCase()){
  alert(ultimateFavGame);
}else if(ultimateFavGame==favGames[2][0].toLowerCase()){
  alert(ultimateFavGame);
}else if(ultimateFavGame==favGames[3][0].toLowerCase()){
  alert(ultimateFavGame);
}else if(ultimateFavGame==favGames[4][0].toLowerCase()){
  alert(ultimateFavGame);
}else{
  alert(`Try playing a real man's game`);
}
*/
