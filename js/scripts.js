let draggable=``;
const ol=document.querySelectorAll(`ol`);
let currentLocation=``;
let oldLocation=``;
function dragInit(){
  draggable=document.querySelector(`.li-drag`);
  draggable.addEventListener(`dragstart`, function(event){
    console.log(event);
    oldLocation=this.parentElement;
  })

document.addEventListener(`drag`, function(event){

})
ol.forEach(function(element){
    element.addEventListener(`dragover`, function(event){
    event.preventDefault();
    currentLocation=event.target;
  })
})
draggable.addEventListener(`dragend`,function(event){
  console.log(currentLocation);
  console.log(oldLocation);
  oldLocation.innerHTML=``;
  currentLocation.innerHTML=event.target.outerHTML;
  dragInit();
})
}
dragInit();
