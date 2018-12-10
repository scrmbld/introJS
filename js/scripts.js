//getting HTML elements
const input=document.querySelector(`.add-list`);
const enter=document.querySelector(`.enter`);
const todoList=document.querySelector(`#to-do`);
const doneList=document.querySelector(`#done`);
const completeButton=document.querySelector(`.btn-done`);
const clearButton=document.querySelector(`.btn-clear`);
console.log(clearButton);
//adding placeholders
let currentInput=``;
let todoArray=[];
let doneArray=[]

//setting up functions
function updateList(list, ol){
  console.log(todoArray);
  ol.innerHTML=``;//resetting the content of original list
  if(list==todoArray){//determining which list is being updated
      for(let i=0; i<list.length; i++){
        if(list[i].done==false){
          ol.appendChild(list[i].name);
        }else{
          list.splice(i,1);
        }
      }
    }else if(list==doneArray){
      for(let i=0;i<list.length;i++){
        ol.appendChild(list[i].name);
      }
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
    if(container.done==true){
      doneArray.push(todoArray[todoArray.indexOf(container)]);
    }else{
      todoArray.push(doneArray[doneArray.indexOf(container)]);
    }
  });

  //delete button
  del.addEventListener(`click`, function(event){
    if(container.done==false){//determining which list the container is in
      todoArray.splice(todoArray.indexOf(container),1);

      updateList(todoArray, todoList);
    }else{
      doneArray.splice(doneArray.indexOf(container),1);
      updateList(doneArray, doneList);
    }
    console.log(todoList);
  });
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
completeButton.addEventListener(`click`,function(event){
  updateList(doneArray, doneList);
})
//clear clear button
clearButton.addEventListener(`click`,function(event){
  doneArray.splice(0,doneArray.length);

  updateList(doneArray, doneList);
})
