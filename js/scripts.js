const draggable=document.querySelector(`.li-drag`);
const ol=document.querySelectorAll(`ol`);
let currentLocation=``;
draggable.addEventListener(`dragstart`, function(event){
  console.log(event);
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
  console.log(event.target.toString());
  console.log(currentLocation);
  currentLocation.innerHTML=event.target.outerHTML;
})
