/*
//uses tag type (div, body, img, etc.)
let byType=document.getElementsByTagName(`div`);
console.log(byType);
//uses class name
let byClass=document.getElementsByClassName(`test`);
console.log(byClass);
//uses id
let byId=document.getElementById(`one`);
console.log(byId);
//can use any valid CSS selector, returns one result
let byQuerySelector=document.querySelector(`.item`);
console.log(byQuerySelector);
//can use any valid CSS selector, returns all results
let queryAll=document.querySelectorAll(`.item`);
console.log(queryAll);
*/
/*
//more examples of querySelector() and querySelectorAll()
console.log(document.querySelector(`body`));
console.log(document.querySelectorAll(`body`));
console.log(document.querySelector(`.thing`));
console.log(document.querySelectorAll(`.thing`));
console.log(document.querySelector(`#only`));
console.log(document.querySelectorAll(`#only`));
//more examples of the older ones
console.log(document.getElementsByTagName(`body`));
console.log(document.getElementsByClassName(`.thing`));
console.log(document.getElementsByTagName(`#only`));
*/

//event listeners
let test=document.querySelector(`.test`);
//when .test is clicked, .test{display:none;}
test.addEventListener(`click`, ()=> test.style.display=`none`);
//keydown - when a key is pressed down .test{display:none;}
document.addEventListener(`keydown`,e =>{
  test.style.color=`brown`;
  console.log(e);
});
