//setting up variables
//getting HTML elements
const input=document.querySelector(`.add-list`);
const enter=document.querySelector(`.enter`);
const ol=document.querySelector(`ol`);
//adding placeholders
let currentInput=``;
let todoList=[];
//setting up functions
function createLi(finalInput){
  //creating container
  let container=document.createElement(`li`);
  //adding "done" button
  let doneSelect=document.createElement(`input`);
  let type=document.createAttribute(`type`);
  type.value=`checkbox`;
  doneSelect.setAttributeNode(type);
  //creating li
  let li=document.createElement(`span`);
  li.textContent=finalInput;

  //creating delete button
  let delButton=document.createElement(`button`)
  delButton.textContent=`Delete`;
  delButton.classList.add(`del-button`);
  //appending li content to container
  container.append(doneSelect, li, delButton);
  ol.appendChild(container);

  //adding functionality to buttons
  doneSelect.addEventListener(`input`, e =>{
    console.log(doneSelect.value);
  })
  delButton.addEventListener(`click`, e =>{
    container.style.display=`none`;
  })
}
//adding things to list
input.addEventListener(`input`, e =>{
  //taking stuff from the input
  currentInput=input.value;
})
enter.addEventListener(`click`, e =>{
  //finalizing the value taken for the input
  let finalInput=currentInput;
  createLi(finalInput);
})
