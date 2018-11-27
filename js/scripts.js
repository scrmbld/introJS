/*
const body=document.querySelector(`body`);
console.log(body);
body.addEventListener(`keydown`,e =>{
  console.log(e);
  if(key==`Enter`){
    console.log(e);
  }
})
*/
/*
const title=document.querySelector(`.title`);
console.log(title);
title.innerHTML=prompt(`enter the title`);
*/
const jsLink=document.querySelector(`script`);

const title=document.createElement(`h1`);
title.textContent=`title`;
document.body.insertBefore(title, jsLink);
title.classList.add(`text-center`);

const list=document.createElement(`ul`);
document.body.insertBefore(list, title);

const itemOne=document.createElement(`li`);
itemOne.textContent=`One`;

const itemTwo=document.createElement(`li`);
itemTwo.textContent=`Two`;

const itemThree=document.createElement(`li`);
itemThree.textContent=`Three`;
list.append(itemOne, itemTwo, itemThree);

const button =document.createElement(`button`);
button.id=`my-button`;
button.className=`btn btn-success`;
button.textContent=`submit`;
document.body.appendChild(button);
button.addEventListener(`click`, () =>{
  title.classList.toggle(`visible`);
})
//button.classList.remove(`btn-success`);
