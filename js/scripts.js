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
/*
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
document.body.appendChild(button);//when button is clicked
button.addEventListener(`click`, () =>{
  title.classList.toggle(`visible`);//toggles display of title
})
*/
/*
button.setAttribute(`disabled`, true);//disables button
button.removeAttribute(`disabled`);//immediately re-ea=nables
*/
//button.classList.remove(`btn-success`);
const jsLink=document.querySelector(`script`);
//setting up navbar
const navbar=document.createElement(`nav`);
document.body.insertBefore(navbar, jsLink);

//adding things to navbar
const navItem1=document.createElement(`span`);
navItem1.textContent=`Home`;
navItem1.id=`one`;
const navItem2=document.createElement(`span`);
navItem2.textContent=`Contact`;
const navItem3=document.createElement(`span`);
navItem3.textContent=`About`;
navbar.append(navItem1, navItem2, navItem3);

const header=document.createElement(`h1`);
header.textContent=`Hello World`;
header.classList.add(`text-center`);
document.body.insertBefore(header, jsLink);

const content=document.createElement(`p`);
content.textContent=`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
document.body.insertBefore(content, jsLink);

const footer=document.createElement(`footer`);
footer.textContent=`Find us on FB`;
document.body.insertBefore(footer, jsLink);
