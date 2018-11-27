//setting up variables
const input=document.querySelector(`.todo`);
const enter=document.querySelector(`.enter`);
let list=[];
let obj={};
let counter=0;
//taking the input and putting it into the last li
enter.addEventListener(`click`,e =>{
  counter++;
  obj[`item`+counter]=input.value;
  list.unshift(obj[`item`+counter]);
  console.log(list);
})
