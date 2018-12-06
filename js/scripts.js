//getting HTML elements
const input=document.querySelector(`.add-list`);
const enter=document.querySelector(`.enter`);
const todoList=document.querySelector(`#to-do`);
const doneList=document.querySelector(`#done`);
const completeButton=document.querySelector(`.btn-done`);
//adding placeholders
let currentInput=``;
let todoArray=[];
let doneArray=[]

//setting up functions
function updateList(list, ol){
  ol.innerHTML=``;
  for(let i=0; i<list.length; i++){
    ol.appendChild(list[i].name);
  }
}

function createLi(finalInput){
  //creating elements
  let container={
    name:document.createElement(`li`),//the li
    done:false//whether the item has been completed
  };
  todoArray.push(container);//pushing the li to the list
  container.name.setAttribute(`id`, `${todoArray.length}`);//setting id
  container.name.setAttribute(`draggable`, true);
  //"done" checkbox
  let checkBox=document.createElement(`input`);
  checkBox.setAttribute(`type`, `checkbox`);
  //text of li
  let content=document.createElement(`span`);
  content.textContent=finalInput;
  content.classList.add(`item`);
  container.content=content.textContent;//putting the text into the object
  //delete button
  let del=document.createElement(`button`);
  del.classList.add(`btn-del`);
  del.textContent=`delete`;

  //appending elements
  container.name.append(checkBox, content, del);
  updateList(todoArray, todoList);

  //adding event listeners
  //checkbox
  checkBox.addEventListener(`input`, function(event){
    container.done=checkBox.checked;
    content.classList.toggle(`done`);
    if(checkBox.checked==true){
      doneArray.push(container);
      console.log(doneArray);
    }
  })
  //delete button
  del.addEventListener(`click`, function(event){
    //finding the element that has been deleted
    for(let i=0;i<todoArray.length;i++){
      if(todoArray[i].name==this.parentElement){
        todoArray.splice(i, 1);
        console.log(todoArray);
      }
    }
    updateList(todoArray, todoList);
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
  updateList(doneArray, doneList);
})
