//setting up variables
const input=document.querySelector(`.todo`);
const enter=document.querySelector(`.enter`);
const jsLink=document.querySelector(`script`);
const ol=document.querySelector(`ol`);
let list=[];
let obj={};
let counter=0;
//taking the input and putting it into the last li
enter.addEventListener(`click`,e =>{
  counter++;
  obj[`item`+counter]=input.value;
  obj[`li`+counter]=document.createElement(`li`);
  obj[`li`+counter].textContent=`${obj[`item`+counter]}`;
  ol.append(obj[`li`+counter]);
})
