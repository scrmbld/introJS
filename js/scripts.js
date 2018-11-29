//setting up variables
//getting HTML elements
const input=document.querySelector(`.todo`);
const enter=document.querySelector(`.enter`);
const ol=document.querySelector(`ol`);
//adding placeholders
let currentInput=``;

input.addEventListener(`input`, e =>{
  //taking stuff from the input
  currentInput=input.value;
})
enter.addEventListener(`click`, e =>{
  //finalizing the value taken for the input
  let finalInput=currentInput;
  //creating the li
  li=document.createElement(`li`);
  console.log(li);
  li.textContent=finalInput;
  //appending the li
  ol.append(li);
})
