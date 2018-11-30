//setting up variables
//getting HTML elements
const input=document.querySelector(`.add-list`);
const enter=document.querySelector(`.enter`);
const ol=document.querySelector(`ol`);
//adding placeholders
let currentInput=``;
let todoList=[];
//setting up functions
function checkDone(todoList){
  let listDone=true;
  for (let i=0;i<todoList.length;i++){
    if(todoList[i].done==false){
      listDone=false;
      console.log(todoList[i]);
    }
  }
  console.log(listDone);
}
function createLi(finalInput){
  //creating container
  let container={
    name:document.createElement(`li`),
    done:false,
    what:``,
  };
  todoList.push(container);
  console.log(todoList);
  //adding "done" button
  let doneSelect=document.createElement(`input`);
  let type=document.createAttribute(`type`);
  type.value=`checkbox`;
  doneSelect.setAttributeNode(type);
  //creating li
  let li=document.createElement(`span`);
  li.textContent=finalInput;
  container.what=`${li.textContent}`;

  //creating delete button
  let delButton=document.createElement(`button`)
  delButton.textContent=`Delete`;
  delButton.classList.add(`del-button`);
  //appending li content to container
  container.name.append(doneSelect, li, delButton);
  ol.appendChild(container.name);

  //adding functionality to buttons
  doneSelect.addEventListener(`input`, function(){
    this.parentElement.classList.toggle(`done`);
    container.done=true;
    checkDone(todoList);
  })
  delButton.addEventListener(`click`, function(){
    this.parentElement.style.display=`none`;
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
