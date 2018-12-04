//getting HTML elements
const input=document.querySelector(`.add-list`);
const enter=document.querySelector(`.enter`);
const ol=document.querySelector(`ol`);
const completeButton=document.querySelector(`.btn-done`);
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
  if(listDone==true){
    completeButton.removeAttribute(`disabled`);
  }else if(listDone==false){
    completeButton.setAttribute(`disabled`, true);
  }
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

  //adding event listeners
  container.name.addEventListener(`drag`,function(event){
    console.log(event);
  }, false);
  doneSelect.addEventListener(`input`, function(){
    this.parentElement.classList.toggle(`done`);
    if(doneSelect.checked==true){
      container.done=true;
    }else{
      container.done=false;
    }
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
//"done" button functionality
completeButton.addEventListener(`click`,function(){
  completeButton.setAttribute(`disabled`,`true`);
  todoList=[];
  ol.innerHTML=``;
})
