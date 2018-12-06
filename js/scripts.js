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
  //creating elements
  let container={
    name:document.createElement(`li`),//the li
    done:false//whether the item has been completed
  };
  todoList.push(container);//pushing the li to the list
  container.name.setAttribute(`id`, `${todoList.length}`);//setting id

  let checkBox=document.createElement(`input`);
  checkBox.setAttribute(`type`, `checkbox`);

  let content=document.createElement(`span`);
  content.textContent=finalInput;

  container.name.append(checkBox, content);
  ol.appendChild(container.name);
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
