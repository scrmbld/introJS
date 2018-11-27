//setting up variables
const input=document.querySelector(`.todo`);
const enter=document.querySelector(`.enter`);
console.log(body);
let list=[];
let obj={};
let counter=0;
//taking the input and putting it into the last li
body.addEventListener(`keydown`,e =>{
  counter++;
  let obj[`item`+counter]=input;
  list.unshift(obj[`item`+counter]);
  console.log(list);
})
