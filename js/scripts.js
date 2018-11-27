//setting up variables
const input=document.querySelector(`.todo`);
const enter=document.querySelector(`.enter`);
const body=document.querySelector(`body`);
console.log(body);
let list=[];
//taking the input and putting it into the last li
body.addEventListener(`keydown`,e =>{
  console.log(e);
  let finalInput=input.value;
  console.log(finalInput);
  list.push(finalInput);
  console.log(list);
  let item=document.querySelectorAll(`li.item`);
  item[item.length-1].innerHTML=finalInput;
  item[item.length-1].style.display=`block`;
  console.log(list);
})
