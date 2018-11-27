//finding HTML elements
const button=document.querySelector(`button`);
const colorInput=document.querySelector(`input`);
let content=``;
//setting up other variables
let currentColor=`#ffffff`;

//looking for button push
button.addEventListener(`click`, e =>{
  button.classList.add(`invisible`);//gets rid of button after first use
  //creating title element
  const title=document.createElement(`h1`);
  title.textContent=`${prompt(`Enter a title`)}`;
  //creating <p> element
  content=document.createElement(`p`);
  content.textContent=`${prompt(`Enter some text`)}`;
  console.log(typeof content);
  //appending title and <p> elements
  document.body.append(title, content);
})

//taking color input
colorInput.addEventListener(`input`,e =>{
  currentColor=colorInput.value;
  console.log(currentColor);
  console.log(typeof content);
  if(typeof content===`object`){//if <p> is a string
    //apply currentColor to <p>
    content.style.color=`${currentColor}`;
}
})
